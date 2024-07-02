const maxEntrda = prompt("Digite o Numero Mais Alto do Bingo ?") 

const numerosChamados = document.getElementById("NumerosChamados")
max = maxEntrda 

const numerosBingo= []

for(i=1; i<= max; i++){
    numerosBingo.push(i)
}
console.log(numerosBingo)


//Sort

function randomizarNumeros(array){
   return array.sort(()=> Math.random()-0.5)
}

randomizarNumeros(numerosBingo);
console.log(randomizarNumeros(numerosBingo));

var contador = -1;

function mostrarUmaUm(){
    contador++
    if(contador < numerosBingo.length) {
        console.log(numerosBingo[contador])
        numerosChamados.innerHTML+=" "+ numerosBingo[contador] +", "
          
    }else {
        console.log("acabou o bingo")
        alert("acabou o bingo")
    }
}
//console.log(numerosBingo.length)


