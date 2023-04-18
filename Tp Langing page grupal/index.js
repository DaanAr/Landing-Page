//Jquery

$(document).ready(function() {
    $('.galeria--presentacion--tarjetas').hover(function(){
        $(this).find('.oculto').fadeIn();
    }, function(){
        $('.oculto').fadeOut();


    })


})


//Galeria funciones. Hacer buscador de galeria con js

// Obtener una referencia a los botones de filtro
var btns = document.getElementsByClassName("btn");

// Obtener una referencia a la galería de imágenes
var galeria = document.getElementsByClassName("galeria")[0];

// Agregar un controlador de eventos a cada botón de filtro
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    // Obtener la categoría que se ha seleccionado
    var filtro = this.innerHTML.toLowerCase();

    // Mostrar solo las imágenes que corresponden a la categoría seleccionada
    for (var j = 0; j < galeria.children.length; j++) {
      var objeto = galeria.children[j];
      var categorias = objeto.getAttribute("data-filter").split(" ");
      if (categorias.indexOf(filtro) >= 0 || filtro === "todo") {
        objeto.style.display = "";
      } else {
        objeto.style.display = "none";
      }
    }
  });
}

//para que quede activo el boton seleccionado ---> revisar
  btns.forEach(btn => {
    btn.onclick = function(){ 
     btns.forEach(btn=>{
      btn.className = "";
    })
    btn.className ="active";
  }
})


//Validación de datos con Validate.js

window.addEventListener('load', () => {
    let validadorFormulario = new FormValidator('registrarDatos', [{
      name: 'nombre',
      display: 'Nombre',
      rules: 'required|min_length[10]'
    },
    {
      name: 'correo',
      display: 'Email',
      rules: 'required|valid_email'
    },
    {
      name: 'tel',
      display: 'Número de telefono',
      rules: 'required|'
    },
    {
      name: 'marca',
      display: 'Marca',
      rules: 'required|min_length[4]'
    },
    {
      name: 'modelo',
      display: 'Modelo',
      rules: 'required|min_length[5]'
    },
    {
      name: 'estado',
      display: 'Estado del vehículo',
      rules: 'required|min_length[10]'
    },
    {
      name: 'precio',
      display: 'Precio',
      rules: 'required|min_length[4]'
    },
    {
      name: 'kilometraje',
      display: 'Kilometraje',
      rules: 'required|min_length[5]'
    }], function(errores, evento) {
        if (errores.length){
          let mensaje = '';

          errores.forEach(function(campo, indice, arreglo) {
            mensaje += `${campo.message} <br/>`;
          } );
          document.querySelector('#resultadoValidacion').innerHTML = mensaje;
        }
    }   )
} );

//Vista previa
function mostrarVistaPrevia() {
  // Obtener los valores de los campos de entrada de datos
  var nombre = document.getElementById("nombre").value;
  var correo = document.getElementById("correo").value;
  var telefono = document.getElementById("telefono").value;
  var marca = document.getElementById("marca").value;
  var modelo = document.getElementById("modelo").value;
  var estado = document.getElementById("estado").value;
  var precio = document.getElementById("precio").value;
  var kilometraje = document.getElementById("kilometraje").value;
  var comentarios = document.getElementById("comentarios").value;

  // Mostrar los valores en la sección de vista previa
  document.getElementById("vistaPrevia").innerHTML = "<h2>Vista previa de los datos:</h2>" +
    "<p><strong>Nombre:</strong> " + nombre + "</p>" +
    "<p><strong>Correo electrónico:</strong> " + correo + "</p>" +
    "<p><strong>Teléfono:</strong> " + telefono + "</p>" +
    "<p><strong>Marca:</strong> " + marca + "</p>" +
    "<p><strong>Modelo:</strong> " + modelo + "</p>" +
    "<p><strong>Estado del vehículo:</strong> " + estado + "</p>" +
    "<p><strong>Precio de venta:</strong> " + precio + "</p>" +
    "<p><strong>Kilometraje:</strong> " + kilometraje + "</p>" +
    "<p><strong>Comentarios:</strong> " + comentarios + "</p>";
}

//Codigo para generar PDF:

// Obtenemos el botón de "Generar PDF"
const generarPDFBoton = document.getElementById('generarPDF');

// Agregamos un evento al botón para que al hacer clic se genere el PDF
generarPDFBoton.addEventListener('click', () => {
  // Creamos un objeto jsPDF
  const pdf = new jsPDF();

  // Agregamos los datos del formulario al PDF
  pdf.text(`Nombre: ${document.getElementById('nombre').value}`, 10, 10);
  pdf.text(`Email: ${document.getElementById('correo').value}`, 10, 20);
  pdf.text(`Teléfono: ${document.getElementById('telefono').value}`, 10, 30);
  pdf.text(`Marca: ${document.getElementById('marca').value}`, 10, 40);
  pdf.text(`Modelo: ${document.getElementById('modelo').value}`, 10, 50);
  pdf.text(`Estado del vehículo: ${document.getElementById('estado').value}`, 10, 60);
  pdf.text(`Precio de venta: ${document.getElementById('precio').value}`, 10, 70);
  pdf.text(`Kilometraje: ${document.getElementById('kilometraje').value}`, 10, 80);
  pdf.text(`Comentarios: ${document.getElementById('comentarios').value}`, 10, 90);

//NO FUNCIONAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
  pdf.save('cotizacion.pdf');
});

//Para borrar 
const borrarBoton = document.querySelector('button[type="reset"]');
borrarBoton.addEventListener('click', limpiarFormulario);
function limpiarFormulario() {
  document.getElementById('registrarDatos').reset();
  document.getElementById('vistaPrevia').innerHTML = ''; //No me borra la vista previa y falta agregarle estilo. 
}
