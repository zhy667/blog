

{document.querySelector(".rating-header-title").textContent
  const button = document.createElement("button")
  button.innerText="Click me"
   
  const vehicle1 = document.querySelector(".rating-header-title")
  
  
  vehicle1.insertAdjacentElement("afterend",button)
  button.addEventListener("click", function() {
    const example = "try";
    const model = "try";
    const url = `https://example.com/?example=${example}&model=${model}`;
    window.open(url, "_blank");

  })
}
