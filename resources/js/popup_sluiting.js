// Shows a popup during closure periods (summer, Christmas, ...).
// The periods and messages are configured in resources/sluitingen_popup.json

const DISMISSED_KEY = 'sluitingPopupGesloten';

// Dates are "MM-DD" strings; a window may wrap over new year (e.g. "11-05" to "01-04")
function isTodayInWindow(startDate, endDate) {
  const today = new Date();
  const monthDay = String(today.getMonth() + 1).padStart(2, '0') + '-' +
                   String(today.getDate()).padStart(2, '0');

  if (startDate <= endDate) {
    return monthDay >= startDate && monthDay <= endDate;
  }
  return monthDay >= startDate || monthDay <= endDate;
}

// Load JSON configuration, skip if already dismissed this browser session
if (!sessionStorage.getItem(DISMISSED_KEY)) {
  fetch('resources/sluitingen_popup.json')
    .then(response => response.json())
    .then(config => {
      const sluiting = config.sluitingen.find(
        s => s.enabled && isTodayInWindow(s.startDate, s.endDate)
      );
      if (!sluiting) return;

      document.getElementById('popup-message').textContent = sluiting.message;
      document.getElementById('sluiting-overlay').classList.remove('hidden');
    });
}

// Close button functionality
document.getElementById('close-popup-btn').addEventListener('click', () => {
  document.getElementById('sluiting-overlay').classList.add('hidden');
  sessionStorage.setItem(DISMISSED_KEY, '1');
});
