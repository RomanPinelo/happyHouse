// Botón 8 Flecha | En vista de celular
var menuButton = document.getElementById("buttonMenu");

var bar1 = document.getElementById("bar1");
var bar3 = document.getElementById("bar3");

//Menú en vista de celular
var  headerMenu = document.getElementById("headerMenu");

menuButton.addEventListener('click', () => {
  bar1.classList.toggle("active1");
  bar3.classList.toggle("active3");
  headerMenu.classList.toggle("active");
});


//Menú movil
// let ubicacionPrincipal = window.pageYOffset;

// window.onscroll = function() {
//   let Desplazamiento_Actual = window.pageYOffset;

//   if(ubicacionPrincipal >= Desplazamiento_Actual){
//     document.getElementById('navbar').style.top = '0';
//   }
//   else {
//     document.getElementById('navbar').style.top = '-100px';
//   }
  
//   ubicacionPrincipal = Desplazamiento_Actual;
// }

/* Con estas lineas obtenemos la longitud que debemos dar al 
stroke-dasharray y stroke-dashoffset de cada letra del texto svg en el CSS*/
const logo = document.querySelectorAll('#happyHouse path');

for(let i=0; i<logo.length; i++){
  console.log('Letter ' + i + ' is ' + logo[i].getTotalLength());
}

// Obtengo la fecha para ponerla en el footer
var footerYear = document.getElementById("footerYear");
var fecha = new Date();

footerYear.innerHTML = fecha.getFullYear();