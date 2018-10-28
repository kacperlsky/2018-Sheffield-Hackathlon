
     
    
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