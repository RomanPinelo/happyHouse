var numeroPropiedades = document.getElementById("numProp");
var propiedades = document.getElementById("propiedades");
var busInput = document.getElementById("searchInput");
var busButton = document.getElementById("searchButton");
var closeButton = document.getElementById("cerrarSinResultados");
// Boton y div de filtros
var botonFiltros = document.getElementById("filtButton");
var divFiltros = document.getElementById("filtros");
var botonFiltrar = document.getElementById("filtrar");
// Elementos de filtros
var unaHabitacion = document.getElementById("unaHab");
var dosHabitacion = document.getElementById("dosHab");
var tresHabitacion = document.getElementById("tresHab");
var cuatroHabitacion = document.getElementById("cuatroHab");
var cincoHabitacion = document.getElementById("cincoHab");

var unBa = document.getElementById("unBano");
var dosBa = document.getElementById("dosBanos");
var tresBa = document.getElementById("tresBanos");
var cuatroBa = document.getElementById("cuatroBanos");
var cincoBa = document.getElementById("cincoBanos");

var unEsta = document.getElementById("unEstacionamiento");
var dosEsta = document.getElementById("dosEstacionamientos");
var tresEsta = document.getElementById("tresEstacionamientos");
var cuatroEsta = document.getElementById("cuatroEstacionamientos");
var cincoEsta = document.getElementById("cincoEstacionamientos");

var alcaldiaMunicipioBus = "";

//____________________________________________________________Funciones_____________________________________________________________

// Pintar que no se encontaron resultados
function noResultados(datos) {
  numeroPropiedades.innerHTML = datos.length;
  busInput.value = "";
  propiedades.innerHTML = "";
  propiedades.innerHTML = `
    <div class="sinResultados">
      <a href="./compra.html" class="cerrar" id="cerrarSinResultados"><span class="bar cerrarBar1"></span><span class="bar cerrarBar2"></span></a>
      <p>No se encontraron resultados</p>
    </div>
  `
}

