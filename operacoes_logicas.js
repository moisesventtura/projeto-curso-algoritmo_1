function retornaNota(nota1, nota2){
    var passou = false
    var media = (nota1 + nota2 ) / 2

    if(media >= 5){
         passou = true
    
        if (passou && (media >= 5 || media <= 7))
            return console.log("Aprovado!")
            
        else
            return console.log("Reprovado")
        

    }

}

 retornaNota(5,5)