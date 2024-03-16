chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "enablePiP") {
      const video = document.querySelector('video');
      if (video && !document.pictureInPictureElement) {
          video.requestPictureInPicture().catch(error => {
              console.error('Error attempting to enable Picture-in-Picture mode:', error);
          });
      }
  }
});