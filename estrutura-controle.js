/*
escreval ("Digite o nome do aluno: ")
   leia(nome)
   escreval("Digite a nota 01 do aluno: ")
   leia(nota01)
   escreval("Digite a nota 02 do aluno: ")
   leia(nota02)
   media <- (nota01 + nota02) / 2
   
   se media >= 5 entao
      escreval("APROVADO!")
   senao
        escreval ("REPROVADO!")
   fimse
   */

   function retornaResultado(){

   

   var nome;
   var nota01 = 10;
   var nota02 = 2;
   var media = (nota01 + nota02) / 2;

    if(media >=5){
        return true
    }
        else{
            return false
        }

}










/*
   nome = prompt("Digite o nome do aluno: ");
   nota01 = prompt("Digite a nota 01 do aluno: ");
   nota02 = prompt("Digite a nota 02 do aluno: ");

    media = (parseInt(nota01) + parseInt(nota02)) / 2

    if(media >= 5 )
        alert("Aprovado! " + nome)
    else
        alert("Reprovado! " + nome)
*/





   