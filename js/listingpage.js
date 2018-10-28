

var rootRef = firebase.database().ref().child('posts');

rootRef.on("child_added", snap => {
	var email = snap.child('email').val();
	var location = snap.child('location').val();
	var description = snap.child('description').val();
	var date = snap.child('date').val();
	var lof = snap.child('lof').val();
	$('#posts').append("<dl><dt id='"+ lof+ "'>" + lof + "<dt><dt>Location</dt><dd>"+ location+"</dd><dt>Date</dt><dd>"+date+"</dd><img src='img/send_icon_orange.svg' alt='Sendyour email' height='24' width='24'></div></dl>");
});