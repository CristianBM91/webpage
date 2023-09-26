// ---------------------------------------------------
// fake
// ---------------------------------------------------
const IP_PUERTO="http://localhost:1234";


document.addEventListener('DOMContentLoaded', function () {
    // Agregar un evento click al botón
    var boton = document.getElementById('miBoton');
    boton.addEventListener('click', function () {
        // Coloca aquí el código que deseas ejecutar cuando se presione el botón
		leerUltimaMedicion()
        
    });
    function leerUltimaMedicion( datos, cb ) {

        llamar( IP_PUERTO + "/medicion", datos, function cb(estado, resultado){
            var pResultado = document.getElementById('resultadoOzono');
            var pResultadoFecha = document.getElementById('resultadoFecha');

        // Verifica si se encontró el elemento
        if (pResultado) {
            // Actualiza el contenido de texto del elemento h2
            objetoJson = resultado.slice(1, -1);
            objetoJson = JSON.parse(objetoJson);
            pResultado.textContent = objetoJson.valorOzono + " ppm";
            var fechaLegible = convertirFechaLegible(objetoJson.fecha);
            pResultadoFecha.textContent = fechaLegible;
           
           
        // Obtener el elemento p por su id
        var miParrafo = document.getElementById('resultadoOzono');
        var miFondo = document.getElementById('textoOzono');
       

      
        // Obtener el valor del elemento p y convertirlo a un número
        var valor = parseInt(miParrafo.textContent);
        console.log(valor);
        // Verificar si el valor es mayor que 500 y aplicar la clase CSS correspondiente
        if (valor < 200) {
            miFondo.style.backgroundColor = 'green';
            
        }
        else if (valor >200 && valor < 500) {
            miFondo.style.backgroundColor = 'orange';
        }
        else if (valor > 500) {
            miFondo.style.backgroundColor = 'red';
           
           
        }
     

        } else {
            console.error('El elemento h2 no se encontró en el HTML.');
        }
        } )
        
    } // ()


    function convertirFechaLegible(cadenaFecha) {
        // Crea un objeto Date a partir de la cadena de fecha
        var fecha = new Date(cadenaFecha);
      
        // Obtiene los componentes de la fecha
        var año = fecha.getFullYear();
        var mes = ("0" + (fecha.getMonth() + 1)).slice(-2); // Agrega 1 al mes ya que enero es 0
        var dia = ("0" + fecha.getDate()).slice(-2);
        var horas = ("0" + fecha.getHours()).slice(-2);
        var minutos = ("0" + fecha.getMinutes()).slice(-2);
        var segundos = ("0" + fecha.getSeconds()).slice(-2);
      
        // Formatea la fecha en un formato legible
        var fechaLegible = año + "-" + mes + "-" + dia + " " + horas + ":" + minutos + ":" + segundos;
      
        return fechaLegible;
      }
});



