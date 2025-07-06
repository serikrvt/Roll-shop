window.addEventListener('click', (e)=>{
    //перемнная для сщетчика
    let counter;


    // увеличение или уменшения товара
if(e.target.dataset.action === 'plus' || e.target.dataset.action ==='minus'){
    const counterWrapper = e.target.closest('.counter-wrapper')
   counter = counterWrapper.querySelector('[data-counter]')
}



if(e.target.dataset.action === 'plus'){
//   const counterWrapper = e.target.closest('.counter-wrapper')
//   const counter = counterWrapper.querySelector('[data-counter]')
//   console.log(counter);
counter.innerText = ++ counter.innerText
  
}
if(e.target.dataset.action === 'minus'){
    // const counterWrapper = e.target.closest('.counter-wrapper')
    // const counter = counterWrapper.querySelector('[data-counter]')
    // console.log(counter);
    if(parseInt(counter.innerText)>1){
        counter.innerText = -- counter.innerText
    }
}

})

// const btmMinus =  document.querySelector('[data-action="minus"]');
// const btmPlus =  document.querySelector('[data-action="plus"]');
// const counter = document.querySelector('[data-counter]')

// btmMinus.addEventListener('click', function() {
//     if(parseInt(counter.innerText)>1){
//         counter.innerText = -- counter.innerText
//     }
    

// })

// btmPlus.addEventListener('click', function() {
//  counter.innerText = ++ counter.innerText
// })



window.addEventListener('click', (e)=>{

 if(e.target.hasAttribute('data-cart')){
  const card = e.target.closest('.card')    
  const productInfo = {
    id: card.dataset.id,
    imgSrc: card.querySelector('.product-img').getAttribute('src'),
    title: card.querySelector('.item-title').innerText,
    itemsInBox: card.querySelector('[data-items-in-box]').innerText,
    weight: card.querySelector('.price__weight').innerText,
    price: card.querySelector('.price__currency').innerText,
    couter: card.querySelector('[data-counter]').innerText
  }
  console.log(productInfo);
  
 }
})