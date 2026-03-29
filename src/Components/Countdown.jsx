import React, { useState, useEffect, useRef } from 'react';
import { Button } from './Reusable';
import useLocalStorage from '../utils/useLocalStorage';
import { formatCountdown } from '../utils/timeFormatters';

const Countdown = () => {
    // Save user's last preferred countdown inputs to LocalStorage
    const [savedInputs, setSavedInputs] = useLocalStorage('last-countdown', { h: '', m: '', s: '' });

    const [inputHours, setInputHours] = useState(savedInputs.h);
    const [inputMinutes, setInputMinutes] = useState(savedInputs.m);
    const [inputSeconds, setInputSeconds] = useState(savedInputs.s);

    const [timeRemaining, setTimeRemaining] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [isFinished, setIsFinished] = useState(false);

    const timerRef = useRef(null);
    const endTimeRef = useRef(0);

    // Sync state changes back to LocalStorage custom hook explicitly 
    const handleInputChange = (field, value) => {
        // Basic validation
        let num = parseInt(value, 10);
        if (isNaN(num)) num = '';
        else if (num < 0) num = '0';

        if (field === 'h') setInputHours(num);
        if (field === 'm') setInputMinutes(num);
        if (field === 's') setInputSeconds(num);

        setSavedInputs({
            h: field === 'h' ? num : inputHours,
            m: field === 'm' ? num : inputMinutes,
            s: field === 's' ? num : inputSeconds
        });
    };

    const startTimer = () => {
        let totalSeconds = timeRemaining;
        if (totalSeconds === 0 && !isRunning) {
            const h = parseInt(inputHours) || 0;
            const m = parseInt(inputMinutes) || 0;
            const s = parseInt(inputSeconds) || 0;
            totalSeconds = h * 3600 + m * 60 + s;
            setTimeRemaining(totalSeconds);
        }

        if (totalSeconds > 0) {
            endTimeRef.current = Date.now() + totalSeconds * 1000;
            setIsRunning(true);
            setIsFinished(false);
        }
    };

    useEffect(() => {
        if (isRunning) {
            timerRef.current = setInterval(() => {
                const remaining = Math.ceil((endTimeRef.current - Date.now()) / 1000);
                if (remaining <= 0) {
                    setTimeRemaining(0);
                    setIsRunning(false);
                    setIsFinished(true);
                    clearInterval(timerRef.current);
                } else {
                    setTimeRemaining(remaining);
                }
            }, 100);
        }
        return () => clearInterval(timerRef.current);
    }, [isRunning]);

    const handleStartPause = () => {
        if (isRunning) {
            setIsRunning(false); // Pause
        } else {
            startTimer();
        }
    };

    const handleReset = () => {
        setIsRunning(false);
        setTimeRemaining(0);
        setIsFinished(false);
        setInputHours('');
        setInputMinutes('');
        setInputSeconds('');
        setSavedInputs({ h: '', m: '', s: '' });
    };

    const inputStyle = {
        width: '64px',
        padding: '0.75rem 0.25rem',
        borderRadius: '12px',
        border: '1px solid var(--glass-border)',
        backgroundColor: 'rgba(255,255,255,0.05)',
        color: 'var(--text-primary)',
        fontFamily: 'var(--font-mono)',
        fontSize: '1.25rem',
        textAlign: 'center',
        outline: 'none',
        transition: 'all 0.3s ease'
    };

    const isSetupDisabled = timeRemaining > 0 || isRunning || isFinished;
    const isStartDisabled = !isRunning && timeRemaining === 0 && (!inputHours && !inputMinutes && !inputSeconds) && !isFinished;

    return (
        <div className={(isRunning || isFinished) ? (isRunning ? 'running' : '') : ''} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div
                className="time-display"
                style={{
                    color: isFinished ? 'var(--danger-color)' : 'inherit',
                    animation: isFinished ? 'pulse 0.5s infinite alternate' : undefined,
                    textShadow: isFinished ? '0 0 20px rgba(239, 68, 68, 0.6)' : undefined
                }}
            >
                {formatCountdown(timeRemaining)}
            </div>

            {!isSetupDisabled && (
                <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', marginBottom: '2rem', alignItems: 'center' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
                        <input
                            type="number"
                            placeholder="00"
                            min="0" max="99"
                            style={inputStyle}
                            value={inputHours}
                            onChange={e => handleInputChange('h', e.target.value)}
                        />
                        <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>HR</span>
                    </div>
                    <span style={{ fontSize: '1.5rem', fontWeight: 'bold', alignSelf: 'flex-start', marginTop: '10px' }}>:</span>

                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
                        <input
                            type="number"
                            placeholder="00"
                            min="0" max="59"
                            style={inputStyle}
                            value={inputMinutes}
                            onChange={e => handleInputChange('m', e.target.value)}
                        />
                        <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>MIN</span>
                    </div>
                    <span style={{ fontSize: '1.5rem', fontWeight: 'bold', alignSelf: 'flex-start', marginTop: '10px' }}>:</span>

                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
                        <input
                            type="number"
                            placeholder="00"
                            min="0" max="59"
                            style={inputStyle}
                            value={inputSeconds}
                            onChange={e => handleInputChange('s', e.target.value)}
                        />
                        <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>SEC</span>
                    </div>
                </div>
            )}

            {isFinished && (
                <div style={{ textAlign: 'center', marginBottom: '1.5rem', color: 'var(--danger-color)', fontWeight: '600', fontSize: '1.25rem', animation: 'slideUpFade 0.3s ease-out' }}>
                    Time's Up!
                </div>
            )}

            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: isSetupDisabled ? '2rem' : '0' }}>
                <Button
                    variant={isRunning ? "warning" : "success"}
                    onClick={handleStartPause}
                    disabled={isStartDisabled}
                >
                    {isRunning ? "Pause" : (timeRemaining > 0 ? "Resume" : "Start")}
                </Button>
                <Button
                    variant="glass"
                    onClick={handleReset}
                    disabled={timeRemaining === 0 && !isFinished && !inputHours && !inputMinutes && !inputSeconds}
                >
                    Reset
                </Button>
            </div>
        </div>
    );
};

export default Countdown;
