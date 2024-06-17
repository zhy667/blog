document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('scan').addEventListener('click', () => {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            if (tabs.length > 0) {
                chrome.tabs.sendMessage(tabs[0].id, { action: "scan" }, (response) => {
                    document.getElementById('results').textContent = JSON.stringify(response, null, 2)
                });
            } else {
                console.error("No active tab found.");
            }
        });
    });
});
