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
 
  document.querySelector(".ng-tns-c1798928316-91").textContent
  const ele = document.createElement("button")
  const target =document.querySelector(".ng-tns-c1798928316-91")
  ele.innerText = "click me"
  ele.addEventListener('click', () => {
    alert('按钮被点击了！');
  
  });
  target.insertAdjacentElement("afterend",ele)
}