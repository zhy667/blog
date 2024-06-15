

{document.querySelector(".rating-header-title").textContent
  const button = document.createElement("button")
  button.innerText="Click me"
   
  const vehicle1 = document.querySelector(".rating-header-title")
  
  
  vehicle1.insertAdjacentElement("afterend",button)
  button.addEventListener("click", function() {
    const address = "1";
    const applicant = "2";
    const url = `https://example.com/?Address=${address}&Applicant=${applicant}`;
    window.open(url, "_blank");

  })
}
