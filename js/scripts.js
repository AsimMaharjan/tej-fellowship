window.alert("Hello TEJ!")
function alertFunction(){
    alert("Hello there!")

}
let btnIncrease = document.querySelector('#add');
let btnDecrease = document.querySelector('#subtract');
let input = document.querySelector('input');

btnIncrease.addEventListener('click', () =>{
    input.value = parseInt(input.value) + 1;
});
btnDecrease.addEventListener('click', ()=>{
    input.value = parseInt(input.value) - 1;
});