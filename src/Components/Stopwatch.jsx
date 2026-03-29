import React, { useState, useEffect, useRef } from 'react';
import { Button } from './Reusable';
import HistoryList from './HistoryList';
import useLocalStorage from '../utils/useLocalStorage';
import { formatTime } from '../utils/timeFormatters';

const Stopwatch = () => {
    const [isRunning, setIsRunning] = useState(false);
    const [time, setTime] = useState(0);

    // Custom hook usage for LocalStorage and CRUD persistence
    const [laps, setLaps] = useLocalStorage('stopwatch-laps', []);

    const timerRef = useRef(null);
    const startTimeRef = useRef(0);

    useEffect(() => {
        if (isRunning) {
            timerRef.current = setInterval(() => {
                setTime(Date.now() - startTimeRef.current);
            }, 10);
        }
        return () => clearInterval(timerRef.current);
    }, [isRunning]);

    const handleStartStop = () => {
        if (isRunning) {
            setIsRunning(false);
        } else {
            startTimeRef.current = Date.now() - time;
            setIsRunning(true);
        }
    };

    const handleReset = () => {
        setIsRunning(false);
        setTime(0);
        setLaps([]);
    };

    // CRUD: Create lap
    const handleLap = () => {
        if (isRunning) {
            const displayIndex = String(laps.length + 1).padStart(2, '0');
            const newLap = {
                id: Date.now().toString(),
                time: time,
                name: `Lap ${displayIndex}`
            };
            setLaps(prev => [newLap, ...prev]);
        }
    };

    // CRUD: Update lap
    const handleUpdateLap = (id, newName) => {
        setLaps(prev => prev.map(lap => lap.id === id ? { ...lap, name: newName } : lap));
    };

    // CRUD: Delete lap
    const handleDeleteLap = (id) => {
        setLaps(prev => prev.filter(lap => lap.id !== id));
    };

    return (
        <div className={isRunning ? 'running' : ''}>
            <div className="time-display">{formatTime(time)}</div>

            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginBottom: '1.5rem' }}>
                <Button
                    variant={isRunning ? "danger" : "primary"}
                    onClick={handleStartStop}
                >
                    {isRunning ? "Stop" : "Start"}
                </Button>
                <Button
                    variant="glass"
                    onClick={handleLap}
                    disabled={!isRunning}
                >
                    Lap
                </Button>
                <Button
                    variant="glass"
                    onClick={handleReset}
                    disabled={isRunning || time === 0}
                >
                    Reset
                </Button>
            </div>

            <HistoryList
                items={laps}
                title="Lap"
                itemFormatter={formatTime}
                onDelete={handleDeleteLap}
                onUpdate={handleUpdateLap}
            />
        </div>
    );
};

export default Stopwatch;
