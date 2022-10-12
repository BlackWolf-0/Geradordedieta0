//  função do IMC
function calcularimc() {
  let Tamanho = document.getElementById('Tamanho').value
  let peso = document.getElementById('Peso').value
  let img = document.getElementById('img')

  let imc = peso / (Tamanho * Tamanho).toFixed(2)

  if (imc >= 0 && imc < 18.5) {
    img.src = 'Images/Sem Título-1.png'
    document.body.style.background = '#2e636f'
  } else if (imc >= 18.5 && imc < 24.5) {
    img.src = 'Images/Sem Título-2.png'
   document.body.style.background = '#6da164'
  } else if (imc >= 25 && imc < 30) {
    img.src = 'Images/Sem Título-3.png'
   document.body.style.background = '#d5b624'
  } else if (imc >= 30.1 && imc < 35) {
    img.src = 'Images/Sem Título-4.png'
   document.body.style.background = '#896011'
  } else if (imc >= 35.1 && imc < 39) {
    img.src = 'Images/Sem Título-5.png'
   document.body.style.background = '#891111'
  }
  else{imc
  }
}
 let button = document.getElementById('button')
 button.addEventListener('click' , calcularimc) 

 function gerardieta() {
  let Ectomorfo = document.getElementById('Ectomorfo').value
  let Endomorfo = document.getElementById('Endomorfo').value
  let mesomorfo = document.getElementById('mesomorfo').value
  let Ganharmassa = document.getElementById('Ganharmassa').value
  let img = document.getElementById('img')

  let dieta = Ganharmassa / (Ectomorfo * Ectomorfo).toFixed(2)

  if ( dieta >= Ectomorfo && dieta < ganhar-massa) {
    img.src = 'Images/Sem Título-1.png'
    document.body.style.background = '#2e636f'
  } else if (imc >= 18.5 && imc < 24.5) {
    img.src = 'Images/Sem Título-2.png'
   document.body.style.background = '#6da164'
  } else if (imc >= 25 && imc < 30) {
    img.src = 'Images/Sem Título-3.png'
   document.body.style.background = '#d5b624'
  } else if (imc >= 30.1 && imc < 35) {
    img.src = 'Images/Sem Título-4.png'
   document.body.style.background = '#896011'
  } else if (imc >= 35.1 && imc < 39) {
    img.src = 'Images/Sem Título-5.png'
   document.body.style.background = '#891111'
  }
  else{imc
  }
}
let button1 = document.getElementById('button')
button1.addEventListener('click' , Gerar) 