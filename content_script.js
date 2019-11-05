$(document).ready(function() {
var clickFuntion = window.setInterval(function(){
   $("._3M-N-").click();
    
}, 1000);

setTimeout(function(){clearInterval(clickFuntion);}, 35000);
});