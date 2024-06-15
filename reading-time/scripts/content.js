

{document.querySelector(".rating-header-title").textContent
  const button = document.createElement("button")
  button.innerText="Click me"
   
  const vehicle1 = document.querySelector(".rating-header-title")
  
  
  vehicle1.insertAdjacentElement("afterend",button)
  button.addEventListener("click", function() {
    const year = "2014";
    const make= "DODGE";
    const url = `https://example.com/?year=${year}&make=${make}`;
    window.open(url, "_blank");

  })
}
