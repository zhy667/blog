document.getElementById('changeColor').addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        console.log({tabs})
        // return;
        const activeTab = tabs[0];
        console.log({activeTab})
        if (activeTab.url.startsWith('http')) {  // 检查是否为普通网页
            console.log("ssss")
            chrome.scripting.executeScript({
                target: { tabId: activeTab.id },
                function: changeBackgroundColor()
            });
        } else {
            console.error('Cannot execute script on non-http/https pages');
        }
    });
});

function changeBackgroundColor() {
    console.log('change')
    document.body.style.backgroundColor = 'yellow';
}
