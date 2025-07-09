const cartWraper = document.querySelector('.cart-wrapper')

window.addEventListener('click', (e)=>{
    //перемнная для сщетчика
    let counter;


    // увеличение или уменшения товара
if(e.target.dataset.action === 'plus' || e.target.dataset.action ==='minus'){
    const counterWrapper = e.target.closest('.counter-wrapper')
   counter = counterWrapper.querySelector('[data-counter]')
}



if(e.target.dataset.action === 'plus'){

counter.innerText = ++ counter.innerText
  
}
if(e.target.dataset.action === 'minus'){
 
    if(parseInt(counter.innerText)>1){
        counter.innerText = -- counter.innerText
    }
}

})

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

  const cartItemHTML = `
  <div class="cart-item" data-id="${productInfo.id}">
								<div class="cart-item__top">
									<div class="cart-item__img">
										<img src="${productInfo.imgSrc}" alt="${productInfo.title}">
									</div>
									<div class="cart-item__desc">
										<div class="cart-item__title">${productInfo.title}</div>
										<div class="cart-item__weight">${productInfo.itemsInBox}. / ${productInfo.weight}</div>

										<!-- cart-item__details -->
										<div class="cart-item__details">

											<div class="items items--small counter-wrapper">
												<div class="items__control" data-action="minus">-</div>
												<div class="items__current" data-counter="">${productInfo.couter}</div>
												<div class="items__control" data-action="plus">+</div>
											</div>

											<div class="price">
												<div class="price__currency">${productInfo.price}</div>
											</div>

										</div>
										<!-- // cart-item__details -->

									</div>
								</div>
							</div>
  `
 cartWraper.insertAdjacentHTML('afterend', cartItemHTML)
 }
})