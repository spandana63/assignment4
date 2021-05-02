function results()
{
	var names = document.getElementById('name').value;
	var emails = document.getElementById('email').value;
	var subs = document.getElementById('subject').value;
	var descs = document.getElementById('desc').value;

	document.write("<h1> Thank You! </h1>");
	document.write("<h2>Here are the details gathered : </h2>");
	document.write("Your Name : "+names+"<br/> Your Email :"+emails+"<br/> Subject : "+subs+"<br/> Description : "+descs);



}