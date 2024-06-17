




window.onload = function () {

    const vehicleElements = document.querySelectorAll(".rating-header-title");


    vehicleElements.forEach(vehicleElement => {

        if (vehicleElement && vehicleElement.textContent.includes("Vehicle")) {

            const button = document.createElement("button");
            button.innerText = "Click me";
            vehicleElement.insertAdjacentElement("afterend", button);

            button.addEventListener("click", function () {


                const url = `https://example.com/`;
                window.open(url, "_blank");



                chrome.storage.local.set({ Vehicle: 'year:year,make:make' }, function () {
                    console.log('Data saved.');

                });


            });
        }
    });



};

 chrome.storage.local.get('Vehicle', function (result) {
     console.log('Vehicle is ' + result.Vehicle);
 })

chrome.runtime.onMessage.addListener((request, sender,sendResponse) => {

    console.log(request)
    if (request.action === "scan") {
        console.log(request)
        //sendResponse(scanPage(request.action.helper));
        sendResponse("123546")

    }
})

