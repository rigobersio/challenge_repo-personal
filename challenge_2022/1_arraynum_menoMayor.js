/*
la funcion mayorMenor recibe un arreglo de números y tiene que retornar un arreglo con 2 elementos
el 1° será el número mayor y el 2° el menor de la lista.
*/

function mayorMenor(arrNumero) {
    var nuevoArr = [];
    nuevoArr[0] = arrNumero[0];
    nuevoArr[1] = arrNumero[0];
    var i = 1;
    var j = 1;
    while (i < arrNumero.length) {
        if (nuevoArr[0] < arrNumero[i]) {
            nuevoArr[0] = arrNumero[i];
        }
        i++;
    }
    while (j < arrNumero.length) {
        if (nuevoArr[1] > arrNumero[j]) {
            nuevoArr[1] = arrNumero[j];
        }
        j++;
    }
    return nuevoArr;
}

var arr = [1, 2, 3, 55, 4, -60, 5,];

console.log(mayorMenor(arr));