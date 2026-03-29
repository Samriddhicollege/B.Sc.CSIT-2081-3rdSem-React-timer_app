import React, { useState } from 'react';

const HistoryList = ({ items, title = "Laps", itemFormatter, onDelete, onUpdate }) => {
    const [editingId, setEditingId] = useState(null);
    const [editName, setEditName] = useState('');

    if (!items || items.length === 0) return null;

    const handleEditClick = (item) => {
        setEditingId(item.id);
        setEditName(item.name || `Lap ${items.length - items.findIndex(i => i.id === item.id)}`);
    };

    const handleSave = (id) => {
        if (onUpdate && editName.trim() !== '') {
            onUpdate(id, editName.trim());
        }
        setEditingId(null);
    };

    return (
        <div style={{
            marginTop: '1.5rem',
            padding: '1rem',
            backgroundColor: 'rgba(0, 0, 0, 0.2)',
            borderRadius: '16px',
            border: '1px solid var(--glass-border)',
            maxHeight: '220px',
            overflowY: 'auto'
        }}>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '0.75rem',
                paddingBottom: '0.5rem',
                borderBottom: '1px solid rgba(255,255,255,0.05)',
                color: 'var(--text-secondary)',
                fontSize: '0.875rem',
                fontWeight: '500',
                textTransform: 'uppercase',
                letterSpacing: '1px'
            }}>
                <span># / Name</span>
                <span>{title} Time</span>
                <span>Action</span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {items.map((item, index) => {
                    const displayIndex = String(items.length - index).padStart(2, '0');
                    const isEditing = editingId === item.id;

                    return (
                        <div
                            key={item.id}
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                padding: '0.5rem 0.75rem',
                                backgroundColor: 'rgba(255,255,255,0.03)',
                                borderRadius: '8px',
                                animation: 'slideUpFade 0.3s ease-out forwards',
                                fontFamily: 'var(--font-mono)'
                            }}
                        >
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flex: 1 }}>
                                <span style={{ color: 'var(--text-secondary)' }}>{displayIndex}</span>
                                {isEditing ? (
                                    <input
                                        type="text"
                                        value={editName}
                                        onChange={(e) => setEditName(e.target.value)}
                                        style={{
                                            background: 'rgba(0,0,0,0.5)',
                                            border: '1px solid var(--accent-color)',
                                            color: 'white',
                                            padding: '2px 4px',
                                            borderRadius: '4px',
                                            width: '80px',
                                            fontFamily: 'var(--font-mono)'
                                        }}
                                        autoFocus
                                    />
                                ) : (
                                    <span style={{ color: 'var(--text-secondary)' }}>{item.name || `Lap ${displayIndex}`}</span>
                                )}
                            </div>

                            <span style={{
                                fontWeight: '600',
                                color: index === 0 ? 'var(--accent-color)' : 'var(--text-primary)',
                                marginRight: '1rem'
                            }}>
                                {itemFormatter ? itemFormatter(item.time) : item.time}
                            </span>

                            <div style={{ display: 'flex', gap: '0.5rem' }}>
                                {isEditing ? (
                                    <button onClick={() => handleSave(item.id)} style={btnStyle('var(--success-color)')}>✓</button>
                                ) : (
                                    <button onClick={() => handleEditClick(item)} style={btnStyle('var(--warning-color)')}>✎</button>
                                )}
                                <button onClick={() => onDelete(item.id)} style={btnStyle('var(--danger-color)')}>✕</button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

const btnStyle = (color) => ({
    background: 'transparent',
    border: `1px solid ${color}`,
    color: color,
    borderRadius: '4px',
    width: '24px',
    height: '24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    fontSize: '0.8rem',
    transition: 'all 0.2s',
});

export default HistoryList;
