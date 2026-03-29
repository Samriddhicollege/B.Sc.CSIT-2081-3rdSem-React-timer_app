import React from 'react';


export const Button = ({ onClick, children, variant = "primary", className = "", disabled = false }) => {
    const baseStyle = {
        padding: '0.75rem 1.5rem',
        borderRadius: '12px',
        border: '1px solid transparent',
        fontWeight: '600',
        fontSize: '1rem',
        cursor: disabled ? 'not-allowed' : 'pointer',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        outline: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.5rem',
        opacity: disabled ? 0.5 : 1,
        fontFamily: 'inherit',
    };

    const variants = {
        primary: {
            backgroundColor: 'var(--accent-color)',
            color: '#fff',
            boxShadow: '0 4px 14px 0 rgba(59, 130, 246, 0.39)',
        },
        danger: {
            backgroundColor: 'var(--danger-color)',
            color: '#fff',
            boxShadow: '0 4px 14px 0 rgba(239, 68, 68, 0.39)',
        },
        success: {
            backgroundColor: 'var(--success-color)',
            color: '#fff',
            boxShadow: '0 4px 14px 0 rgba(16, 185, 129, 0.39)',
        },
        warning: {
            backgroundColor: 'var(--warning-color)',
            color: '#fff',
            boxShadow: '0 4px 14px 0 rgba(245, 158, 11, 0.39)',
        },
        glass: {
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            color: 'var(--text-primary)',
            border: '1px solid var(--glass-border)',
            backdropFilter: 'blur(10px)',
        }
    };

    const currentStyle = { ...baseStyle, ...variants[variant] };

    return (
        <button
            style={currentStyle}
            onClick={disabled ? undefined : onClick}
            className={`reusable-btn ${className}`}
            disabled={disabled}
        >
            {children}
        </button>
    );
};
