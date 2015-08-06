setTimeout(function preloader() {
	document.getElementById('loader').style.display = 'none';
	document.getElementById('container').style.display = 'block';
}, 1500);
window.onload = preloader;

function c(val) {
    document.getElementById("d").value=val;
}


function math(val) {
    document.getElementById("d").value+=val;
}


function e() { 
    try { 
      c(eval(document.getElementById("d").value)) 
    } 
    catch(e) {
      c('Error') 
    } 
}