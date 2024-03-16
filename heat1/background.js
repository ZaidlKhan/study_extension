chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "centerWindow" && sender.tab && sender.tab.windowId) {
      chrome.windows.get(sender.tab.windowId, {}, (window) => {
          const screenWidth = screen.availWidth;
          const screenHeight = screen.availHeight;
          const width = 100;  
          const height = 100; 

          const left = Math.round((screenWidth - width) / 2);
          const top = Math.round((screenHeight - height) / 2);

          chrome.windows.update(sender.tab.windowId, {
              left: left,
              top: top,
              width: width,
              height: height
          });
      });
  }
});