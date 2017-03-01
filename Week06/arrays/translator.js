var textfield = document.querySelector("#enteredText");
var submitbutton = document.querySelector("#textSubmit");

submitbutton.addEventListener("click", do_stuff);


function do_stuff() {
	var input_string = textfield.value;

	var the_four_letters = [];

	for (var counter = 0; counter < 4; counter++) {
		console.log("this is loop #" + counter);
		the_four_letters.push(input_string.charAt(counter));
		console.log(the_four_letters);
		console.log("--- loop over! ---");
	}

	for (var i = 0; i < 4; i++) {
		var the_file_i_want = "asl_" + the_four_letters[i] + ".gif";

		console.log(the_file_i_want);
	}

	// the_four_letters.push(input_string.charAt(0));
	// the_four_letters.push(input_string.charAt(1));
	// the_four_letters.push(input_string.charAt(2));
	// the_four_letters.push(input_string.charAt(3));

	// console.log(the_four_letters);
	console.log("-----------------");
	console.log(input_string);	
	console.log(input_string.charAt(0));

	
}





// function report(e) {
//     e.preventDefault();
//     var word = String(textfield.value);
//     console.log(word);

//     var filename = "asl_" + letters[i] + ".gif";
// }