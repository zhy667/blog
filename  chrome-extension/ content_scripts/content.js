
const keyword = '20246';


const paragraphs = document.querySelectorAll('article p');


paragraphs.forEach((p, index) => {
  if (p.innerText.includes(keyword)) {
    
    const button = document.createElement('button');
    button.innerText = '匹配成功，点击下载';
    button.style.marginLeft = '10px';
    
    事件监听器
    button.addEventListener('click', () => {
      
      const output = `匹配的段落内容: ${p.innerText}`;

      
      chrome.runtime.sendMessage({ action: 'download', data: output }, response => {
        if (response && response.success) {
          console.log('Data successfully downloaded');
        } else {
          console.error('Failed to download data');
        }
      });
    });

    p.appendChild(button);
  }
});
