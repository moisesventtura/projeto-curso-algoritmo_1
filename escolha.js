function calcularDoisValores(operador, valor1, valor2){
    var resultado

    switch (operador) {
        case "+":
            resultado = valor1 + valor2
                console.log("O resultado do cáculo é: " + resultado)
                    break;
        
        case "-":
                resultado = valor1 - valor2
                    console.log("O resultado do cáculo é: " + resultado)
                        break;
        
        case "*":
                resultado = valor1 * valor2
                    console.log("O resultado do cáculo é: " + resultado)
                        break;

         case "+":
                 resultado = valor1 / valor2
                    console.log("O resultado do cáculo é: " + resultado)
                        break;           
        default:
            console.log("Digite um operador válido!")
            break;
    }
}

calcularDoisValores("-",50,20)