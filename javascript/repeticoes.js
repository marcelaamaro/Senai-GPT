// console.log("FOR");
// for (let contadora = 1; contadora <= 5; contadora++){

// console.log(contadora);

// }

// console.log("WHILE");
// let contadoraWhile = 1;
// while (contadoraWhile <= 5); {

// contadoraWhile++;
// console.log(contadoraWhile);

// }


// EXERCICIOS DO DIA 2708
//exercicio 1
// for (let contadora = 1; contadora<=10; contadora++){

//     console.log(contadora);
// }

// exercicio 2
// let numero = prompt("Digite um numero");
// for (let contadora = 1; contadora<=10; contadora++){

//     let resultado=contadora*numero
//     console.log(resultado);
// }

// exercicio 3
let N = Number(prompt("Digite um numero"));

let soma=0;
let i= 1;

 while (i <= N) {
  soma += i;
  i++;
}
console.log("A soma dos primeiros", N, "números naturais é:", soma);