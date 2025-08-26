// Exercicio 1
// let idade = prompt ("Qual e a idade?");

// if (idade > 18) {

//     alert ("Parabens! Voce e maior de idade.")
    
// } else {
//     alert ("Vai pra super Nani!")
// }
// Exercicio 1
// let idade = prompt ("Qual sua idade?");
// if (idade >=18) {
// // Bloco do verdadeiro
// alert ("Voce e maior de idade!");
// } else {
// // Bloco do falso
// alert ("Vai pra super Nany");
// }

// Exercicio 2
// let numero = prompt ("Insira um numero");
// if (numero >=0) {
// Bloco positivo
// alert ("Esse numero e positivo!");
// } else {
// Bloco do falso
// alert ("Esse numero e negativo!");
// }

// //Exercicio 3
// let nota = prompt ("Qual sua nota?");
// if (nota >=60) {
// // Bloco positivo
// alert ("EBA, passou!");
// } else {
// // Bloco do falso
// alert ("REPROVADO!");
// }


//Exercicio 4
// let numero = prompt ("Digite um numero");
// if (numero > 0) {
// alert ("Positivo");
// } else {
//     if (numero == 0) {
// alert ("o numero e zero!");
// } else {
//    alert ("o numero e negativo")
// }
// }



//Exercicio 5
// let idade = prompt ("Digite sua idade");

// if (idade > 0 && idade <= 12) {
// alert ("Crianca");
// } else {
//     if (idade > 12 && idade <= 17) {
// alert ("Adolescente");
// } else {
//     if (idade > 17 && idade >= 18) {
//    alert ("Adulto veio");
// }
// }
// }

//Exercicio 6
// let numero = prompt ("Digite um numero");
//  if (numero % 2 == 0) {
// alert ("o numero e par");
// } else {
// alert ("o numero e impar");
// }

// exercicio 1 intermediario
let numero1= parseFloat(prompt ("Digite um numero"));
let numero2= parseFloat(prompt ("Agora outro numero"));
let operacao= prompt ("+,-,*,/")

if (operacao === "+") { 
    resultado = numero1+numero2 

} else if  (operacao === "-") { 
    resultado = numero1-numero2 
    
} else if  (operacao === "*") { 
    resultado = numero1*numero2 }

     else if  (operacao === "/") { 
    resultado = numero1/numero2 }

    alert("resultado:"+resultado);
