{const article = document.querySelector(".applicant-deceased-info .section-header ng-tns-c1873003609-7");


 
    document.querySelector(".applicant-deceased-info .section-header ng-tns-c1873003609-7")
    const ele = document.createElement("button")
    const target =document.querySelector(".applicant-deceased-info .section-header ng-tns-c1873003609-7")
    ele.innerText = "click me"
    document.addEventListener("click", function(){
      document.getElementById("demo").addEventListener("click", myFunction);
  });
    target.insertAdjacentElement("afterend",ele)
  }