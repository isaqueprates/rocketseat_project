const soma = document.querySelector('#calculo')
const resultado = document.querySelector('#resultado')

function insert(num){
      
        let numero = soma.innerHTML;
        soma.innerHTML = numero + num;
}

function reset(){
        soma.innerHTML = '';
        resultado.innerHTML = '0';
}

function calc(){

        const operator = document.querySelector('#calculo').innerHTML;
        
        if(!operator == '/' || operator != null){
                resultado.innerText = eval(operator);
        }else {
                resultado.innerText = 'Error';
        }
}

