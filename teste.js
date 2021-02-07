function retornaMedia(nota1, nota2){
    var media = (nota1 + nota2) / 2

    if(media >= 5){
        return true
    }
        else {
            return false
        }
   
}

console.log(retornaMedia(1,5))