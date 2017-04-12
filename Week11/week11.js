// var album_list = [ {}, {}, {} ];



var container = document.querySelector(".saranwrap");

album_list.forEach(function(the_single_album) {
	console.log(the_single_album);

	var thing_to_append = document.createElement("div");
	var heading = document.createElement("h4");
	 heading.textContent = the_single_album.title;
	 thing_to_append.appendChild(heading);

	 if (typeof the_single_album.tracks !== "undefined") {
	 	the_single_album.tracks.forEach(function(tr_name) {
	 		var tr = document.createElement("p");
	 		tr.textContent = tr_name;
	 		thing_to_append.appendChild(tr);
	 	});
	 }
	


	container.appendChild(thing_to_append);
});


// var album = {
// 	"title" : "ii",
// 	"artistname": "led zeppelin"
// };

// var album2 = {
// 	"artistname": "fleetwood mac",
// 	"title" : "rumours"
// }

// var album3 = {
// 	"artistname": "beatles",
// 	"title" : "rumours"
// }




// var albumartists = ["led zeppelin", "fleetwood mac", "beatles"];

// albumtitles.forEach(function(element) {
// 	console.log(element);
// });
// albumartists.forEach(function(element) {

// 	console.log(element);
// })