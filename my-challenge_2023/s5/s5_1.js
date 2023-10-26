/*
la función intecambio recibe un objeto y retorna todas 
las propiedades invertidas(key-value value-key)
*/

function intercambio (obj) {

	var objResp = {};

	for (var key in obj) {
		// lo primero que hay que descartar son las propiedades heredadas
		// para esto hay que ocupar ub if (obj.hasOwnProperty(key)) {}

		objResp[obj[key]] = key;
	}
	return objResp;
}