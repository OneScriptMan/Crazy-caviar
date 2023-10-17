const plus = document.querySelector('#plus');
const minus = document.querySelector('#minus');
const result = document.querySelector('#result-counter')

plus.addEventListener('click', () => {  
  result.innerHTML++
})

minus.addEventListener('click', () => {
  currentResult = Number(result.innerHTML);
  if (currentResult === 0){
    return
  }
  else {
  result.innerHTML--};
})