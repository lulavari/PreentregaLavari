// ABASTECEDOR DE CARNES//
alert ("BIENVENIDO A ABASTECEDOR DE CARNES RC")

// variables globales
const mediaResVaca = 5000
const mediaResCerdo = 2000

let cantidad; 
let tipoAnimal;
let resultado;

//operacion multiplicar
function multiplicar(valor1, valor2){
    const resultado = valor1 * valor2;
    return resultado;
}

//paso 1: elegir el tipo de carne que desea comprar con V y C.
//paso 2: que nos diga por prompt la  cantidad de medias que desea comprar, teniendo en cuenta que 0. cierra el ciclo.



 tipoAnimal = prompt("Ingrese el tipo de animal que desee:\n\ -Si quiere media Res de Vaca ingrese = V \n\ -Si quiere media Res de Cerdo ingrese =C");
    
 while (cantidad != 0){
    cantidad = parseInt(prompt("Ingresar cantidad de medias que desea comprar"));
    
    
    switch (tipoAnimal){
        case "V":
           resultado = multiplicar(mediaResVaca, cantidad);
           alert("Debe abonar $ "+ resultado + " por su compra de media Res de Vaca");
           break;
        case "C":
            resultado = multiplicar(mediaResCerdo, cantidad);
            alert("Debe abonar $ "+ resultado + " por su compra de media Res de Cerdo");
            break;
        default:
            alert("Operacion Invalida");
            break;
    }
    if (cantidad === 0){
        break;
    }


    if (cantidad >= 10 ){
        valorEnvio = 0
        alert("Su costo de envio es $"+ valorEnvio);
    }
    else if (cantidad >=5 ){
        valorEnvio = 2000
        alert("Su costo de envio es $"+ valorEnvio);
    }
    else {
        valorEnvio = 4000
        alert("Su costo de envio es $"+ valorEnvio);
    }
}
                                      