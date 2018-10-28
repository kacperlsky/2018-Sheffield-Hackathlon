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

     
    
      var rootRef1 = firebase.database().ref().child('posts');
      $('#submit_createnewpost').click(function(){
          rootRef1.push({
                lof:$('input[name=lof_post]:checked').val(),
                email:$('#email_post').val(),
                description:$('#description_post').val(),
                location:$('#location_post').val(),
                date:$('#date_post').val()
                
          });
      })