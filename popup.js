// Opens pip_window.html
// upon content load
document.addEventListener('DOMContentLoaded', () => {
  const enablePiPButton = document.getElementById('enablePiP');

  enablePiPButton.addEventListener('click', () => {
    // Opened window dimensions
    const popupWidth = 400;
    const popupHeight = 600;

    // Screen position
    const leftPosition = (screen.width / 2) - (popupWidth / 2);
    const topPosition = (screen.height / 2) - (popupHeight / 2);

    // Create window
    chrome.windows.create({
      url: 'pip_window.html',
      type: 'popup',
      width: popupWidth,
      height: popupHeight,
      left: Math.round(leftPosition),
      top: Math.round(topPosition)
    });
  });
});