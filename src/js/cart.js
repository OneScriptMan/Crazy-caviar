import { cartExamination, cartCalc } from './utils.js';

const cartItems = document.querySelector('.js-cart-wrapper')


document.body.addEventListener('click', (event) => {
  if(event.target.hasAttribute('data-cart')){
    const currentCard = event.target.closest('.js-card');
 
    const productInfo ={
      id: currentCard.dataset.id,
      img: currentCard.querySelector('.js-img').getAttribute('src'),
      title: currentCard.querySelector('.js-title').innerHTML,
      quantity: currentCard.querySelector('.js-quantity').innerHTML,
      weight: currentCard.querySelector('.js-weight').innerHTML,
      price: currentCard.querySelector('.js-price').innerHTML,
      counter: currentCard.querySelector('.js-result-counter').innerHTML
    }
    console.log(productInfo.price);

    const itemInCart = cartItems.querySelector(`[data-id="${productInfo.id}"]`);

    if (itemInCart) {
      const sum = itemInCart.querySelector('.js-result-counter');
      sum.innerHTML = Number(sum.innerHTML) + Number(productInfo.counter)
    }
    else {
      const cartItemHTML = `
    <div class="cart-item js-cart-item" data-id="${productInfo.id}">
								<div class="cart-item__top">
									<div class="cart-item__img">
										<img src="${productInfo.img}" alt="">
									</div>
									<div class="cart-item__desc ">
										<div class="cart-item__title">${productInfo.title}</div>
										<div class="cart-item__weight">${productInfo.quantity} / ${productInfo.weight}</div>

										<!-- cart-item__details -->
										<div class="cart-item__details">

											<div class="items items--small counter-wrapper">
												<div class="items__control" data-action="minus">-</div>
												<div class="items__current js-result-counter" data-counter="">${productInfo.counter}</div>
												<div class="items__control" data-action="plus">+</div>
											</div>

											<div class="price">
												<div class="price__currency js-price">${productInfo.price}</div>
											</div>

										</div>
										<!-- // cart-item__details -->

									</div>
								</div>
							</div>`;
      if (Number(productInfo.counter)  === 0) {     
        return
      }
      else {
      
        cartItems.insertAdjacentHTML('beforeend', cartItemHTML);
     
      }
      cartExamination();
    }     
    

    let counterInner = currentCard.querySelector('#result-counter');
    cartCalc();
    counterInner.innerHTML = '0';   
  } 
})

cartItems.addEventListener('click', (event) => {
  //Проверка что клик был по кнопке + или минус
  if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus') {

    //находим блок в котором произошел клик
  const currentCounter = event.target.closest('.counter-wrapper');//ищем ближайший к нажатой кнопке, элемент .js-counter 

  let counterInner = currentCounter.querySelector('.js-result-counter');//выбираем поле счетчика, в котором нужно изменить значение

  if (event.target.dataset.action === 'plus') {
    counterInner.innerHTML++
  }
  else if (event.target.dataset.action === 'minus') {
    if (Number(counterInner.innerHTML) > 0) {      
      counterInner.innerHTML--;
      if (Number(counterInner.innerHTML) === 0){
        let target = event.target.closest('.js-cart-item');
        target.remove();
        cartExamination();
      }
    }   
  }
} 
cartCalc();
})