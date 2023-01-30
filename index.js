// Crea un nuevo fichero JS que contenga las siguientes líneas

/*
 - Una función que admita un parámetro "num", y devuelva una lista con esa cantidad de 
números de la secuencia de Fibonacci (Por ejemplo: num = 6 => Resultado [1, 1, 2, 3, 5, 8])
*/
let num = 6;

const fibo = num =>{
    let array = [];
    array[0] = 1;
    array[1] = 1;

    for (let i = 2; i < num; i++) {
        array = [...array, array[i-2] + array[i-1]]        
    }
    return array;
}

// - Ejecuta la depuración de VSCode para visualizar la ejecución de la función

console.log(fibo(num))