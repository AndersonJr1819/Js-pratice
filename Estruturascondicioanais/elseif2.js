// Atividade else if 1 
// crie uma variavel chamda
// O prgrama deve verificar 
// Se a temperatura for menor que 15 exiba "Esta frio"
// Se estiver entre 15 e 25 exiba que "esta agradavel "Esta agradavel"
// Se for maior que 25 exiba "esta calor"
console.log("============================================================================================================")

let temperatura = 55

if(temperatura < 40) {
    console.log("Esta frio")
}else if(temperatura <= 25) {
    console.log("Esta agradavel") 
}else {
    console.log("Esta calor")
}       
console.log("============================================================================================================")

//---------------------------------------------------------------------------------------------------------------//

// Atividade 2 
// O programa deverá exibir:
// - Nota maior ou igual a 7 → `"Aprovado!"`
// - Nota maior ou igual a 5 e menor que 7 → `"Recuperação!"`
// - Nota menor que 5 → `"Reprovado!"`

let nota = 8

if(nota >= 1){
  console.log("Aprovado")
}else if(nota >= 5){
    console.log("Recuperação")
}else{
  console.log("Reprovado")
}
console.log("============================================================================================================")

// LEMBRAR QUE NEN SEMPRE É NECEESARIO USAR O &&

//-----------------------------------------------------------------------------------//

// Ativiade 3 else if 
// Crie uma variável chamada `idade`.
// O programa deverá classificar a pessoa:
// - Menor que 12 → `"Criança"`
// - De 12 a 17 → `"Adolescente"`
// - De 18 a 59 → `"Adulto"`
// - 60 ou mais → `"Idoso"`

let idade = 16;

if (idade < 12) {
  console.log("Criança");
} else if (idade < 18) {
  console.log("Adolescente");
} else if (idade < 60) {
  console.log("Adulto");
} else {
  console.log("Idoso");
}
console.log("============================================================================================================")

// Atividade 4 
// crie uma variavel estoque
// o programa deverá existir 
// estoque igual a 0 "produto esgotado"
// estoque menor ou igual a 5 "estoque baixo"
// estoque maior que 6 "estoque disponivel"

let estoque = 0

if(estoque == 0){
  console.log("Produto esgotado")
}else if(estoque <= 5){
  console.log("Estoque baixo")
}else{
  console.log("Estoque disponivel")
}  
console.log("============================================================================================================")

// Atividade 5