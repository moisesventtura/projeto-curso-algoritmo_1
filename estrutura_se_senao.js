function calcularDoisValores (operador, valor1, valor2){
    var resultado

        console.log("A proposta desse programa é calucular dois valores baseado no operador")

    if (operador === "+"){  
                resultado = valor1 + valor2
                        return console.log("O resultado do cáculo é: " + resultado)
        }
            else if (operador === "-"){
                        resultado = valor1 - valor2
                            return console.log("O resultado do cáculo é: " + resultado)
            }
                else if (operador === "*"){
                            resultado = valor1 * valor2
                                return console.log("O resultado do cáculo é: " + resultado)
                }
                    else if (operador === "/"){
                                resultado = valor1 / valor2
                                    return console.log("O resultado do cáculo é: " + resultado)
                    }
                
}

calcularDoisValores("/",100,100)