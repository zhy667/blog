{const article = document.querySelector(".ng-tns-c1798928316-91");


 
  document.querySelector(".ng-tns-c1798928316-91")
  const ele = document.createElement("button")
  const target =document.querySelector(".ng-tns-c1798928316-91")
  ele.innerText = "click me"
  document.addEventListener("click", function(){
    document.getElementById("demo").addEventListener("click", myFunction);
});
  target.insertAdjacentElement("afterend",ele)
}