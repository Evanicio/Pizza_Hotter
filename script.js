// Mudança aqui
let modalQt = 1 ;
// FIIM
const c = (el) => document.querySelector(el);
const cs = (el) => document.querySelectorAll(el);

pizzaJson.map((item , index) => {

    let pizzaItem = c('.models  .pizza-item').cloneNode(true);
    // Itens do modelos da pizza
    pizzaItem.querySelector('.pizza-item--img img').src = item.img ;
    pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${item.price.toFixed(2)}`;
    pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name ;
    pizzaItem.querySelector('.pizza-item--desc').innerHTML = item.description;
    pizzaItem.setAttribute('data-key' , index);
    // Resetando o modal e preenchendo as informaçao do modal.
    pizzaItem.querySelector('a').addEventListener('click' , (e) => {
        e.preventDefault();
        modalQt = 1 ;
        // Mostrando o modal com uma opacidade.

        c('.pizzaWindowArea').style.display = 'flex' ;
        c('.pizzaWindowArea').style.opacity = 0 ;
        setTimeout(() => {
            c('.pizzaWindowArea').style.opacity = 1 ;

        }, 200);

        // Preenchendo as informação do meu modal

        let key = e.target.closest('.pizza-item').getAttribute('data-key');

        c('.pizzaBig img').src = pizzaJson[key].img;
        c('.pizzaInfo h1').innerHTML = pizzaJson[key].name ;
        c('.pizzaInfo--desc').innerHTML = pizzaJson[key].description;

        // Mudança aqui
        c('.pizzaInfo--size.selected').classList.remove('selected');
        c('.pizzaInfo--actualPrice').innerHTML = `R$ ${pizzaJson[key].price.toFixed(2)}`;
        cs('.pizzaInfo--size').forEach((size , sizeIndex) => {
            if(sizeIndex == 2){
                size.classList.add('selected');
            };
            // FIIM
            // Mudança aqui
            size.querySelector('span').innerHTML = pizzaJson[key].sizes[sizeIndex];
            // FIIM
            
        });
        // Mudança aqui
        c('.pizzaInfo--qt').innerHTML = modalQt ;
        // FIIM
    });
    c('.pizza-area').append(pizzaItem);
});