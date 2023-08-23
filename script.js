let cart = [];
let modalQt = 1 ;
let modalKey = 0 ;

const c = (el) => document.querySelector(el);
const cs = (el) => document.querySelectorAll(el);

pizzaJson.map((item , index) => {
  pizzaItem = c('.models .pizza-item').cloneNode(true);
  

  // items da pizza
  pizzaItem.querySelector('.pizza-item--img img').src = item.img;
  pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${item.price.toFixed(2)}`;
  pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name;
  pizzaItem.querySelector('.pizza-item--desc').innerHTML = item.description;

  // Fragmento do modal
  pizzaItem.setAttribute('data-key', index);

  // Resete do modal
  pizzaItem.querySelector('a').addEventListener('click', (e) => {
    e.preventDefault();
    // Items do modal
    let key = e.target.closest('.pizza-item').getAttribute('data-key');
    modalQt =  1 ;
    modalKey = key;
    
    c('.pizzaBig img').src = pizzaJson[key].img;
    c('.pizzaInfo h1').innerHTML = pizzaJson[key].name;
    c('.pizzaInfo--desc').innerHTML = pizzaJson[key].description;
    c('.pizzaInfo--actualPrice').innerHTML =  `R$ ${pizzaJson[key].price.toFixed(2)}`;
    c('.pizzaInfo--size.selected').classList.remove('selected');
    cs('.pizzaInfo--size').forEach((size , sizeIndex) => {
      if(sizeIndex == 2){
        size.classList.add('selected');
      };
      size.querySelector('span').innerHTML = pizzaJson[key].sizes[sizeIndex];
    });

    // Mostrando o modal
    c('.pizzaWindowArea').style.display = 'flex';
    c('.pizzaWindowArea').style.opacity = 0 ;
    setTimeout(() => {
      c('.pizzaWindowArea').style.opacity = 1 ;
    },200);
    c('.pizzaInfo--qt').innerHTML = modalQt;
  });
  c('.pizza-area').append(pizzaItem);
});

// Fechar Modal
function closeModal() {
  c('.pizzaWindowArea').style.opacity = 0 ;
  setTimeout(() => {
    c('.pizzaWindowArea').style.display = 'none' ;
  },500);
};
cs('.pizzaInfo--cancelMobileButton,.pizzaInfo--cancelButton').forEach((item) => {
  item.addEventListener('click' , closeModal);
});

// adicionando mais que uma pizza no modal
c('.pizzaInfo--qtmenos').addEventListener('click' , () => {
  if(modalQt > 1) {
    modalQt--;
    c('.pizzaInfo--qt').innerHTML = modalQt;
  }
});
c('.pizzaInfo--qtmais').addEventListener('click' , () => {
  modalQt++;
  c('.pizzaInfo--qt').innerHTML = modalQt;
});

// selecionar o tamanho da pizza
cs('.pizzaInfo--size').forEach((size , sizeIndex) => {
  size.addEventListener('click', (e) => {
    c('.pizzaInfo--size.selected').classList.remove('selected');
    size.classList.add('selected');
  });
});
// Botão de adicionar ao carinho.
c('.pizzaInfo--addButton').addEventListener('click' , () => {
  let size = parseInt(c('.pizzaInfo--size.selected').getAttribute('data-key'));
  cart.push({
    id:pizzaJson[modalKey].id,
    size,
    qt:modalQt
  });
  closeModal();
});




