<?php 
  // Se establece la dirección de a quien va dirigido el mensaje y asunto del correo.
  $destinatario = "contacto@happyhousemx.com";

  // Variables del formulario
  $compraNombre = $_POST['nombre'];
  $compraEmail = $_POST['correo'];
  $compraTelefono = $_POST['telefono'];
  $compraHora = $_POST['hora'];
  $compraFecha = $_POST['fecha'];
  $compraPolPrivacidad = $_POST['politicaPrivacidad'];
  $idPropiedad = $_POST['numIdPropiedad'];

  // Asunto
  $asunto = "Cita para visita de propiedad con ID: " . $idPropiedad . " (Compra)";

  // Header
  $header = 'From: ' . $compraEmail . "\r\n";
  $header .= "X-Mailer: PHP/" . phpversion() . "\r\n";
  $header .= "Mime-Version: 1.0 \r\n";
  $header .= "Content-Type: text/plain";

  // Se construye el mensaje con los datos enviados
  $mensaje = "Este mensaje fue enviado por: " . $compraNombre . "\r\n";
  $mensaje .= "Sus datos son:" . "\r\n";
  $mensaje .= "Correo: " .  $compraEmail . "\r\n";
  $mensaje .= "Teléfono: " . $compraTelefono . "\r\n";
  $mensaje .= "Agendo una cita para visitar la propiedad con ID: " . $idPropiedad . "\r\n";
  $mensaje .= "En la fecha: " . $compraFecha . "\r\n";
  $mensaje .= "A las: " . $compraHora . "\r\n";
  $mensaje .= "Aceptó la política de privacidad, términos y condiciones: ";

  if (!empty($compraPolPrivacidad)) {
    $mensaje .= "Si" . "\r\n";
  } else {
    $mensaje .= "No" . "\r\n";
  }
  
  $mensaje .= "\r\n";
  $mensaje .= "\r\n";
  $mensaje .= "¡Ponerse en contacto inmediatamente!";

  if (mail($destinatario, $asunto, utf8_decode($mensaje), $header)) {
    echo "<script>setTimeout(\"location.href='../html/correoExito.html'\", 50)</script>";
  } else {
    echo "<script>setTimeout(\"location.href='../html/correoFracaso.html'\", 500)</script>";
  }

?>