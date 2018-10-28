<?php
		ini_set('SMTP',$_POST['Host']);
		$to = $_POST['kacperlodzinski99@gmail.com'];
		$from = 'From: ' . $_POST['moreni123@gmail.com'];
		$subject = $_POST['Subject'];
		$message = $_POST['Message'];
	
		if(mail($to,$subject,$message,$from))
		{
			echo "Message Sent";
		}
		else
		{
			 echo "Message Not Sent";
		}
?>