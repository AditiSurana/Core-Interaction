// var album_list = [ {}, {}, {} ];


var container = document.querySelector(".saranwrap");

var found = _(song_list).where({year: "1969"});

found.forEach(function(songobj) {
	console.log(songobj);

	var thing_to_append = document.createElement("div");
	var heading = document.createElement("h4");
	 heading.textContent = songobj.song.tracktitle + " // " + songobj.year;
	 thing_to_append.appendChild(heading);

	 if (typeof songobj.song.people !== "undefined") {
	 	songobj.song.people.forEach(function(tr_name) {
	 		var tr = document.createElement("p");
	 		tr.textContent = tr_name;
      console.log(tr);
	 		thing_to_append.appendChild(tr);
	 	});
	 }

	 thing_to_append.classList.add("songbox");
	container.appendChild(thing_to_append);

	thing_to_append.addEventListener("click", animator);
});

function animator(event) {
	console.log(event.srcElement.parentElement);
	var box = $(event.srcElement.parentElement);
	box.animate({
		"margin-top": "50px"
	}, 2000);
}




// var found = _.find(song_list, function(songobject) { 
// 	if (songobject.song.tracknum == 2) {
// 		return true;
// 	}
// 	else return false;
// });



// console.log(found);
















