function sumaTodosPrimos(array) {
    /*
    **sumaTodosPrimos** recibe un array de **enteros**
    retorna la suma de todos los números primos
    primo es divisible solo por 2 número naturales (por si mismo y por uno),
    además pertenece a los naturales (ni el 0 ni el 1 cumplen)
    */

    function filtroPrimo(num) {
        if (num > 1) {
            var i = 2;
            while (i < num) {
                if (num % i === 0) {
                    return false;
                } i++;
            } return true;
        } else {
            return false;
        }
    };

    function cbReduce((acumulador, elemento) => acumulador + elemento);

    return array.filter(filtroPrimo).reduce(cbReduce, 0);
}