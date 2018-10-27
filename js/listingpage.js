// Initialize Firebase
var config = {
	apiKey: "AIzaSyC56DeZIqnGDiUpOtvL9_lcToRaItd8014",
	authDomain: "reuniteme-662eb.firebaseapp.com",
	databaseURL: "https://reuniteme-662eb.firebaseio.com",
	projectId: "reuniteme-662eb",
	storageBucket: "reuniteme-662eb.appspot.com",
	messagingSenderId: "289356166789"
};
firebase.initializeApp(config);

var rootRef = firebase.database().ref().child('posts');

rootRef.on("child_added", snap => {
	var email = snap.child('email').val();
	var location = snap.child('location').val();
	var description = snap.child('description').val();
	var date = snap.child('date').val();
	var lof = snap.child('lof').val();
	$('#posts').append("<dl><dt id='"+ lof+ "'>" + lof + "<dt><dt>Location</dt><dd>"+ location+"</dd><dt>Date</dt><dd>"+date+"</dd><div id='circle' class='button'><img src='img/send_icon.svg' alt='Sendyour email' height='24' width='24'></div></dl>");
});