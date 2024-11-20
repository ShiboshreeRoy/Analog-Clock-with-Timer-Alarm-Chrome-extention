chrome.runtime.onInstalled.addListener(() => {
    console.log('Analog Clock Extension Installed');
  });
  
  // Handle alarm notifications when timer ends
  chrome.alarms.onAlarm.addListener((alarm) => {
    if (alarm.name === 'timerAlarm') {
      chrome.notifications.create('timerNotification', {
        type: 'basic',
        iconUrl: 'icons/icon.png',
        title: 'Timer Alert',
        message: 'Your timer has ended!',
        priority: 2,
      });
    } else if (alarm.name === 'alarm') {
      chrome.notifications.create('alarmNotification', {
        type: 'basic',
        iconUrl: 'icons/icon.png',
        title: 'Alarm',
        message: 'It\'s time!',
        priority: 2,
      });
    }
  });
  