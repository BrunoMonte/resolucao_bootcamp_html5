function clique(){
   
    document.getElementById("agradecer").innerHTML = "obrigado"
    //alert = prompt("Tudo bem ?????")
}
function redirecionar(){
    window.open("https://www.linkedin.com/feed/")   //abre outra aba
    window.location.href = "https://www.linkedin.com/feed/"     //mesma pagina
}

function mudartext(){
    document.getElementById("mudarmouse").innerHTML = "MUDOU O TEXTO"

}

function back(){
    document.getElementById("mudarmouse").innerHTML = "PASSE O MOUSE"
}




/*var validar = 0     //declarando a var global
    function maioridade(idade){
    18
     if(idade >= 18){ 
         validar= true
     }else{
          validar = false
     }
     return validar;
 }
var idade = prompt("Qual a sua idade")
maioridade(idade)
console.log(validar) */


 /*function trocar(frase,nome,subs){
    return frase.replace(nome, subs)
 }
 alert(trocar("Eu sou jogador","jogador", "profissional" ))  */ //utilizando replace na frase


/*function multi(n1, n2){
    return n1*n2
}
console.log(multi(20,22));*/

/*
var data = new Date();
//var dia = data.getDate();
//var mes = data.getMonth();
console.log(data.getDate() + "/" + (data.getMonth()+1) +"/" + data.getFullYear() )*/
/*
var nome = "juju"
var idade= 30
var idade2=25
var frase = "brasil simm"
//alert(nome + " tem " + idade + " anos ")
//alert(idade + idade2)
console.log(nome);
console.log(idade + idade2)
console.log(frase.replace("brasil","Argentina"))    //o replace, altera a string desejada
console.log(frase.toLocaleUpperCase())                //letra maiuscula */

/*var lista = ["juju", "joão", "meme"]
//lista.push("jaja")
//lista.pop()                                 //pop retira ultimo elemtno da lista, push acrescenta string


console.log(lista.reverse())                //inverte array
console.log(lista.toString())           //perde referencia de array, para se tornar string
console.log(lista.join(" / "))          //adiciona item */

/*var fruta = [{nome:"pera", cor:"verde"},{nome:"uva", cor:"roxo"}]     //entre array,cria uma lista descritiva
console.log(fruta) */ 

