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
// Crie uma variavel desempenho com valor entre 0 a 100
// O programa devera exibir
// 90 ou mais "Excelente"
// 70 a 89 "Bom"
// 50 a 69 "Regular"
// Menor que 50 "Precisa melhorar"

let desempenho = 100

if(desempenho > 90){
    console.log("Excelente")
}else if(desempenho >= 89){
  console.log("Bom")
}else if(desempenho >= 69){
  console.log("Regular")
}else{
  console.log("Precisa melhorar")
}
console.log("============================================================================================================")

// Atividade 6 
// Crie uma variavel chamda valordecompra
// o programa devera aplicar as seguites regras
// compras de R$ 500 ou mais devem receber 20% de desconto
// compras de R$ 200 ou mais devem receber 10 % de desconto
// compras de R$ 100 ou mais devem receber 5 % de desconto 
// compras abaixo de R$ 100 não devem receber desconto 
// o programa devera calcular e mostrar o valor final da compra 

let valordecompra = 350
let desconto = 0

if(valordecompra  >= 500){
  desconto - 0.20
}else if(valordecompra >= 200){
  desconto = 0.10
}else if(valordecompra >= 100){
  desconto = 0.05
}else{
  desconto = 0
}

let valorfinal = valordecompra - (valordecompra * desconto)

console.log("valor final: R$" + valorfinal) //ESTUDAR MAIS QUESTÕES DE PORCEBTAGEM EM JS
console.log("============================================================================================================")

