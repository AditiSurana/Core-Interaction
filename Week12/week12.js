// var album_list = [ {}, {}, {} ];


var container = document.querySelector(".saranwrap");

album_list.forEach(function(songobj) {
	console.log(songobj);

	var thing_to_append = document.createElement("div");
	var heading = document.createElement("h4");
	 heading.textContent = songobj.song.tracktitle;
	 thing_to_append.appendChild(heading);

	 if (typeof songobj.song.people !== "undefined") {
	 	songobj.song.people.forEach(function(tr_name) {
	 		var tr = document.createElement("p");
	 		tr.textContent = tr_name;
      console.log(tr);
	 		thing_to_append.appendChild(tr);
	 	});
	 }


	container.appendChild(thing_to_append);
});
