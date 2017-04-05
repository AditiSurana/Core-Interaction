var wrapper = document.querySelector(".saranwrap");

var elements_with_timeouts = [];
var timeout_ids = [];

for (i = 0; i < 23; i++) {
	console.log(i);
	var divtoinsert = document.createElement("div");
	divtoinsert.classList.add("box", "divnumber" + i);
	

	// if (i % 2 === 0) {
	// 	divtoinsert.classList.add("hovered");
	// } 

	wrapper.appendChild(divtoinsert);
}

var allthedivs = document.querySelectorAll(".box");

allthedivs.forEach(addlisteners);

function addlisteners(thething, itsindex) {

	// console.log(thething);

	thething.addEventListener("click", toggle_state);
	thething.addEventListener("mouseenter", addhover);
	thething.addEventListener("mouseleave", removehover);

} 


function toggle_state(theevent) {

	console.log("CLICK EVENT:");

	var the_thing_you_clicked_on = this;	

	console.log(the_thing_you_clicked_on);

	if (theevent.metaKey === true) {
		console.log("meta key pressed");
		window.setTimeout(function() {
			delayer(the_thing_you_clicked_on);
		}, 2000);
	}

	if (theevent.shiftKey === true) {
		console.log("clicked with shift");
		console.log(elements_with_timeouts);
		console.log(timeout_ids);
		for (i = 0; i < elements_with_timeouts.length; i++) {

			if (elements_with_timeouts[i] == the_thing_you_clicked_on) {
				window.clearInterval(timeout_ids[i]);
			}
		}
	}	
	if (theevent.metaKey === false && theevent.shiftKey === false) {
		var the_interval = window.setInterval(function() {
   			 // console.log("inside the window.settimeout:");
   			 // console.log(the_thing_you_clicked_on);
   		 delayer(the_thing_you_clicked_on);
		}, 1000);

		elements_with_timeouts.push(the_thing_you_clicked_on);
		timeout_ids.push(the_interval);
	}
	

	// console.log(elements_with_timeouts, timeout_ids);

}

function delayer(htmlelement) {
	// console.log('hello!');
	if (htmlelement.classList.contains("active")) {
		htmlelement.classList.remove("active");
	}
	else htmlelement.classList.add("active");
}

function single_delay(htmlelement) {
	// console.log('hello!');
	if (htmlelement.classList.contains("active")) {
		htmlelement.classList.remove("active");
	}
	else htmlelement.classList.add("active");
}




function addhover(e) {
	this.classList.add("hovered");
}

function removehover(e) {
	this.classList.remove("hovered");
}
























