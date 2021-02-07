function paraFaca (numero){

    var fatorial = 1
    var contador

   for (contador = 1; contador <= numero; contador++) {
            fatorial = fatorial * contador
       
   }  
    console.log("O fatorial de " + numero + " é: " + fatorial)
}

paraFaca(9)

