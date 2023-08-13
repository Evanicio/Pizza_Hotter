// Criando querys para organização do codigos 

const c = (poe)=> document.querySelector(poe);
const cs = (poe)=> document.querySelectorAll(poe);

// requisiçisitando minha api com json 

pizzaJson.map((item , index)=>{

    // varivel para armazenar meus modelos.
    let pizzaItem =  c('.models .pizza-item').cloneNode(true);
   

    pizzaItem.setAttribute('data-key',index);

    pizzaItem.querySelector('.pizza-item--img img').src = item.img;
    pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${item.price.toFixed(2)}`;
    pizzaItem.querySelector('.pizza-item--desc').innerHTML = item.description;

    pizzaItem.querySelector('a').addEventListener('click' , (e) => {

        e.preventDefault();
        // Requisitando os dados do item pizza. 
        let key = e.target.closest('.pizza-item').getAttribute('data-key');

        // Arquivos do modelos do modal
        c('.pizzaBig img').src = pizzaJson[key].img ;
        c('.pizzaInfo h1').innerHTML = pizzaJson[key].name ;
        c('.pizzaInfo--desc').innerHTML = pizzaJson[key].description ;






        // Meu modal
        c('.pizzaWindowArea').style.display = 'flex';
        c('.pizzaWindowArea').opacity = 0 ;

        setTimeout(()=>{
            c('.pizzaWindowArea').opacity = 1 ;
        }, 200);


    })
    c('.pizza-area').append(pizzaItem);
});