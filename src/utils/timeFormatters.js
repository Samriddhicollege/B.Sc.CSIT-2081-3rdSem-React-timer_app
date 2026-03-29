export const formatTime = (timeInMs) => {
    if (timeInMs < 0) return "00:00:00.00";
    const date = new Date(timeInMs);
    const m = String(date.getUTCHours() * 60 + date.getUTCMinutes()).padStart(2, '0');
    const s = String(date.getUTCSeconds()).padStart(2, '0');
    const ms = String(Math.floor(date.getUTCMilliseconds() / 10)).padStart(2, '0');
    return `${m}:${s}.${ms}`;
};

export const formatCountdown = (timeInSeconds) => {
    if (timeInSeconds < 0) return "00:00:00";
    const h = String(Math.floor(timeInSeconds / 3600)).padStart(2, '0');
    const m = String(Math.floor((timeInSeconds % 3600) / 60)).padStart(2, '0');
    const s = String(timeInSeconds % 60).padStart(2, '0');
    return `${h}:${m}:${s}`;
};
