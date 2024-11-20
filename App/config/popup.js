// Analog clock functionality
function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
  
    const hourDegree = (hours % 12) * 30 + (minutes / 60) * 30;
    const minuteDegree = minutes * 6;
    const secondDegree = seconds * 6;
  
    document.getElementById('hour').style.transform = `rotate(${hourDegree}deg)`;
    document.getElementById('minute').style.transform = `rotate(${minuteDegree}deg)`;
    document.getElementById('second').style.transform = `rotate(${secondDegree}deg)`;
  }
  
  // Timer functionality
  document.getElementById('startTimerBtn').addEventListener('click', () => {
    const timerMinutes = parseInt(document.getElementById('timerInput').value, 10);
    if (isNaN(timerMinutes) || timerMinutes <= 0) {
      alert('Please enter a valid time.');
      return;
    }
  
    const timerDuration = timerMinutes * 60 * 1000;
    chrome.alarms.create('timerAlarm', { when: Date.now() + timerDuration });
    alert(`Timer set for ${timerMinutes} minutes.`);
  });
  
  // Alarm functionality
  document.getElementById('setAlarmBtn').addEventListener('click', () => {
    const alarmTime = document.getElementById('alarmTime').value;
    const alarmDate = new Date();
    const [hours, minutes] = alarmTime.split(':').map(num => parseInt(num, 10));
  
    alarmDate.setHours(hours);
    alarmDate.setMinutes(minutes);
    alarmDate.setSeconds(0);
    alarmDate.setMilliseconds(0);
  
    chrome.alarms.create('alarm', { when: alarmDate.getTime() });
    alert(`Alarm set for ${alarmTime}.`);
  });
  
  // Update the clock every second
  setInterval(updateClock, 1000);
  