// Función pintarDatos
function pintarDatos(datos)  {
  numeroPropiedades.innerHTML = datos.length;
  busInput.value = "";
  propiedades.innerHTML = "";
  for (let item of datos) {
    if (item.tipo != "Desarrollo") {
      propiedades.innerHTML += `
      <div class="propiedadesCard">

        <div id="carouselExampleIndicators${item.id}" class="carousel slide propiedadesCard__imagen" data-bs-ride="carousel">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators${item.id}" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators${item.id}" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators${item.id}" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators${item.id}" data-bs-slide-to="3" aria-label="Slide 4"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators${item.id}" data-bs-slide-to="4" aria-label="Slide 5"></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="${item.imagen1}" class="d-block w-100" alt="Imagen propiedad" loading="lazy">
            </div>
            <div class="carousel-item">
              <img src="${item.imagen2}" class="d-block w-100" alt="Imagen propiedad" loading="lazy">
            </div>
            <div class="carousel-item">
              <img src="${item.imagen3}" class="d-block w-100" alt="Imagen propiedad" loading="lazy">
            </div>
            <div class="carousel-item">
              <img src="${item.imagen4}" class="d-block w-100" alt="Imagen propiedad" loading="lazy">
            </div>
            <div class="carousel-item">
              <img src="${item.imagen5}" class="d-block w-100" alt="Imagen propiedad" loading="lazy">
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators${item.id}" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators${item.id}" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>

        <div class="propiedadesCard__info">

          <div class="tipoEstado">
            <p class="infoTiEs">${item.tipo}</p>
            <p class="infoTiEs">${item.estado}</p>
          </div>
          <p class="datos"><span id="delegacionMunicipio">${item.direccion.delegacionMunicipio}</span>, <span id="colonia">${item.direccion.colonia}</span></p>
          <p class="datos logos">
            <i class="fa fa-bed" aria-hidden="true"></i> <span id="habitaciones">${item.recamaras}</span>
            <i class="fa fa-bath" aria-hidden="true"></i> <span id="banos">${item.banos}</span>
            <i class="fa fa-car" aria-hidden="true"></i> <span id="estacionamiento">${item.estacionamiento}</span>
            <i class="fa fa-arrows-alt" aria-hidden="true"></i> <span id="superficie">${item.superficie}</span> m<sup>2</sup>
          </p>
          <div class="dineroPrecioAbono">
            <p class="dinero">$<span id="preMillo">${item.precio.millones}</span><span id="preMile">${item.precio.miles}</span><span id="preCen">${item.precio.centenas}</span>.00 MXN</p>
            <a href="${item.descripcion}">Más detalles</a>
          </div>
        </div>

      </div> <!-- propiedadesCard Div -->
      `
    } else {
      propiedades.innerHTML += `
        <div class="propiedadesCard">

          <div id="carouselExampleIndicators${item.id}" class="carousel slide propiedadesCard__imagen" data-bs-ride="carousel">
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators${item.id}" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators${item.id}" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators${item.id}" data-bs-slide-to="2" aria-label="Slide 3"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators${item.id}" data-bs-slide-to="3" aria-label="Slide 4"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators${item.id}" data-bs-slide-to="4" aria-label="Slide 5"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators${item.id}" data-bs-slide-to="5" aria-label="Slide 5"></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="${item.imagen1}" class="d-block w-100" alt="Imagen propiedad" loading="lazy">
              </div>
              <div class="carousel-item">
                <img src="${item.imagen2}" class="d-block w-100" alt="Imagen propiedad" loading="lazy">
              </div>
              <div class="carousel-item">
                <img src="${item.imagen3}" class="d-block w-100" alt="Imagen propiedad" loading="lazy">
              </div>
              <div class="carousel-item">
                <img src="${item.imagen4}" class="d-block w-100" alt="Imagen propiedad" loading="lazy">
              </div>
              <div class="carousel-item">
                <img src="${item.imagen5}" class="d-block w-100" alt="Imagen propiedad" loading="lazy">
              </div>
              <div class="carousel-item">
                <img src="${item.imagen6}" class="d-block w-100" alt="Imagen propiedad" loading="lazy">
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators${item.id}" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators${item.id}" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>

          <div class="propiedadesCard__info">
            <div class="tipoEstado tipoEstadoDesarrollo">
              <p class="infoTiEs">${item.tipo}<span>${item.nombre}</span></p>
              <p class="infoTiEs">${item.estado}</p>
            </div>
            <p class="datos"><span id="delegacionMunicipio">${item.direccion.delegacionMunicipio}</span>, <span id="colonia">${item.direccion.colonia}</span></p>
            <p class="dineroDesarrollo">Precio: $<span id="preMilloMin">${item.precioMinimo.millones}</span><span id="preMileMin">${item.precioMinimo.miles}</span><span id="preCenMin">${item.precioMinimo.centenas}</span>.00 MXN - $<span id="preMilloMax">${item.precioMaximo.millones}</span><span id="preMileMax">${item.precioMaximo.miles}</span><span id="preCenMax">${item.precioMaximo.centenas}</span>.00 MXN</p>
            <p class="datos logosDesarrollo">
              <i class="fa fa-bed" aria-hidden="true"></i> <span id="habitaciones">${item.recamaras}</span>
              <i class="fa fa-bath" aria-hidden="true"></i> <span id="banos">${item.banos}</span>
              <i class="fa fa-car" aria-hidden="true"></i> <span id="estacionamiento">${item.estacionamiento}</span>
              <i class="fa fa-arrows-alt" aria-hidden="true"></i> <span id="superficie">${item.superficie}</span> m<sup>2</sup>
              <a href="${item.descripcion}">Más detalles</a>
            </p>
          </div>

        </div> <!-- propiedadesCard Div -->
      `
    }
  }
}

