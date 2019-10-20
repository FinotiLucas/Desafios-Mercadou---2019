
const validate = (evt) => {

    /*
    CONTROLE DA ENTRADA DE DADOS PARA AS PERGUNTAS 1-A E 1-C
    Permite a digitação apenas de números variando de 0 a 9 em um imput no HTML
    Controlando assim as entradas de dados inválidos, como caracteres especiais e números negativos e etc.
    */

    var theEvent = evt || window.event;
  
    if (theEvent.type === 'paste') {
        key = event.clipboardData.getData('text/plain');
    } else {
        var key = theEvent.keyCode || theEvent.which;
        key = String.fromCharCode(key);
    }
    var regex = /[0-9]|\./;
    if( !regex.test(key) ) {
      theEvent.returnValue = false;
      if(theEvent.preventDefault) theEvent.preventDefault();
    }
}


//Funçoes responsaveis por realizar a pergunta 1 - A
const primo = (numero) => {

    // verifica se o numero digitado é "1" ou "0", que não são primos
    if(numero!=1 && numero != 0){
        for (var i = 2; i < numero; i++)
            if(numero % i === 0) 
                return false;
                    return numero !== 1;
    }
}

const verifircaPrimo = (quadro, texto) => {
    var numero = texto.value
    quadro.value = "";
    
    if (primo(numero)) {
        quadro.value = "O número " + (numero) + " é primo";
    
    } else {
        quadro.value = "O número " + (numero) + " nao é primo";
    }
}

//Funçoes responsaveis por realizar a pergunta 1 - B

const balanced = (texto) => {
    //Verifica também a ordem de fechamento ex: ({)} == false
    var stack = [];
    const simbolos = '()[]{}'; //Simbolos permitidos

    for(let i = 0, l = texto.length; i < l; i++) {
        var posicaoSym = simbolos.indexOf(texto[i]);

        if(!~posicaoSym) {
            continue;
        }

        if(posicaoSym % 2 === 0) {
            stack.push(posicaoSym + 1);
        } else {
            if(stack.pop() !== posicaoSym) {
                return false;
            }
        }
    }

    return stack.length === 0;
}

const showBalanced = (quadro,texto) =>{
    
    var str = texto.value
    quadro.value = "";

    if(balanced(str) == true){
        quadro.value = "A expressão " + (str) + " Está balanceada";
    
    } else {
        quadro.value = "A expressão " + (str) + " Não está balanceada";

    }

}

//Funçoes responsaveis por realizar a pergunta 1 - c
const fibonacci = (quadro,texto) =>{
    var numero = 0;
    
    var proximo_numero = 1;
    
    var aux;

    quadro.value = "";

    while ( numero <= texto.value )
    {
        quadro.value += numero+", ";
        aux = proximo_numero;
        proximo_numero = proximo_numero + numero;
        numero = aux;
    }      
    
}
