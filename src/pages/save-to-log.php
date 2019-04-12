<?php
  $to_email = 'mohamed.adel.zidane@gmail.com';
  $subject = 'User feedback from site';
  $message = $_POST['email'];

  // this may need configuring depending on your host. If you find the email isn't
  // being sent, look up the error you're receiving or post another question here on
  // SO.
  mail($to_email, $subject, $message);

  header('Location: /');