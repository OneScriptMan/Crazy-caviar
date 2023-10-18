document.body.addEventListener('click', (event) => {

  //Проверка что клик был по кнопке + или минус
  if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus') {

      //находим блок в котором произошел клик
    const currentCounter = event.target.closest('.js-counter');//ищем ближайший к нажатой кнопке, элемент .js-counter 

    let counterInner = currentCounter.querySelector('#result-counter');//выбираем поле счетчика, в котором нужно изменить значение

    if (event.target.dataset.action === 'plus') {
      counterInner.innerHTML++
    }
    else if (event.target.dataset.action === 'minus') {
      if (Number(counterInner.innerHTML) > 0) {      
        counterInner.innerHTML--;
      }   
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