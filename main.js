const form = document.querySelector('#form');
const inputs = document.querySelectorAll('input');
let span = document.querySelector('.error');
let password = document.querySelector('#pwd');
let confPwd = document.querySelector('#conf-pwd');

inputs.forEach(input => {
    input.addEventListener('input', (e) => {
        showError(input);
    })
})


function showError(input){
    let spanText = input.nextElementSibling;
    spanText.className = "error";
    spanText.innerHTML = "";

    switch (input.id) {
        case "email": 
            if(input.validity.typeMismatch){
                spanText.className = "error active"
                spanText.textContent = "You must enter a valid email address my son"
            }
        break;

        case "pwd":
            if(input.validity.tooShort) {
                spanText.innerHTML = `Password must be ${input.minLength} characters long; you entered ${input.value.length} char.`;
                spanText.className = "error active";
            }
        break;

        case "phone":
            if(input.validity.tooShort) {
                spanText.innerHTML = `Phone number must be ${input.minLength} digits long; you entered ${input.value.length} digits.`;
                spanText.className = "error active";
            }
        break;
    }

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

    if(password.value !== confPwd.value){
        let passwordError = confPwd.nextElementSibling;
        console.log(passwordError)
        passwordError.innerHTML = "Password does not match"
        passwordError.className = "error active"
        e.preventDefault();
    }
})