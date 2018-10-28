<!DOCTYPE HTML>
<html>
<head>
<meta charset="UTF-8">
<title>Mail()</title>
</head>
<body>
<?php
	if (!array_key_exists('Submitted',$_POST))
	{
?>
		<form method="post" action="Mail.php">
		<input type="hidden" name="Submitted" value="true">
		Mail Server: <input type="text" name="Host" size="25"><br>
		To: <input type="text" name="To" size="25"><br>
		From: <input type="text" name="From" size="25"><br>
		Subject: <input type="text" name="Subject" size="25"><br>
		<textarea name="Message" cols="50" rows="10"></textarea><br>
		<input type="submit" value="Send Email">
		</form>
<?php
	}
	else
	{
		ini_set('SMTP',$_POST['Host']);
		$to = $_POST['To'];
		$from = 'From: ' . $_POST['From'];
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
	}
?>
</body>
</html>