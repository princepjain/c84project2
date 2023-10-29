canvas = document.getElementById("myCanvas")
ctx = canvas.getContext("2d")

img_width = 300;
img_height = 100;

var img_image;

img_x = 100;
img_y = 100;

function add() {
	img_imag = new Image(); //defining a variable with a new image
	img_imag.onload = uploadimg; // setting a function, onloading this variable
	img_imag.src = img_image;   // load image
}

function uploadimg() {
	ctx.drawImage(img_imag, img_x, img_y, img_width, img_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
		if((keyPressed >=65 && keyPressed<=90)||(keyPressed >=97 && keyPressed<=122)){
			alphabetkey();
		document.getElementById("d1").innerHTML = "You Pressed Alphabet Key";
		console.log("alphabet key")
		}
		else if((keyPressed >=48 && keyPressed<=57)){
        numberkey();
		document.getElementById("d1").innerHTML="You Pressed Number Key";
		console.log("number key")
		}
		else if((keyPressed >=37 && keyPressed <=40)){
		arrowkey();
		document.getElementById("d1").innerHTML="You pressed Arrow key";
		console.log("arrow key")
	}
	  else if((keyPressed == 17,18,19)){
		specialkey();
		document.getElementById("d1").innerHTML="You pressed Special key";
		console.log("special key")
	}
	else{
		otherkey();
		document.getElementById("d1").innerHTML="You pressed Other key";
		console.log("other key")
	}
	    
}

function alphabetkey()
{
	img_image ="Alpkey.png" 
	add();

}
function numberkey()
{
img_image ="numkey.png"
add();	
}
function arrowkey()
{
	img_image ="Arrkey.png"
	add();
}
function specialkey()
{
  img_image ="spkey.png"	
  add();
}
function otherkey()
{
	img_image="otherkey.png";
	add();
}
	
