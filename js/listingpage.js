

var rootRef = firebase.database().ref().child('posts');

rootRef.on("child_added", snap => {
	var email = snap.child('email').val();
	var location = snap.child('location').val();
	var description = snap.child('description').val();
	var date = snap.child('date').val();
	var lof = snap.child('lof').val();
	$('#posts').append("<article><p class='"+ lof+ "'>" + lof + "</p><p><div class='name'>Description</div><div class='value'>"+ description +"</div></p><p><div class='name'>Location</div><div class='value'>"+ location+"</div></p><p><div class='name'>Date</div><div class='value'>"+date+"</div></p><p><img src='img/send_icon_orange.svg' alt='Send your email' height='24' width='24'></p></article>");
});