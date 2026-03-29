import React, { useState } from 'react';
import Stopwatch from './Stopwatch';
import Countdown from './Countdown';
import Quote from './Quote';
import useLocalStorage from '../utils/useLocalStorage';

const TimerContainer = () => {
    // Use localStorage hook for saving the last visited tab (State Management + LocalStorage)
    const [activeTab, setActiveTab] = useLocalStorage('timer-active-tab', 'stopwatch');

    return (
        <div className="app-container">
            <div style={{
                backgroundColor: 'var(--glass-bg)',
                backdropFilter: 'blur(24px)',
                WebkitBackdropFilter: 'blur(24px)',
                border: '1px solid var(--glass-border)',
                boxShadow: 'var(--glass-shadow)',
                borderRadius: '32px',
                padding: '2.5rem',
                overflow: 'hidden',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column'
            }}>

                {/* Header Tabs */}
                <div style={{
                    display: 'flex',
                    backgroundColor: 'rgba(0,0,0,0.2)',
                    borderRadius: '16px',
                    padding: '6px',
                    marginBottom: '2rem',
                    position: 'relative',
                }}>
                    {['stopwatch', 'countdown'].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            style={{
                                flex: 1,
                                padding: '0.875rem',
                                border: 'none',
                                background: activeTab === tab ? 'var(--accent-color)' : 'transparent',
                                color: activeTab === tab ? '#fff' : 'var(--text-secondary)',
                                borderRadius: '12px',
                                fontWeight: '600',
                                fontSize: '1.1rem',
                                cursor: 'pointer',
                                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                textTransform: 'capitalize',
                                outline: 'none',
                                boxShadow: activeTab === tab ? '0 4px 20px 0 rgba(59, 130, 246, 0.4)' : 'none'
                            }}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Content Area */}
                <div style={{ minHeight: '340px', animation: 'slideUpFade 0.4s ease-out' }} key={activeTab}>
                    {activeTab === 'stopwatch' ? <Stopwatch /> : <Countdown />}
                </div>

                {/* Render API Quote Component */}
                <Quote />
            </div>
        </div>
    );
};

export default TimerContainer;
