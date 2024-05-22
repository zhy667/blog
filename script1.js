
window.onload = function() {
  
    const button = document.getElementById('myButton');
    
 
    button.addEventListener('click', function() {
   
        const message = document.getElementById('message');
        
   
        message.textContent = '欢迎来到我的网站!';
    });
};
