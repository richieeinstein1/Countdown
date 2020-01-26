
var x = setInterval(function() { 

var deadline = new Date("dec 25, 2020 00: 00: 00").getTime(); 
var now = new Date().getTime(); 
var t = deadline - now; 
function time() {

var days = Math.floor(t / (1000 * 60 * 60 * 24)); 
var hours = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60)); 
var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60)); 
var seconds = Math.floor((t % (1000 * 60)) / 1000); 
document.getElementById("day").innerHTML =days ; 
document.getElementById("hour").innerHTML =hours; 
document.getElementById("minute").innerHTML = minutes; 
document.getElementById("second").innerHTML =seconds; 

}

if(t<0){
    clearTimeout(x)
}
else{
time()  
}
 
}, 1000); 
