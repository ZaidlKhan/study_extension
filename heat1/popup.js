document.addEventListener('DOMContentLoaded', () => {
  const enablePiPButton = document.getElementById('enablePiP');

  enablePiPButton.addEventListener('click', () => {
    chrome.windows.create({
      url: 'pip_window.html',
      type: 'popup',
      width: 400,
      height: 150,
      left: 1000,
      top: 500
    });
  });
});