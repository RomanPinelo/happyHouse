<?php 
  // Se establece la dirección de a quien va dirigido el mensaje y asunto del correo.
  $destinatario = "contacto@happyhousemx.com";

  // Variables del formulario
  $contactoNombre = $_POST['nombre'];
  $contactoEmail = $_POST['email'];
  $contactoTelefono = $_POST['telefono'];
  $contactoAsunto = $_POST['asunto'];
  $contactoMensaje = $_POST['mensaje'];
  $contactoPolPrivacidad = $_POST['politicaPrivacidad'];

  // Header
  $header = 'From: ' . $contactoEmail . "\r\n";
  $header .= "X-Mailer: PHP/" . phpversion() . "\r\n";
  $header .= "Mime-Version: 1.0 \r\n";
  $header .= "Content-Type: text/plain";

  // Se construye el mensaje con los datos enviados
  $mensaje = "Este mensaje fue enviado por: " . $contactoNombre . "\r\n";
  $mensaje .= "Sus datos son:" . "\r\n";
  $mensaje .= "Correo: " .  $contactoEmail . "\r\n";
  $mensaje .= "Teléfono: " . $contactoTelefono . "\r\n";
  $mensaje .= "Su mensaje es: " . "\r\n";
  $mensaje .= "\r\n";
  $mensaje .= $contactoMensaje . "\r\n";
  $mensaje .= "\r\n";
  $mensaje .= "Aceptó la política de privacidad, términos y condiciones: ";

  if (!empty($contactoPolPrivacidad)) {
    $mensaje .= "Si" . "\r\n";
  } else {
    $mensaje .= "No" . "\r\n";
  }
  
  $mensaje .= "\r\n";
  $mensaje .= "\r\n";
  $mensaje .= "¡Ponerse en contacto inmediatamente!";

  if (mail($destinatario, $contactoAsunto, utf8_decode($mensaje), $header)) {
    echo "<script>setTimeout(\"location.href='../html/correoExito.html'\", 50)</script>";
  } else {
    echo "<script>setTimeout(\"location.href='../html/correoFracaso.html'\", 500)</script>";
  }

?>