export function cartExamination() {
  const cartWrapper = document.querySelector('.js-cart-wrapper');
  const emptyCart = document.querySelector('.js-empty-cart');
  const orderedList = document.querySelector('.js-ordered-list');
  const length = cartWrapper.children.length;
  let deliveryCost = document.querySelector('.js-delivery-cost');
  const totalPrice = document.querySelector('.js-total-price');

  if (length > 0) {
    emptyCart.style.display = 'none';
    orderedList.style.display = 'block';
  }
  else {
    emptyCart.style.display = 'block';
    orderedList.style.display = 'none';
    deliveryCost.innerHTML = '';
    totalPrice.innerHTML = '0';
  }
}


export function cartCalc() {
  const cartWrapper = document.querySelector('.js-cart-wrapper');
  const totalPrice = document.querySelector('.js-total-price');
  const length = cartWrapper.children.length;
  let sum = 0;

  for (let i = 0; i < length; i++) {
    const counter = cartWrapper.children[i].querySelector('.js-result-counter');   
    const price = cartWrapper.children[i].querySelector('.js-price');
    sum += Number(counter.innerHTML) * parseInt(price.innerHTML);
  }

  if (sum < 6000) {
    let deliveryCost = document.querySelector('.js-delivery-cost');
    deliveryCost.innerHTML = "500 ₽";
    totalPrice.innerHTML = sum + parseInt(deliveryCost.innerHTML);
  }
  else if (sum >= 6000){
    let deliveryCost = document.querySelector('.js-delivery-cost');
    deliveryCost.innerHTML = "бесплатно";
    totalPrice.innerHTML = sum;
  }

}