// Función pintarDatosBusqueda
function pintarDatosBusqueda(datos) {
  var filtroBusqueda = [];
  var infoBusqueda = busInput.value; // Guarda el texto introducido por el usuario
  infoBusqueda = infoBusqueda.normalize("NFD").replace(/[\u0300-\u036f]/g, ""); // Quita los acentos
  infoBusqueda = infoBusqueda.replace(/[@.,\/#!$%\^&\*;:{}[\]=\-_`~()]/g,""); // Quita los signos de puntuación
  //infoBusqueda = infoBusqueda.replace(/[,\.]/g, ""); // Quita los puntos y comas
  infoBusqueda = infoBusqueda.toLowerCase(); // Convierte todo a minúscula
  infoBusqueda = infoBusqueda.replace(/\s+/g, '');  // Quita espacios en blanco

  for (const item of datos) {
    alcaldiaMunicipioBus = item.direccion.delegacionMunicipio;
    alcaldiaMunicipioBus = alcaldiaMunicipioBus.normalize("NFD").replace(/[\u0300-\u036f]/g, ""); // Quita los acentos
    alcaldiaMunicipioBus = alcaldiaMunicipioBus.replace(/[@.,\/#!$%\^&\*;:{}[\]=\-_`~()]/g,""); // Quita los signos de puntuación
    // alcaldiaMunicipioBus = alcaldiaMunicipioBus.replace(/[,\.]/g, ""); // Quita los puntos y comas
    alcaldiaMunicipioBus = alcaldiaMunicipioBus.toLowerCase(); // Convierte todo a minúsculas
    alcaldiaMunicipioBus = alcaldiaMunicipioBus.replace(/\s+/g, '');  // Quita espacios en blanco

    if (infoBusqueda == alcaldiaMunicipioBus) {
      filtroBusqueda.push(item);
    }
  }

  if (filtroBusqueda.length != 0) {
    pintarDatos(filtroBusqueda);
  } else {
    noResultados(filtroBusqueda);
  }
}

// Funcion pintarDatosFiltros
function pintarDatosFiltros(datos) {
  var filtroResultado = [];
  var filtroHabitaciones = [];
  var filtroBanos = [];
  var filtroEstacionamiento = [];

  // Primero verifico si solo se seleccionó solo un filtro de Habitaciones
  if (!(unBa.checked && dosBa.checked && tresBa.checked && cuatroBa.checked && cincoBa.checked
      && unEsta.checked && dosEsta.checked && tresEsta.checked && cuatroEsta.checked && cincoEsta.checked)) {
    // Inputs de habitaciones
    if (unaHabitacion.checked) {
      for (let item of datos) {
        if (item.recamaras == 1) {
          filtroHabitaciones.push(item);
        }
      }
      filtroResultado = filtroHabitaciones;
      unaHabitacion.checked = false;
    }
    if (dosHabitacion.checked) {
      for (let item of datos) {
        if (item.recamaras == 2) {
          filtroHabitaciones.push(item);
        }
      }
      filtroResultado = filtroHabitaciones;
      dosHabitacion.checked = false;
    }
    if (tresHabitacion.checked) {
      for (let item of datos) {
        if (item.recamaras == 3) {
          filtroHabitaciones.push(item);
        }
      }
      filtroResultado = filtroHabitaciones;
      tresHabitacion.checked = false;
    }
    if (cuatroHabitacion.checked) {
      for (let item of datos) {
        if (item.recamaras == 4) {
          filtroHabitaciones.push(item);
        }
      }
      filtroResultado = filtroHabitaciones;
      cuatroHabitacion.checked = false;
    }
    if (cincoHabitacion.checked) {
      for (let item of datos) {
        if (item.recamaras == 5) {
          filtroHabitaciones.push(item);
        }
      }
      filtroResultado = filtroHabitaciones;
      cincoHabitacion.checked = false;
    }
  }

  // Si no verifico si solo se seleccionó solo un filtro de Baños
  if (!(unaHabitacion.checked) && !(dosHabitacion.checked) && !(tresHabitacion.checked) && !(cuatroHabitacion.checked) && !(cincoHabitacion.checked)
      && !(unEsta.checked) && !(dosEsta.checked) && !(tresEsta.checked) && !(cuatroEsta.checked) && !(cincoEsta.checked)) {
    // Inputs de Baños
    if (unBa.checked) {
      for (let item of datos) {
        if (item.banos == 1) {
          filtroBanos.push(item);
        }
      }
      filtroResultado = filtroBanos;
      unBa.checked = false;
    }
    if (dosBa.checked) {
      for (let item of datos) {
        if (item.banos == 2) {
          filtroBanos.push(item);
        }
      }
      filtroResultado = filtroBanos;
      dosBa.checked = false;
    }
    if (tresBa.checked) {
      for (let item of datos) {
        if (item.banos == 3) {
          filtroBanos.push(item);
        }
      }
      filtroResultado = filtroBanos;
      tresBa.checked = false;
    }
    if (cuatroBa.checked) {
      for (let item of datos) {
        if (item.banos == 4) {
          filtroBanos.push(item);
        }
      }
      filtroResultado = filtroBanos;
      cuatroBa.checked = false;
    }
    if (cincoBa.checked) {
      for (let item of datos) {
        if (item.banos == 5) {
          filtroBanos.push(item);
        }
      }
      filtroResultado = filtroBanos;
      cincoBa.checked = false;
    }
  }

  // Si no verifico si solo se seleccionó solo un filtro de Estacionamiento
  if (!(unaHabitacion.checked) && !(dosHabitacion.checked) && !(tresHabitacion.checked) && !(cuatroHabitacion.checked) && !(cincoHabitacion.checked)
      && !(unBa.checked) && !(dosBa.checked) && !(tresBa.checked) && !(cuatroBa.checked) && !(cincoBa.checked)) {
    // Inputs de Estacionamientos
    if (unEsta.checked) {
      for (let item of datos) {
        if (item.estacionamiento == 1) {
          filtroEstacionamiento.push(item);
        }
      }
      filtroResultado = filtroEstacionamiento;
      unEsta.checked = false;
    }
    if (dosEsta.checked) {
      for (let item of datos) {
        if (item.estacionamiento == 2) {
          filtroEstacionamiento.push(item);
        }
      }
      filtroResultado = filtroEstacionamiento;
      dosEsta.checked = false;
    }
    if (tresEsta.checked) {
      for (let item of datos) {
        if (item.estacionamiento == 3) {
          filtroEstacionamiento.push(item);
        }
      }
      filtroResultado = filtroEstacionamiento;
      tresEsta.checked = false;
    }
    if (cuatroEsta.checked) {
      for (let item of datos) {
        if (item.estacionamiento == 4) {
          filtroEstacionamiento.push(item);
        }
      }
      filtroResultado = filtroEstacionamiento;
      cuatroEsta.checked = false;
    }
    if (cincoEsta.checked) {
      for (let item of datos) {
        if (item.estacionamiento == 5) {
          filtroEstacionamiento.push(item);
        }
      }
      filtroResultado = filtroEstacionamiento;
      cincoEsta.checked = false;
    }
  }

  // Inputs de habitaciones
  // Inicio con el arreglo original del archivo propiedades.json
  if (unaHabitacion.checked) {
    for (let item of datos) {
      if (item.recamaras == 1) {
        filtroHabitaciones.push(item);
      }
    }
    unaHabitacion.checked = false;
  }
  if (dosHabitacion.checked) {
    for (let item of datos) {
      if (item.recamaras == 2) {
        filtroHabitaciones.push(item);
      }
    }
    dosHabitacion.checked = false;
  }
  if (tresHabitacion.checked) {
    for (let item of datos) {
      if (item.recamaras == 3) {
        filtroHabitaciones.push(item);
      }
    }
    tresHabitacion.checked = false;
  }
  if (cuatroHabitacion.checked) {
    for (let item of datos) {
      if (item.recamaras == 4) {
        filtroHabitaciones.push(item);
      }
    }
    cuatroHabitacion.checked = false;
  }
  if (cincoHabitacion.checked) {
    for (let item of datos) {
      if (item.recamaras == 5) {
        filtroHabitaciones.push(item);
      }
    }
    cincoHabitacion.checked = false;
  }

  // Inputs de baños
  // Tomo el arreglo de los primeros datos filtrados (Habitaciones)
  if (unBa.checked) {
    for (let item of filtroHabitaciones) {
      if (item.banos == 1) {
        filtroBanos.push(item);
      }
    }
    unBa.checked = false;
  }
  if (dosBa.checked) {
    for (let item of filtroHabitaciones) {
      if (item.banos == 2) {
        filtroBanos.push(item);
      }
    }
    dosBa.checked = false;
  }
  if (tresBa.checked) {
    for (let item of filtroHabitaciones) {
      if (item.banos == 3) {
        filtroBanos.push(item);
      }
    }
    tresBa.checked = false;
  }
  if (cuatroBa.checked) {
    for (let item of filtroHabitaciones) {
      if (item.banos == 4) {
        filtroBanos.push(item);
      }
    }
    cuatroBa.checked = false;
  }
  if (cincoBa.checked) {
    for (let item of filtroHabitaciones) {
      if (item.banos == 5) {
        filtroBanos.push(item);
      }
    }
    cincoBa.checked = false;
  }

  // Inputs de estacionamientos
  // Tomo el arreglo con los datos filtrados de habitaciones y baños
  // Como es el ultimo filtro, los guardo en un arreglo de resultados
  if (unEsta.checked) {
    for (let item of filtroBanos) {
      if (item.estacionamiento == 1) {
        filtroEstacionamiento.push(item);
      }
    }
    filtroResultado = filtroEstacionamiento;
    unEsta.checked = false;
  }
  if (dosEsta.checked) {
    for (let item of filtroBanos) {
      if (item.estacionamiento == 2) {
        filtroEstacionamiento.push(item);
      }
    }
    filtroResultado = filtroEstacionamiento;
    dosEsta.checked = false;
  }
  if (tresEsta.checked) {
    for (let item of filtroBanos) {
      if (item.estacionamiento == 3) {
        filtroEstacionamiento.push(item);
      }
    }
    filtroResultado = filtroEstacionamiento;
    tresEsta.checked = false;
  }
  if (cuatroEsta.checked) {
    for (let item of filtroBanos) {
      if (item.estacionamiento == 4) {
        filtroEstacionamiento.push(item);
      }
    }
    filtroResultado = filtroEstacionamiento;
    cuatroEsta.checked = false;
  }
  if (cincoEsta.checked) {
    for (let item of filtroBanos) {
      if (item.estacionamiento == 5) {
        filtroEstacionamiento.push(item);
      }
    }
    filtroResultado = filtroEstacionamiento;
    cincoEsta.checked = false;
  }

  // Pinta los resultados
  if (filtroResultado.length != 0) {
    pintarDatos(filtroResultado);
  } else {
    noResultados(filtroResultado);
  }
}

//______________________________________________________________Eventos______________________________________________________________
//Termina de cargar el contenido y pinta todas las propiedades
document.addEventListener("DOMContentLoaded", () => {
  //Manejo del archivo json
  fetch('../propiedades.json')
    .then(res => res.json())
      .then(datos => {
        numeroPropiedades.innerHTML = datos.length;
        pintarDatos(datos); //Función para tratar los datos
    })
});

// Cuando presiono el botón de búsqueda
busButton.addEventListener('click', () => {
  //Manejo del archivo json
  fetch('../propiedades.json')
    .then(res => res.json())
      .then(datos => {
        pintarDatosBusqueda(datos); //Función para tratar los datos
      })
});

//Controla el input de búsqueda al presionar enter
busInput.addEventListener('keydown', (event) => {
  var keyValue = event.key;
  
  if (keyValue == "Enter") {
    //Manejo del archivo json
    fetch('../propiedades.json')
      .then(res => res.json())
        .then(datos => {
          pintarDatosBusqueda(datos); //Función para tratar los datos
        })
  }
});

// Cuando presiono el botón de filtros
botonFiltros.addEventListener('click', () => {
  divFiltros.classList.toggle('active5');
});

// Cuando presiono el botón de filtrar
botonFiltrar.addEventListener('click', () => {
  //Manejo del archivo json
  fetch('../propiedades.json')
  .then(res => res.json())
    .then(datos => {
      pintarDatosFiltros(datos); //Función para tratar los datos
    })
  divFiltros.classList.toggle('active5');
});