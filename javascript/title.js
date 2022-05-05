if(document.addEventListener){
	document.addEventListener("DOMContentLoaded", function(){
		loaded();
	});
} else if(document.attachEvent){
	document.attachEvent("onreadystatechange", function(){
		loaded();
	});
}
function loaded(){
	setInterval(loop, 300);
}
var x = 0;
var titleText = [ "", "f|", "f/", "fu|", "fu/", "fus|", "fus/", "fuss|", "fuss/", "fussi|", "fussi/", "fussia|", "fussia/", "fussi|", "fussi/", "fuss|", "fuss/", "fus|", "fus/", "fu|", "fu/", "f|", "f/", "乡"];

function loop(){
	document.getElementsByTagName("title")[0].innerHTML = titleText[x++%titleText.length];
}
