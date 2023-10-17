document.body.addEventListener('click', (event) => {

  if (event.target.dataset.action === 'plus') {
   const currentCounter = event.target.closest('.js-counter');

   currentCounter.querySelector('#result-counter').innerHTML++

  }
  else if (event.target.dataset.action === 'minus') {
    const currentCounter = event.target.closest('.js-counter');
    let counterInner = currentCounter.querySelector('#result-counter');

    if (Number(counterInner.innerHTML) > 0) {      
      counterInner.innerHTML--;
    }   
  }
})



// const plus = document.querySelector('#plus');
// const minus = document.querySelector('#minus');
// const result = document.querySelector('#result-counter')

// plus.addEventListener('click', () => {  
//   result.innerHTML++
// })

// minus.addEventListener('click', () => {
//   currentResult = Number(result.innerHTML);
//   if (currentResult === 0){
//     return
//   }
//   else {
//   result.innerHTML--};
// })