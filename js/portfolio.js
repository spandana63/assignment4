
function division()
{
	var divs = document.querySelectorAll("img");
    for(var i=0; i<divs.length; i++) { 
    	divs[i].style.visibility = "hidden";}
    document.getElementById('pic1').style.visibility = "visible";
	document.getElementById('pic2').style.visibility = "visible";
}
function web() {
	division();
	document.getElementById('pic1').src = "imgs/img9.png";
	document.getElementById('pic2').src = "imgs/img10.png";
}

function word() {
	division();
	document.getElementById('pic1').src = "imgs/img1.png";
	document.getElementById('pic2').src = "imgs/notes.png";
}
function apps() {
	division();
	document.getElementById('pic1').src = "imgs/img3.png";
	document.getElementById('pic2').src = "imgs/img12.png";
}
function icons() {
	division();
	document.getElementById('pic1').src = "imgs/img11.png";
	document.getElementById('pic2').src = "imgs/img4.png";
}
function logos() {
	division();
	document.getElementById('pic1').src = "imgs/arrow.png";
	document.getElementById('pic2').src = "imgs/lemon.png";
	document.getElementById('pic3').style.visibility = "visible";
	document.getElementById('pic3').src = "imgs/geo.png";
}
function graphics() {
	division();
	document.getElementById('pic1').src = "imgs/img7.png";
	document.getElementById('pic2').src = "imgs/img2.png";
}