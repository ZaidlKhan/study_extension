document.addEventListener('DOMContentLoaded', () => {
  const enablePiPButton = document.getElementById('enablePiP');

  enablePiPButton.addEventListener('click', () => {
    const popupWidth = 300;
    const popupHeight = 500;

    const leftPosition = (screen.width / 2) - (popupWidth / 2);
    const topPosition = (screen.height / 2) - (popupHeight / 2);

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