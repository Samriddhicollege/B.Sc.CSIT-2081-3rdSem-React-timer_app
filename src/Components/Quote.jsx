import React, { useState, useEffect } from 'react';

const Quote = () => {
    const [quoteData, setQuoteData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isOnline, setIsOnline] = useState(navigator.onLine);

    useEffect(() => {
        const handleOnline = () => setIsOnline(true);
        const handleOffline = () => setIsOnline(false);

        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);

        return () => {
            window.removeEventListener('online', handleOnline);
            window.removeEventListener('offline', handleOffline);
        };
    }, []);

    useEffect(() => {
        let isMounted = true;

        const fetchQuote = async () => {
            if (!isOnline) {
                if (isMounted) setLoading(false);
                return;
            }
            try {
                setLoading(true);
                // Using a public dummy JSON API for the API Handling criteria
                const response = await fetch('https://dummyjson.com/quotes/random');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();

                if (isMounted) {
                    setQuoteData(data);
                    setError(null);
                }
            } catch (err) {
                if (isMounted) {
                    setError(err.message || 'Failed to fetch quote');
                }
            } finally {
                if (isMounted) {
                    setLoading(false);
                }
            }
        };

        fetchQuote();

        return () => {
            isMounted = false; // cleanup
        };
    }, [isOnline]); // Fetch quote when component mounts or online status changes

    if (!isOnline) {
        return (
            <div style={{
                marginTop: '2rem',
                padding: '1rem',
                backgroundColor: 'rgba(255, 255, 255, 0.03)',
                borderRadius: '12px',
                border: '1px solid var(--glass-border)',
                textAlign: 'center',
                color: 'var(--text-secondary)',
                fontSize: '0.9rem'
            }}>
                You are offline
            </div>
        );
    }

    if (loading) {
        return (
            <div style={{ textAlign: 'center', color: 'var(--text-secondary)', fontSize: '0.875rem', marginTop: '1.5rem', animation: 'pulse 1.5s infinite' }}>
                Loading inspiration...
            </div>
        );
    }

    if (error) {
        return (
            <div style={{ textAlign: 'center', color: 'var(--danger-color)', fontSize: '0.875rem', marginTop: '1.5rem' }}>
                {error}
            </div>
        );
    }

    return (
        <div style={{
            marginTop: '2rem',
            padding: '1rem',
            backgroundColor: 'rgba(255, 255, 255, 0.03)',
            borderRadius: '12px',
            border: '1px solid var(--glass-border)',
            textAlign: 'center',
            fontStyle: 'italic',
            color: 'var(--text-secondary)',
            fontSize: '0.9rem',
            transition: 'all 0.3s ease'
        }}>
            "{quoteData?.quote}"
            <div style={{ marginTop: '0.5rem', fontWeight: 'bold', fontSize: '0.8rem', color: 'var(--text-primary)' }}>
                — {quoteData?.author}
            </div>
        </div>
    );
};

export default Quote;
