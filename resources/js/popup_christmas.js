// Load JSON configuration
fetch('resources/sluiting_kerstmis_popup.json')
  .then(response => response.json())
  .then(config => {
    if (!config.enabled) return;

    const today = new Date();
    const year = today.getFullYear();

    // Construct start and end dates for this year
    const startDate = new Date(`${year}-${config.startDate}`); // e.g., "12-01"
    const endDate = new Date(`${year}-${config.endDate}`);     // e.g., "12-26"

    // Show popup if today is within the range
    if (today >= startDate && today <= endDate) {
      const messageEl = document.getElementById('popup-message');
      messageEl.textContent = config.message;

      const overlayEl = document.getElementById('christmas-overlay');
      overlayEl.classList.remove('hidden');
    }
  });

// Close button functionality
document.getElementById('close-popup-btn').addEventListener('click', () => {
  const overlayEl = document.getElementById('christmas-overlay');
  overlayEl.classList.add('hidden');

});
