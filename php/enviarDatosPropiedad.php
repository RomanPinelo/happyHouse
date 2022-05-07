<?php 
  // Se establece la dirección de a quien va dirigido el mensaje y asunto del correo.
  $destinatario = "contacto@happyhousemx.com";

  $asunto = "Información de propiedad para poner en venta";

  // Variables de la sección 1 del formulario
  $secUnoEstado = $_POST['estado'];
  $secUnoMuniAlca = $_POST['municipioAlcaldia'];
  $secUnoColonia = $_POST['colonia'];
  $secUnoCalle = $_POST['calle'];
  $secUnoNumInt = $_POST['numInterior'];
  $secUnoNumExt = $_POST['numExterior'];

  // Varibales de la sección 2 del formulario
  $secDosTipo = $_POST['tipoPropiedad'];
  $secDosRecamaras = $_POST['recamaras'];
  $secDosBaCompletos = $_POST['banosCompletos'];
  $secDosMediosBa = $_POST['mediosBanos'];
  $secDosEstacionamiento = $_POST['estacionamiento'];
  $secDosEstaIndependiente = $_POST['tipoEstacionamientoIndependiente'];
  $secDosEstaTandem = $_POST['tipoEstacionamientoTandem'];
  $secDosEstaEleva = $_POST['tipoEstacionamientoEleva'];

  // Varibales de la sección 3 del formulario
  $secTresSuperHabita = $_POST['superHabitable'];
  $secTresBalTerraza = $_POST['balconTerraza'];
  $secTresSuperBalTerraza = $_POST['superBalconTerraza'];
  $secTresPatJar = $_POST['patioJardin'];
  $secTresSuperPatJar = $_POST['superPatioJardin'];
  $secTresBodega = $_POST['bodega'];
  $secTresSuperBodega = $_POST['superBodega'];
  $secTresCuartoServicio = $_POST['cuartoServicio'];
  $secTresSuperCuartoServicio = $_POST['superCuartoServicio'];
  $secTresJaulaTendido = $_POST['jaulaTendido'];
  $secTresSuperJaulaTendido = $_POST['superJaulaTendido'];
  $secTresRecibirDinero = $_POST['recibirDinero'];

  // Varibales de la sección 4 del formulario
  $secCuatroPisoPropiedad = $_POST['pisoPropiedad'];
  $secCuatroPisosTot = $_POST['pisosTotalesEdificio'];
  $secCuatroAnoConstruccion = $_POST['anoConstruccion'];
  $secCuatroOrientacionExt = $_POST['orientacionExterior'];
  $secCuatroOrientacionInt = $_POST['orientacionInterior'];
  $secCuatroElevadorSi = $_POST['elevadorSi'];
  $secCuatroElevadorNo = $_POST['elevadorNo'];

  // Variables de la sección 5 del formulario
  $secCincoSeguridad = $_POST['seguridad'];
  $secCincoGimnasio = $_POST['gimnasio'];
  $secCincoAlberca = $_POST['alberca'];
  $secCincoRoofGarden = $_POST['roofGarden'];
  $secCincoOtros = $_POST['otros'];
  $secCincoOtrosEspecifica = $_POST['otrosEspecifica'];
  $secCincoCuotaMant = $_POST['cuotaMantenimiento'];
  $secCincoPropietarioRel = $_POST['propietarioRelacion'];
  $secCincoAsesorRel = $_POST['asesorRelacion'];
  $secCincoFacebookCon = $_POST['facebookConocer'];
  $secCincoTwitterCon = $_POST['twitterConocer'];
  $secCincoLinkedinCon = $_POST['linkedinConocer'];
  $secCincoInstagramCon = $_POST['instagramConocer'];
  $secCincoTiktokCon = $_POST['tiktokConocer'];
  $secCincoYoutubeCon = $_POST['youtubeConocer'];
  $secCincoOtroCon = $_POST['otroConocer'];

  // Variables de la sección 6 del formulario
  $secSeisNombre = $_POST['nombre'];
  $secSeisApellido = $_POST['apellido'];
  $secSeisEmail = $_POST['email'];
  $secSeisTelefono = $_POST['telefono'];
  $secSeisPolPrivacidad = $_POST['politicaPrivacidad'];

  // Header
  $header = 'From: ' . $secSeisEmail . "\r\n";
  $header .= "X-Mailer: PHP/" . phpversion() . "\r\n";
  $header .= "Mime-Version: 1.0 \r\n";
  $header .= "Content-Type: text/plain";

  // Se construye el mensaje con datos de la sección 6
  $mensaje = "Este mensaje fue enviado por: " . $secSeisNombre . " " . $secSeisApellido . "\r\n";
  $mensaje .= "Sus datos son:" . "\r\n";
  $mensaje .= "Correo: " .  $secSeisEmail . "\r\n";
  $mensaje .= "Teléfono: " . $secSeisTelefono . "\r\n";
  $mensaje .= "Aceptó la política de privacidad, términos y condiciones: ";

  if (!empty($secSeisPolPrivacidad)) {
    $mensaje .= "Si" . "\r\n";
  } else {
    $mensaje .= "No" . "\r\n";
  }

  $mensaje .= "\r\n";
  $mensaje .= "\r\n";

  // Se construye el mensaje con datos de la sección 1
  $mensaje .= "Los datos de la propiedad son:" . "\r\n";
  $mensaje .= "\r\n";
  
  $mensaje .= "* Dirección" . "\r\n";
  $mensaje .= "Estado: " . $secUnoEstado . "\r\n";
  $mensaje .= "Municipio o alcaldía: " . $secUnoMuniAlca . "\r\n";
  $mensaje .= "Colonia: " . $secUnoColonia . "\r\n";
  $mensaje .= "Calle: " . $secUnoCalle . "\r\n";
  $mensaje .= "Número exterior: " . $secUnoNumExt . "\r\n";
  $mensaje .= "Número interior: " . $secUnoNumInt . "\r\n";

  // Se construye el mensaje con datos de la sección 2
  $mensaje .= "\r\n";
  $mensaje .= "* Características" . "\r\n";
  $mensaje .= "Tipo de propiedad: " . $secDosTipo . "\r\n";
  $mensaje .= "Recamaras: " . $secDosRecamaras . "\r\n";
  $mensaje .= "Baños completos: " . $secDosBaCompletos . "\r\n";
  $mensaje .= "Medios baños: " . $secDosMediosBa . "\r\n";
  $mensaje .= "Estacionamiento: " . $secDosEstacionamiento . "\r\n";

  if ($secDosEstacionamiento != 0) {
    if (!empty($secDosEstaIndependiente)) {
      $mensaje .= "Tipo: Estacionamiento Independiente" . "\r\n";
    }
    if (!empty($secDosEstaTandem)) {
      $mensaje .= "Tipo: Tandem" . "\r\n";
    }
    if (!empty($secDosEstaEleva)) {
      $mensaje .= "Tipo: Eleva autos" . "\r\n";
    }
  }

  // Se construye el mensaje con datos de la sección 3
  $mensaje .= "\r\n";
  $mensaje .= "* Superficies" . "\r\n";
  $mensaje .= "Superficie habitable: " . $secTresSuperHabita . " metros cuadrados" . "\r\n";

  if (!empty($secTresBalTerraza)) {
    $mensaje .= "Cuenta con Balcón/Terraza y su superficie es: " . $secTresSuperBalTerraza . " metros cuadrados" . "\r\n";
  }
  if (!empty($secTresPatJar)) {
    $mensaje .= "Cuenta con Patio/Jardín y su superficie es: " . $secTresSuperPatJar . " metros cuadrados" . "\r\n";
  }
  if (!empty($secTresBodega)) {
    $mensaje .= "Cuenta con bodega y su superficie es: " . $secTresSuperBodega . " metros cuadrados" . "\r\n";
  }
  if (!empty($secTresCuartoServicio)) {
    $mensaje .= "Cuenta con cuarto de servicio y su superficie es: " . $secTresSuperCuartoServicio . " metros cuadrados" . "\r\n";
  }
  if (!empty($secTresJaulaTendido)) {
    $mensaje .= "Cuenta con jaula de tendido y su superficie es: " . $secTresSuperJaulaTendido . " metros cuadrados" . "\r\n";
  }

  $mensaje .= "\r\n";
  $mensaje .= "El dinero que espera recibir por su propiedad es de: $" . $secTresRecibirDinero . "\r\n";

  // Se construye el mensaje con datos de la sección 4
  $mensaje .= "\r\n";
  $mensaje .= "* En caso de ser edificio" . "\r\n";
  $mensaje .= "Piso de la propiedad: " . $secCuatroPisoPropiedad . "\r\n";
  $mensaje .= "Pisos totales del edificio: " . $secCuatroPisosTot . "\r\n";
  $mensaje .= "\r\n";
  $mensaje .= "\r\n";
  $mensaje .= "Año de construcción: " . $secCuatroAnoConstruccion . "\r\n";
  if (!empty($secCuatroOrientacionExt)) {
    $mensaje .= "Tiene orientación exterior" . "\r\n";
  }
  if (!empty($secCuatroOrientacionInt)) {
    $mensaje .= "Tiene orientación interior" . "\r\n";
  }
  if (!empty($secCuatroElevadorSi)) {
    $mensaje .= "Tiene elevador" . "\r\n";
  }
  if (!empty($secCuatroElevadorNo)) {
    $mensaje .= "No tiene elevador" . "\r\n";
  }

  // Se construye el mensaje con datos de la sección 5
  $mensaje .= "\r\n";
  $mensaje .= "* Amenidades de la propiedad" . "\r\n";
  if (!empty($secCincoSeguridad)) {
    $mensaje .= "Seguridad" . "\r\n";
  }
  if (!empty($secCincoGimnasio)) {
    $mensaje .= "Gimnasio" . "\r\n";
  }
  if (!empty($secCincoAlberca)) {
    $mensaje .= "Alberca" . "\r\n";
  }
  if (!empty($secCincoRoofGarden)) {
    $mensaje .= "Roof Garden" . "\r\n";
  }
  if (!empty($secCincoOtros)) {
    $mensaje .= "Otros: " . "\r\n";
    $mensaje .= $secCincoOtrosEspecifica . "\r\n";
  }
  
  $mensaje .= "\r\n";
  $mensaje .= "La cuota de mantenimiento es: $" . $secCincoCuotaMant . "\r\n";
  $mensaje .= "\r\n";
  if (!empty($secCincoPropietarioRel)) {
    $mensaje .= "Es propietario" . "\r\n";
    $mensaje .= "\r\n";
  }
  if (!empty($secCincoAsesorRel)) {
    $mensaje .= "Es asesor" . "\r\n";
    $mensaje .= "\r\n";
  }
  if (!empty($secCincoFacebookCon)) {
    $mensaje .= "Nos conoció en Facebook" . "\r\n";
  }
  if (!empty($secCincoTwitterCon)) {
    $mensaje .= "Nos conocio en Twitter" . "\r\n";
  }
  if (!empty($secCincoLinkedinCon)) {
    $mensaje .= "Nos conoció en LinkedIn" . "\r\n";
  }
  if (!empty($secCincoInstagramCon)) {
    $mensaje .= "Nos conoció en Instagram" . "\r\n";
  }
  if (!empty($secCincoTiktokCon)) {
    $mensaje .= "Nos conoció en TikTok" . "\r\n";
  }
  if (!empty($secCincoYoutubeCon)) {
    $mensaje .= "Nos conoció en YouTube" . "\r\n";
  }
  if (!empty($secCincoOtroCon)) {
    $mensaje .= "Nos conoció por otro medio" . "\r\n";
  }

  if (mail($destinatario, $asunto, utf8_decode($mensaje), $header)) {
    echo "<script>setTimeout(\"location.href='../html/correoExito.html'\", 50)</script>";
  } else {
    echo "<script>setTimeout(\"location.href='../html/correoFracaso.html'\", 50)</script>";
  }

?>