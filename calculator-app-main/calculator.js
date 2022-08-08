function insert (digitos){
    document.getElementById('display').innerHTML = digitos
}

function limpar(){
    document.getElementById('display').innerHTML = ("")
}
function insert (digitos){
const numero = document.getElementById('display').innerHTML
      document.getElementById('display').innerHTML = numero + digitos
}  
function conta()
{
    const resultado = document.getElementById('display').innerHTML
    if(resultado){
        document.getElementById('display').innerHTML= eval(resultado)
    }
}

function delet(){
    const deletar =document.getElementById('display').innerHTML
    document.getElementById('display').innerHTML = deletar.substring(0,deletar.length -1)

}




// apliquei insert como função nos botões
//chamei a função e coloquei para inserir dentro da classe text os valores dos botões que cliquei
//fiz o mesmo com a função limpar e inserir nada para apagar
// somei uma variavel com a função para colocar um do lado do outro
// EVAL(), função ja de soma do js