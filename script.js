const section = document.querySelector('.list')
const alerte = document.querySelector('.alert-disable');

let sortedNumbers = Array();
let setSortedNumbers = Array();
let r,temp,random;
let contador =0;

const botao = document.querySelector('#gerar')
const atualizar = document.querySelector('#atualizar')

atualizar.classList.add('button-none');
function Sorted(){
  contador++;
  atualizar.classList.remove('button-none')

  if(contador > 1){
    botao.classList.add('button-none')
    alerte.classList.replace('alert-disable', 'alert')
    botao.setAttribute('disabled', '');
    
  } else {
    for(let i = 1; i <=25; i++){
      sortedNumbers.push(i);  
    }  
  
  for(let i = 0; i < sortedNumbers.length; i++){
      temp = sortedNumbers[i];
      random = Math.floor(Math.random() * (25 - 1) + 1)
      sortedNumbers[i] = sortedNumbers[random];
      sortedNumbers[random] = temp;
    }
  
    for(let i = 0; i < 15; i++){
      setSortedNumbers.push(sortedNumbers[i])  
    }
  
    toString(setSortedNumbers)
  
    function Template(){
      for(let i = 0; i < 15; i++){
        let newLi = document.createElement('div');
        newLi.classList.add('item');
        newLi.innerText = setSortedNumbers[i]
        section.appendChild(newLi)
      }
    }
    Template();
  }

}

atualizar.addEventListener('click', ()=>{
  window.location.reload(true);
})







