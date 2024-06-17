// window.onload = function () {

//     const sectionHeaders = document.querySelectorAll('.sectionHeaders');


//     if (sectionHeaders.length > 0) {
//         console.log(`Found ${sectionHeaders.length} elements with class 'sectionHeaders'.`);


//         sectionHeaders.forEach((header, index) => {

//             console.log(`Element ${index + 1} text: ${header.textContent.trim()}`);

//             header.addEventListener('click', () => {
//                 alert(`You clicked on header ${index + 1}: ${header.textContent.trim()}`);
//             });
//         });
//     } else {
//         console.log('No elements with class \'sectionHeaders\'.');
//     }
//     chrome.storage.local.get('Vehicle', function (result) {
//         console.log('Vehicle is ' + result.Vehicle);
//     })
// }

// alert("loaded")
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    // alert("clicked")
    console.log(request)
    if (request.action === "scan") {
        console.log("scan", request)
        sendResponse(scanPage(request.action.helper));
    }
})
