




window.onload = function() {

    const vehicleElements = document.querySelectorAll(".rating-header-title");


    vehicleElements.forEach(vehicleElement => {
    
        if (vehicleElement && vehicleElement.textContent.includes("Vehicle")) {
            
            const button = document.createElement("button");
            button.innerText = "Click me";
            vehicleElement.insertAdjacentElement("afterend", button);
           
            button.addEventListener("click", function() {
            
                const year = "2014";
                const make = "DODGE";
                const url = `https://example.com/?year=${year}&make=${make}`;
                window.open(url, "_blank");
                
              
              
                chrome.storage.local.set({Vehicle: 'year:year,make:make'}, function() {
                    console.log('Data saved.');
                   
                });

               
            });
        }
    });

    chrome.storage.local.get('Vehicle', function(result) {
        console.log('Vehicle is ' + result.Vehicle);
    })
};
window.alert("sometext");