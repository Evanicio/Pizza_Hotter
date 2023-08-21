let modalQt = 1 ;
// Parte de querys, códigos e deixa-lo mais bunito.
const c = (el) => document.querySelector(el);
const cs = (el) => document.querySelectorAll(el);


// Mapeamento geral do items 
pizzaJson.map((item , index) => {
  let pizzaItem = c('.models .pizza-item').cloneNode(true);
  c('.pizza-area').append(pizzaItem);
// Modelos do modal
  pizzaItem.querySelector('.pizza-item--img img').src = item.img;
  pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${item.price.toFixed(2)}`;
  pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name;
  pizzaItem.querySelector('.pizza-item--desc').innerHTML = item.description;
   // Fragmentação do modal de items.
   pizzaItem.setAttribute('data-key' , index);


  // Resetando o link externo
  pizzaItem.querySelector('a').addEventListener('click' , (e) => {
    e.preventDefault();
    modalQt = 1 ;
    // requisitos do modal
    let key = e.target.closest('.pizza-item').getAttribute('data-key');
       // adicionar os items ao modal
   
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
    c('.pizzaWindowArea').style.opacity = 0;
    setTimeout(() => {
      c('.pizzaWindowArea').style.opacity = 1 ;
    },200);
  });
c('.pizzaInfo--qt').innerHTML = modalQt;
  
});
// Fechar modal
function closeModal(){
 c('.pizzaWindowArea').style.opacity = 0;
  
    setTimeout(() => {
    c('.pizzaWindowArea').style.display = 'none';
  },500);
};
cs('.pizzaInfo--cancelMobileButton,.pizzaInfo--cancelButton').forEach((item) => {
  item.addEventListener('click', closeModal);
}); 
// quantidade de pizza.
c('.pizzaInfo--qtmenos').addEventListener('click' , () => {
  if(modalQt > 1){
    modalQt--;
    c('.pizzaInfo--qt').innerHTML = modalQt;
  }
  
});
c('.pizzaInfo--qtmais').addEventListener('click' , () => {
    modalQt++
    c('.pizzaInfo--qt').innerHTML = modalQt;
});
// Selecionar o tamanho da pizza
cs('.pizzaInfo--size').forEach((size , sizeIndex) => {
    size.addEventListener('click' , (e) => {
      c('.pizzaInfo--size.selected').classList.remove('selected');
      size.classList.add('selected');
    });
    
});

