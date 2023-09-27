/**
 * Función que realiza una petición GET a la ruta /medicion
 * 
 * url: String ->
 *                   leerUltimaMedicion()
 * datos: Object ->
 * 
 * 
 *  La función recibe como parámetros la ruta a la que se realizará la petición,
 * los datos que se enviarán en la petición y la función que se ejecutará cuando
 * se reciba la respuesta.
 * 
 * La función realiza una petición GET a la ruta /medicion, enviando los
 * datos recibidos como parámetro. Cuando se reciba la respuesta, se debe ejecutar
 * la función recibida como parámetro, enviando como parámetros el estado de la
 * petición y el resultado de la misma.
 * 
 * El estado de la petición puede ser:
 * - 200: La petición se realizó correctamente
 * - 404: La ruta no existe
 * - 500: Error interno del servidor
 * 
 * El resultado de la petición es un objeto JSON con la siguiente estructura:
 * {
 *  "valorOzono": 0.0,
 * "fecha": "2020-11-03T17:00:00.000Z",
 * "localiz": "27.5, -109.9"
 * }
 * 
 * @param {string} url - La ruta a la que se realizará la petición
 * @param {object} datos - Los datos que se enviarán en la petición
 * @param {function} cb - La función que se ejecutará cuando se reciba la respuesta
 * @returns {void}
 * 
 * @example
 * llamar( "http://localhost:1234/medicion", {}, function cb(estado, resultado){
 *    console.log(estado);
 *   console.log(resultado);
 * }
 * );
 */
const IP_PUERTO="http://localhost:1234";


document.addEventListener('DOMContentLoaded', function () {
    var boton = document.getElementById('miBoton');
    boton.addEventListener('click', function () {
		leerUltimaMedicion() 
    });
    function leerUltimaMedicion( datos, cb ) {

        llamar( IP_PUERTO + "/medicion", datos, function cb(estado, resultado){
            var pResultado = document.getElementById('resultadoOzono');
            var pResultadoFecha = document.getElementById('resultadoFecha');
            var pResultadoLocalizacion = document.getElementById('resultadoLocaliz');

        if (pResultado) {
            objetoJson = resultado.slice(1, -1);
            objetoJson = JSON.parse(objetoJson);
            pResultado.textContent = objetoJson.valorOzono + " ppm";
            var fechaLegible = convertirFechaLegible(objetoJson.fecha);
            pResultadoFecha.textContent = fechaLegible;
            pResultadoLocalizacion.textContent = objetoJson.localiz;
           
           
        var miParrafo = document.getElementById('resultadoOzono');
        var miFondo = document.getElementById('textoOzono');
        var valor = parseInt(miParrafo.textContent);
        console.log(valor);
       
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
        
    } // leerUltimaMedicion()


    function convertirFechaLegible(cadenaFecha) {
        var fecha = new Date(cadenaFecha);
      
        var año = fecha.getFullYear();
        var mes = ("0" + (fecha.getMonth() + 1)).slice(-2);
        var dia = ("0" + fecha.getDate()).slice(-2);
        var horas = ("0" + fecha.getHours()).slice(-2);
        var minutos = ("0" + fecha.getMinutes()).slice(-2);
        var segundos = ("0" + fecha.getSeconds()).slice(-2);
      
        var fechaLegible = año + "-" + mes + "-" + dia + " " + horas + ":" + minutos + ":" + segundos;
      
        return fechaLegible;
      }
});



