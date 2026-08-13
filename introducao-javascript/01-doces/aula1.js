//Primeira aula de JavaScript
//*Vamos aprender a criar as variaveis e conhecer os tipos*/
const nomeDoce="Leite Ninho";
const preco = 6.7;
const disponivel = true;

console.log(nomeDoce,preco,disponivel);

document.getElementById("resultado").textContent=`${nomeDoce} custa R$ ${preco.toFixed(2)}-disponível: ${disponivel}`;
