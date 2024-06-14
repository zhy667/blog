chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'download') {
      const blob = new Blob([message.data], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
  
      chrome.downloads.download({
        url: url,
        filename: 'scrapedData.txt',
        conflictAction: 'overwrite'
      }, () => {
        URL.revokeObjectURL(url);
        sendResponse({ success: true });
      });
  
      return true; // Keeps the sendResponse function valid after returning
    }
  });
  