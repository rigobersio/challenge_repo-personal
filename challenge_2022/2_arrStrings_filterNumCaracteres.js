function mismaCantidadCaracteres(strings, caracteres) {
    //la función llamada mismaCantidadCaracteres recibe como argumento un **arreglo** de strings llamado **strings**
    // y un **número** entero llamado **caracteres**
    // debe devolver en un array los strings que tenga el numero de **caracteres**
    function filtrarCaracteres(elemento) {
        if (elemento.length === caracteres) {
            return true;
        }
    }
    return strings.filter(filtrarCaracteres);
}