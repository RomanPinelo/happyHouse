// Variables de botones y formulario
var buttonForm = document.getElementById("buttonAppearForm");
var buttonFormPrev = document.getElementById("prevButton");
var buttonFormNext = document.getElementById("nextButton");
var formularioDatos = document.getElementById("dataForm");
var formulario = document.getElementById("directionForm__Form");
var botonesAntSig = document.getElementById("buttonsNextPrevDiv");
var margin_Left = 0;

// Variables de sección dos del formulario en venta
var checkBalconTerraza = document.getElementById("balconTerraza");
var superficieBalconTerraza = document.getElementById("pSuperBalconTerraza");

var checkPatioJardin = document.getElementById("patioJardin");
var superficiePatioJardin = document.getElementById("pSuperPatioJardin");

var checkBodega = document.getElementById("bodega");
var superficieBodega = document.getElementById("pSuperBodega");

var checkCuartoServicio = document.getElementById("cuartoServicio");
var superficieCuartoServicio = document.getElementById("pSuperCuartoServicio");

var checkJaulaTendido = document.getElementById("jaulaTendido");
var superficieJaulaTendido = document.getElementById("pSuperJaulaTendido");

// Variables de sección cinco del formulario en venta
var checkOtro = document.getElementById("otros");
var especificaOtro = document.getElementById("otrosEspecifica");


// Botones para aparecer el formulario y recorrer el formulario
buttonForm.addEventListener('click', () => {
  formulario.classList.toggle("active5");
  botonesAntSig.classList.toggle("active6");
  if (margin_Left == 0) {
    buttonFormPrev.style.display = "none";
  }
});

buttonFormNext.addEventListener('click', () => {
  margin_Left -= 100;
  formularioDatos.style.marginLeft = `${margin_Left}%`;
  if (margin_Left <= 0) {
    buttonFormPrev.style.display = "block";
  }
  if (margin_Left <= -500) {
    buttonFormNext.style.display = "none";
  }
});

buttonFormPrev.addEventListener('click', () => {
  margin_Left += 100;
  formularioDatos.style.marginLeft = `${margin_Left}%`;
  if (margin_Left >= -500) {
    buttonFormNext.style.display = "block";
  }
  if (margin_Left == 0) {
    buttonFormPrev.style.display = "none";
  }
});


// Función para aparecer y desaparecer los input númericos en caso de checkear un input anterior
// en la sección dos del formulario de venta
function checkInputs() {
  setInterval(() => {
    superficieBalconTerraza.style.display = "none";
    superficiePatioJardin.style.display = "none";
    superficieBodega.style.display = "none";
    superficieCuartoServicio.style.display = "none";
    superficieJaulaTendido.style.display = "none";
    especificaOtro.style.display = "none";
    
    if (checkBalconTerraza.checked) {
      superficieBalconTerraza.style.display = "block";
    }

    if (checkPatioJardin.checked) {
      superficiePatioJardin.style.display = "block";
    }

    if (checkBodega.checked) {
      superficieBodega.style.display = "block";
    }

    if (checkCuartoServicio.checked) {
      superficieCuartoServicio.style.display = "block";
    }

    if (checkJaulaTendido.checked) {
      superficieJaulaTendido.style.display = "block";
    }

    if (checkOtro.checked) {
      especificaOtro.style.display = "block";
    }
  }, 250);
}

checkInputs();

//variables globales para definir el separador de millares y decimales
//Para coma millares y punto en decimales (USA)
const MILLARES=",";
const DECIMALES=".";
const DTFLOCAL = new Intl.NumberFormat('en-US');

// Formatear numeros decimales indistintamente tanto positivos como negativos
function numberFormatIndistinto(e) {
    if (this.value === "") {
        return;
    }
    // Obtenemos un array con el numero y los decimales si hay
    let caracterInicial = this.value.substring(0, 1);
    let contenido="";
    if (MILLARES===","){
        contenido = (caracterInicial === "-") ? this.value.substring(1, this.value.length).replace(/[^0-9\.]/g, "").split(".") : this.value.replace(/[^0-9\.]/g, "").split(".");
    }else{
        contenido = (caracterInicial === "-") ? this.value.substring(1, this.value.length).replace(/[^0-9\,]/g, "").split(",") : this.value.replace(/[^0-9\,]/g, "").split(",");
    }
    // añadimos los separadores de miles al primer numero del array
    contenido[0] = contenido[0].length ? DTFLOCAL.format(parseInt(contenido[0])) : "0";
    // Juntamos el numero con los decimales si hay decimales
    this.value = contenido.length > 1 ? contenido.slice(0, 2).join(".") : contenido[0];
    if (caracterInicial === "-") {
        this.value = caracterInicial + this.value;
    }
    //damos color rojo si numero negativo
    this.className = (this.value.substring(0, 1) !== "-") ? "numberIndistinto positivos" : "numberIndistinto negativos";
}


window.onload = function() {
    document.querySelectorAll(".numberIndistinto").forEach(el => el.addEventListener("keyup", numberFormatIndistinto));
    
};



// Manejo del mapa de google maps
// function iniciarMap() {
//   var coord = {lat: -34.5956145, lng: -58.4431949};
//   var map = new google.maps.Map(document.getElementById('map'), {
//     zoom: 10,
//     center:coord
//   });
//   var marker = new google.maps.Marker({
//     position: coord,
//     map: map
//   });
// }


// function iniciarMap() {
//   const center = { lat: 50.064192, lng: -130.605469 };
//   // Create a bounding box with sides ~10km away from the center point
//   const defaultBounds = {
//     north: center.lat + 0.1,
//     south: center.lat - 0.1,
//     east: center.lng + 0.1,
//     west: center.lng - 0.1,
//   };
//   const input = document.getElementById("pac-input");
//   const options = {
//     bounds: defaultBounds,
//     componentRestrictions: { country: "us" },
//     fields: ["address_components", "geometry", "icon", "name"],
//     strictBounds: false,
//     types: ["establishment"],
//   };
//   const autocomplete = new google.maps.places.Autocomplete(input, options);
// }