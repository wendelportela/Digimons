/*
const personagens = [
  {
    nome: "wendel",
    descricao: "wendelwendelwendelwendelwendelwendelwendelwendelwendelwendelwendelwendelwendelwendelwendelwendelwendelwendelwendelwendelwendelwendelwwendelwendeldel",
    tipo: "lendario"
  }, 
  {
    nome: "Fabricio",
    descricao: "FabricioFabricioFabricioFabricioFabricioFabricioFabricioFabricioFabricioFabricioFabricioFabricioFabricioFabricioFabricioFabricioFabricioFabricioFabricioFabricioFabricioFabricio",
    tipo: "comum"
  },
  {
    nome: "guga",
    descricao: "gugagugagugagugagugagugagugagugagugagugagugagugagugagugagugagugagugagugagugagugagugagugagugagugagugagugagugagugagugagugagugagugagugagugagugagugagugagugaguga",
    tipo: "raro"
  }
]



const tudo = document.querySelector('#tudo')
const template = document.querySelector('template');
const clone = template.content.cloneNode(true);

clone.querySelector('h1').textContent = personagens[0].nome

clone.querySelector('p').textContent = personagens[0].descricao
clone.querySelector('h2').textContent = personagens[0].tipo



console.log(clone.querySelector('h1').textContent = personagens[0].nome)
*/
const tudo = document.querySelector('#tudo')
const template = document.querySelector('template');
const clone = template.content.cloneNode(true);

tudo.appendChild(clone);




////MOSTRAR SLIDES

const slides = document.querySelectorAll('.pag1');

let slideAtual = 0;

function MostrarSlide(i) {
  slides.forEach(slide => {slide.style.display = "none";})

  slides[i].style.display = 'flex';
}

MostrarSlide(0);



//////// MUDAR OS SLIDESSS

setInterval(() => {
  slideAtual = (slideAtual + 1 ) % slides.length
  MostrarSlide(slideAtual)
}, 4000)


//// MOSTRAR LINHAS

const linhas = document.querySelectorAll('.linha');

let index = 0;

function MostrarLinha(i) {
  linhas.forEach(linha => {linha.style.background = "gray"});

  linhas[i].style.background = "yellow";
}

setInterval(() => {
  index = (index + 1 ) % linhas.length;
  MostrarLinha(index);
},4000)





/////// DIGIMONS //////////


const blocos = document.querySelector("#bloco");
const faixas = document.querySelector('#faixas');
const botao = document.querySelector("#botao");
const anterior = document.querySelector("#botaoMenos");


const API = "https://digimon-api.vercel.app/api/digimon"



let atual = 0;

const porPagina = 18;

let todosDigimons = [];


fetch(API)
.then(response => response.json())
.then(data => {


    todosDigimons = data;
    console.log(data)

    const proximos = todosDigimons.slice(atual, atual + porPagina);
  
  

    proximos.forEach(digimon => {
      const clone = blocos.cloneNode(true); 
      clone.classList.remove('modelo')

      clone.querySelector('img').src = digimon.img;
      clone.querySelector('h2').textContent = `•${digimon.name}•`;


      faixas.appendChild(clone); 
    })


     function carregarMenos() {
      if (atual - porPagina >= 0) {
          atual -= porPagina;
          faixas.innerHTML = '';

          const anteriores = todosDigimons.slice(atual, atual + porPagina);


          anteriores.forEach(digimon => {

          const clone = blocos.cloneNode(true);
          blocos.classList.remove('modelo');
          
            

          clone.querySelector('img').src = digimon.img;
          clone.querySelector('h2').textContent = digimon.name;
          clone.querySelector("p").textContent = digimon.level;


          faixas.appendChild(clone);




  });

      }}
      
      document.querySelector('#botaoMenos').addEventListener('click', carregarMenos);

      carregarMais();
})


/////////////////////////////////

function carregarMais() {


   faixas.innerHTML = '';


  const proximos = todosDigimons.slice(atual, atual + porPagina);


  proximos.forEach(digimon => {

  const clone = blocos.cloneNode(true);
  blocos.classList.remove('modelo');
  
    

  clone.querySelector('img').src = digimon.img;
  clone.querySelector('h2').textContent = digimon.name;
  clone.querySelector("p").textContent = digimon.level;

  faixas.appendChild(clone);

  });


  atual += porPagina
/*

  if (atual >= todosDigimons.length) {
    botao.style.display = "none";
  }


  */
}












botao.addEventListener('click', carregarMais);  