let a = 100;
let b = 0.9;
const weight = document.querySelector('#weight');
const height = document.querySelector('#height')
const btn = document.querySelector('#btn')
const p = document.querySelector('p')
console.log(weight, height, btn, p);
btn.addEventListener('click',function(){
    p.innerHTML = `적정체중은 ${(height.value-a)*b}KG이며<br>${weight.value-(height.value-a)*b}KG 초과되셨습니다.`
})