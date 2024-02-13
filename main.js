const form = document.querySelector('#form');
const inputs = document.querySelectorAll('input');
let span = document.querySelector('.error');

console.log(form)
console.log(inputs)
console.log(span);

inputs.forEach(input => {
    input.addEventListener('input', (e) => {
        let spanText = input.nextElementSibling;
        spanText.className = "error active"
        spanText.innerHTML = "Try if its working"
        console.log(spanText)
    })
})
