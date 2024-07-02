function updateDateTime() {
    const now = new Date();
    const utcTime = now.toUTCString();
    const day = now.toLocaleDateString('en-US', { weekday: 'long' });
    
    document.getElementById('currentTime').textContent = utcTime;
    document.getElementById('currentDay').textContent = day;
}

updateDateTime();
setInterval(updateDateTime, 1000);