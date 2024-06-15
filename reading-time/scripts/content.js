

{document.querySelector(".rating-header-title").textContent
  const button = document.createElement("button")
  button.innerText="Click me"
   
  const vehicle1 = document.querySelector(".rating-header-title")
  
  
  vehicle1.insertAdjacentElement("afterend",button)
  button.addEventListener("click", function() {
    window.open("https://hongyu.life/indexedDb.html", "_blank");

  })
}
