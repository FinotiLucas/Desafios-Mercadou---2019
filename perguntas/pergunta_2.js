/*
    O JavaScript sempre vai comparar as referências internas relacionadas, quando se deparar com uma igualdade,
    nas linhas de codigo os valores são os mesmos {name: 'amy'} = {Name: 'amy'} 
    mas na memória eles são diferentes, por isso deve-se usar " Equal value and equal type " " === ".

*/ 

// SOLUÇÃO
greet = (person) => {
    if (person.name === 'amy') {
        return 'hey amy'
    }
    else{
        return 'hey arnold'
    }
}
greet({ name: 'amy' }) 
    
    // "hey amy"
    
/*
    O erro do código foi definir de forma incorreta o "bark" diretamente em "Dog" 
    o que implica que no objeto resultate não vai herdar a propriedade "bark", 
    para haver essa herança precisamos mover o "bark" para o "prototypes" de "Dog"  
*/

function Dog(name) {
    this.name = name
}
    
Dog.prototype.bark = function() {
    console.log(this.name + ' says woof')
}
    
let fido = new Dog('fido')
fido.bark()

/*
    Desafio 2 -C
*/

class Dog {
    constructor (name) {
    this.name = name
    }

    bark () {
    console.log(this.name + ' says woof')
    }
}
let fido = new Dog('fido')
fido.bark()


/*  É assíncrona !
    Quando uma função assíncrona é chamada, ela retorna uma Promise. 
    Quando a função assíncrona retorna um valor, a Promise será resolvida com o valor retornado. 
    Quando a função assíncrona lança uma exceção ou algum valor, a Promise será rejeitada com o valor lançado.
    Uma função assíncrona pode conter uma expressão await, que pausa a execução da função assíncrona e espera pela resolução 
    da Promise passada, e depois retoma a execução da função assíncrona e retorna o valor resolvido.
    Uma API que retorna uma Promise vai resultar em uma cadeia de Promises e separa a função em várias partes
*/

//Exemplo 1

setTimeout(() => saySomething("10 segundos"), 10000);

const p = Promise.resolve(21);

const p1 = new Promise((resolve, reject) => { 
    setTimeout(() => {
        p.then(value => console.log(value));
    }, 1000);
});

p1.then(values => { 
    console.log(values);
});

//Exemplo 2

async function getValues() {
    return [1,2,3,4];
    }
     
    async function asyncOperation(value) {
        return value + 1;
    }

async function foo() {
    try {
        var message = await promisingOperation();
        console.log(message);
    } catch (e) {
        console.log('Nós falhamos:', e);
    }
}

//Desafio
/*
    Você pode usar "Promise.all" em todos os arrays internos e, em seguida, no array externo, 
    para obter um promise para o array de promises:
*/
var arrayOfPromises = [
   
    [promise_1, promise_2],
    [promise_3,promise_4],
    [promise_5,promise_6]

].reduce(function (arr, item) {
    
    item.forEach(function (promise) {
       arr.push(promise);
    });
    
    return arr;
}, []);

Promise.all(promisesArray).then(function () {
    // Código Aqui
});
