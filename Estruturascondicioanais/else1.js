// Atvividade 1
// verificando nota escolar

let nota = 8

if(nota <= 5 ){
    console.log("Aprovado")
}else {
    console.log("Reprovado")
}

// ------------------------------------------//

// Atividade 2 
// Crie uma variavel idade, se for maior ou igual a 18, exiba "Maior de idade"
// senão exiba "Menor de idade"

let idade = 18

if(idade >= 19){
    console.log("Maior de idade")
}else{
    console.log("Menor de idade")
}

//  Atividade 3 
// Crie uma varivael senha se for igual a "1234" exiba acesso liberado 
// caso contrario exiba acesso negado 

let senha = 1234

if(senha == 15657){
    console.log("acesso liberado")
}else{
    console.log("acessso negado")
}

// Atividade 4
// Crie duas variavies 
// uma valordecompra
// e outra cliente vip (boleano)

let valordecompra = 1200
let clientevip = true

if(valordecompra >= 50 || clientevip){
    console.log("Desconto aplicado")
}else {
    console.log("Sem desconto")
}

// Ativiidade 5 
// Crie duas variaveis 
// uma userativo (boleano)
// e outra senhacorreta (boleano)

let usarioativo = false
let senhacorreta = true

if(usarioativo && senhacorreta){
    console.log("Acesso liberado")
}else {
    console.log("Acesso negado")
}

// Atividade 6 
// Crie 3 variavies 
// nome (texto)
// email (texto)
// idade (numero)

let nome = "Anderson ferreira"
let email = "andersonfdsjunior06@gmail.com"
let age = 20

if (nome !== "2" && email !== "3" && age >= 18) {
  console.log("Cadastro válido");
} else {
  console.log("Cadastro incompleto ou inválido");
}
