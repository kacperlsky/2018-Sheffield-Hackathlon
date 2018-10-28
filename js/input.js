
     var uploader = document.getElementById('uploader');
     var fileButton = document.getElementById('fileButton');

     fileButton.addEventListener('change', function(e) {
            //Get file
            var file = e.target.files[0];

            //Create a storage ref
            var storageRef = firebase.storage().ref('images/' + file.name);

            //Upload file
            var task = storageRef.put(file);

            task.on('state_changed', 
            
                function progress(snapshot)  {
                    var percentage = (snapshot.bytesTransferred /
                        snapshot.totalBytes) * 100;
                        uploader.value = percentage;
                },

                function error(err){

                },
                
                function complete(){
                    var downloadURL = task.snapshot.downloadURL;
                   
                    

                });
     });
      
      
      var rootRef = firebase.database().ref().child('posts');
      $('#submit_createnewpost').click(function(){
          rootRef.push({
                lof:$('input[name=lof_post]:checked').val(),
                email:$('#email_post').val(),
                description:$('#description_post').val(),
                location:$('#location_post').val(),
                date:$('#date_post').val(),
            
          });
      })