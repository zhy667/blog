chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: changeBackgroundColor
    });
  });
  
  function changeBackgroundColor() {
    document.body.style.backgroundColor = 'yellow';
  }
  