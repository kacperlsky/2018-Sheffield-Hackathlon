var rootRef = firebase.database().ref().child('posts');

rootRef.on("child_added", snap => {
	var lof = snap.child('lof').val();
	var email = snap.child('email').val();
	var description = snap.child('description').val();
	var location = snap.child('location').val();
	var date = snap.child('date').val();
	var url = snap.child('url').val() || "";
	
	// These backslashes stop the end of the line being interpreted as the end of the statement... 
	$('#posts').append("                                                                                        \
		<article>                                                                                               \
		<p class='"+ lof+ " searchable'>" + lof + "</p>                                                         \
		<p><img class='image' src='"+ url +"'></p>                                                              \
		<p><div class='name'>Description</div><div class='value searchable'>"+ description +"</div></p>         \
		<p><div class='name'>Location</div><div class='value searchable'>"+ location +"</div></p>               \
		<p><div class='name'>Date</div><div class='value searchable'>"+ date +"</div></p>                       \
		<p align='right'>                                                                                       \
		  <a href='mailto:"+ email +"'>                                                                         \
			<img src='img/send_icon_orange.svg' alt='Send your email' height='48' width='48'>                   \
		  </a>                                                                                                  \
		</p>                                                                                                    \
		</article>");
});