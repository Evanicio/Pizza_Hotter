# Pizza_Hotter
nesse projeto estou sempre atualizando, faço uma parte e treino, depois subo oque aprendi, depois coloco mais função no projeto, estou em faze de aprendizado.
Observação:
esse projeto e apenas usando as linguagem HTML CSS E JAVA SCRIPT.

#Explicando o código 
Variáveis ​​e Funções de Seleção: As três primeiras linhas declaram uma variável modalQt para controlar a quantidade de pizzas no modal, e definem funções de atalho para selecionar elementos do DOM ( c para selecionar um elemento e cs para selecionar múltiplos elementos).

Iteração sobre pizzaJson: ​​O bloco map itera sobre o array pizzaJson e para cada item, clona o elemento .pizza-item, preencha suas informações e configure um evento de clique para abrir o modal com detalhes da pizza.

Configuração do Modal e Abertura: Quando o botão da pizza é clicado, o código configura o modal com as informações da pizza selecionada e exibe com uma animação de fade-in.

Função closeModal: Essa função é responsável por fechar o modal, alterando sua opacidade e escondendo-o após uma transição.

Evento de Fechar Modal: Associa a função closeModalaos botões "Cancelar" no modal.

Ajuste de Quantidade de Pizzas: Os eventos de clicar nos botões "Menos" e "Mais" permitem ajustar a quantidade de pizzas exibidas no modal.

Seleção do Tamanho da Pizza: Ao clicar em um tamanho de pizza, uma classe selected é alternada entre os elementos para destacar a escolha do tamanho.

#Cógido usado no projeto

// Inicialização da variável para controlar a quantidade de pizzas no modal
let modalQt = 1;

// Função de atalho para selecionar um único elemento do DOM
const c = (el) => document.querySelector(el);

// Função de atalho para selecionar múltiplos elementos do DOM
const cs = (el) => document.querySelectorAll(el);

// Iteração sobre o array pizzaJson para criar elementos de pizza
pizzaJson.map((item, index) => {
  // Clona o elemento .pizza-item e adiciona à área de pizzas
  pizzaItem = c('.models .pizza-item').cloneNode(true);
  c('.pizza-area').append(pizzaItem);

  // Preenche informações da pizza
  pizzaItem.querySelector('.pizza-item--img img').src = item.img;
  pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${item.price.toFixed(2)}`;
  pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name;
  pizzaItem.querySelector('.pizza-item--desc').innerHTML = item.description;

  // Define atributo data-key para identificar a pizza no modal
  pizzaItem.setAttribute('data-key', index);

  // Define ação ao clicar no botão da pizza
  pizzaItem.querySelector('a').addEventListener('click', (e) => {
    e.preventDefault();

    // Reseta a quantidade de pizzas no modal
    modalQt = 1;

    // Preenche informações do modal com base na pizza selecionada
    let key = e.target.closest('.pizza-item').getAttribute('data-key');
    c('.pizzaBig img').src = pizzaJson[key].img;
    c('.pizzaInfo h1').innerHTML = pizzaJson[key].name;
    c('.pizzaInfo--desc').innerHTML = pizzaJson[key].description;
    c('.pizzaInfo--actualPrice').innerHTML = `R$ ${pizzaJson[key].price.toFixed(2)}`;
    c('.pizzaInfo--size.selected').classList.remove('selected');
    cs('.pizzaInfo--size').forEach((size, sizeIndex) => {
      if (sizeIndex == 2) {
        size.classList.add('selected');
      };
      size.querySelector('span').innerHTML = pizzaJson[key].sizes[sizeIndex];
    });

    // Mostra o modal com animação
    c('.pizzaWindowArea').style.display = 'flex';
    c('.pizzaWindowArea').style.opacity = 0;
    setTimeout(() => {
      c('.pizzaWindowArea').style.opacity = 1;
    }, 200);
    
    // Atualiza a quantidade de pizzas exibida no modal
    c('.pizzaInfo--qt').innerHTML = modalQt;
  });
});

// Função para fechar o modal
function closeModal() {
  c('.pizzaWindowArea').style.opacity = 0;
  setTimeout(() => {
    c('.pizzaWindowArea').style.display = 'none';
  }, 500);
};

// Adiciona evento de fechar modal aos botões "Cancelar"
cs('.pizzaInfo--cancelMobileButton,.pizzaInfo--cancelButton').forEach((item) => {
  item.addEventListener('click', closeModal);
});

// Aumenta ou diminui a quantidade de pizzas no modal
c('.pizzaInfo--qtmenos').addEventListener('click', () => {
  if (modalQt > 1) {
    modalQt--;
    c('.pizzaInfo--qt').innerHTML = modalQt;
  }
});

c('.pizzaInfo--qtmais').addEventListener('click', () => {
  modalQt++;
  c('.pizzaInfo--qt').innerHTML = modalQt;
});

// Seleciona o tamanho da pizza no modal
cs('.pizzaInfo--size').forEach((size, sizeIndex) => {
  size.addEventListener('click', (e) => {
    c('.pizzaInfo--size.selected').classList.remove('selected');
    size.classList.add('selected');
  });
});

