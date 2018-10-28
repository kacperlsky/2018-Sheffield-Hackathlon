

var rootRef = firebase.database().ref().child('posts');

rootRef.on("child_added", snap => {
	var lof = snap.child('lof').val();
	var email = snap.child('email').val();
	var description = snap.child('description').val();
	var location = snap.child('location').val();
	var date = snap.child('date').val();
	var url = snap.child('url').val() || "";
	$('#posts').append("<article><p class='"+ lof+ "'>" + lof + "</p><p><img src='"+url+"'></p><p><div class='name'>Description</div><div class='value'>"+ description +"</div></p><p><div class='name'>Location</div><div class='value'>"+ location+"</div></p><p><div class='name'>Date</div><div class='value'>"+date+"</div></p><p align'right'><img src='img/send_icon_orange.svg' alt='Send your email' height='48' width='48'></p></article>");
});