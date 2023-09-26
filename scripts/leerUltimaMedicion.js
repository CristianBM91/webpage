// ---------------------------------------------------
// fake
// ---------------------------------------------------
const llamar = require('./llamar');

const IP_PUERTO="http://localhost:1234";

function leerUltimaMedicion( datos, cb ) {

	llamar( IP_PUERTO + "/medicion", datos, cb )

} // ()

leerUltimaMedicion();
