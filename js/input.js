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
	$('#posts2').append("<dl><dt>Email<dt><dd>" + email + "</dd><dt>Location</dt><dd>"+ location+"</dd><dt>Date</dt><dd>"+date+"</dd></dl>");
});