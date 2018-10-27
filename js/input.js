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
      $('#submit').click(function(){
          rootRef.push({
                lof:$('input[name=lof]:checked').val();
                email:$('#email').val(),
                description:$('#description').val(),
                location:$('#location').val(),
                date:$('#date').val()
                
          });
      })