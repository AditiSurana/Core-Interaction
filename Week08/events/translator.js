var alphabet = "abcdefghijklmnopqrstuvwxyz"; // a string full of letters
var letter_array = []; // make an empty array to store the letters

for(i = 0; i < alphabet.length; i++) {
	// for every letter in the string...
	letter_array.push(alphabet[i]); // ...add that letter to the array
}



// once that array's set up, you can use the cleaner "forEach" syntax to iterate through the array, calling a function with each element as an argument:
letter_array.forEach(make_a_div);


// then you have to define that "make_a_div" function:
function make_a_div(element, index) {
	// element = the individual list item (gets passed in automatically by forEach)
	// index = numerical index of this element in the array (ditto ^)

	var newdiv = document.createElement("div"); // make an empty div tag
	newdiv.classList.add("letter"); // add the class "letter" to it

	var image = document.createElement("img"); // make an empty img tag
	image.src = "images/asl_" + element + ".gif"; // set the source dynamically

	newdiv.id = element; // set the id of this div to match the letter

	newdiv.appendChild(image); // stick the image in the div
	document.querySelector(".saranwrap").appendChild(newdiv); // add the div to the wrapper on the page
}



// ok, now we need some interaction...
// this is the event listener from last class:
var textfield = document.querySelector("#enteredText");
var submitbutton = document.querySelector("#textSubmit");
submitbutton.addEventListener("click", do_stuff);

// how would you add a listener to each of the "letter" divs?




function do_stuff() {
	var input_string = textfield.value;
	console.log("text field: " + input_string);

	// just so you remember how to get text from a form input
}