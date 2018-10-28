

var rootRef = firebase.database().ref().child('posts');

rootRef.on("child_added", snap => {
	var email = snap.child('email').val();
	var location = snap.child('location').val();
	var description = snap.child('description').val();
	var date = snap.child('date').val();
	var lof = snap.child('lof').val();
	$('#posts').append("<table><tr><th class='"+ lof+ "'>" + lof + "</th></tr><tr><th>Description</th><td>"+ description +"</td></tr><tr><th>Location</th><td>"+ location+"</td></tr><tr><th>Date</th><td>"+date+"</td></tr><tr><td colspan='2'><img src='img/send_icon_orange.svg' alt='Send your email' height='24' width='24'></td></tr></table>");
});