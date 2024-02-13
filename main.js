const form = document.querySelector('#form');
const inputs = document.querySelectorAll('input');
let span = document.querySelector('.error');

console.log(form)
console.log(inputs)
console.log(span);

inputs.forEach(input => {
    input.addEventListener('input', (e) => {
        showError(input);
    })
})


function showError(input){
    let spanText = input.nextElementSibling;
    spanText.className = "error"
    spanText.innerHTML = ""
}

form.addEventListener('submit', (e) => {
    inputs.forEach(input => {
        if(input.validity.valueMissing) {
            let spanText = input.nextElementSibling;
            spanText.className = "error active"
            spanText.innerHTML = "This shit is required"
            e.preventDefault();
        }
    })
})