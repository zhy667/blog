const article = document.querySelector("article");

// `document.querySelector` may return null if the selector doesn't match anything.
if (article) {
  const text = article.textContent;
  const wordMatchRegExp = /[^\s]+/g; // Regular expression
  const words = text.matchAll(wordMatchRegExp);
  // matchAll returns an iterator, convert to array to get word count
  const wordCount = [...words].length;
  const readingTime = Math.round(wordCount / 200);
  const badge = document.createElement("p");
  // Use the same styling as the publish information in an article's header
  badge.classList.add("color-secondary-text", "type--caption");
  badge.textContent = `⏱️ ${readingTime} min read`;

  // Support for API reference docs
  const heading = article.querySelector("h1");
  // Support for article docs with date
  const date = article.querySelector("time")?.parentNode;

  (date ?? heading).insertAdjacentElement("afterend", badge);
  alert(123)
 
  document.addEventListener('DOMContentLoaded', () => {
    const target = document.querySelector('.ng-tns-c1798928316-91');
  
    // 检查目标元素是否存在
    if (target) {
      // 创建一个按钮元素
      const ele = document.createElement('button');
      ele.innerText = '点击我'; // 为按钮添加显示文本
  
      // 为按钮添加点击事件监听器
      ele.addEventListener('click', () => {
        alert('按钮被点击了！');
      });
  
      // 将按钮插入到目标元素之后
      target.insertAdjacentElement('afterend', ele);
    } else {
      console.error('找不到元素: .ng-tns-c1798928316-91');
    }
  });
  
}