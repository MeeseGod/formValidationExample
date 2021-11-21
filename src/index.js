const email = document.getElementById('emailInput');
const country = document.getElementById('countryInput');
const zip = document.getElementById('zipInput');
const passwordInput = document.getElementById('passwordInput');
const passwordValidation = document.getElementById('passwordValidation');
const letters = "[A-Za-z]+"
const numbers = "[0-9]+"

zip.addEventListener('input', function(){
    const zipcode = zip.value.split("");

    if(zipcode != "" && zip.value.length == 6){
        for(let i = 0; i < zipcode.length; i++){
            if(i % 2 == 0){
                if(zipcode[i].match(letters) != null){ // Causes an error
                    zip.setCustomValidity('');
                }
                else{
                    zip.setCustomValidity('Invalid postal code. Please use the proper format(A1A1A1)')
                }
            }
            else if(i % 2 == 1){
                if(zipcode[i].match(numbers) != null){ // Causes an error
                    zip.setCustomValidity('')
                }
                else{
                    zip.setCustomValidity('Invalid postal code. Please use the proper format(A1A1A1)')
                }
            }
        }
    }
})

passwordInput.addEventListener('input', function(){
    checkPasswordValidity();
})

passwordValidation.addEventListener('input', function(){
    checkPasswordValidity();
})

function checkPasswordValidity(){
    if(passwordInput.value == passwordValidation.value || passwordValidation.value == passwordInput.value){
        passwordValidation.setCustomValidity('')
        passwordInput.setCustomValidity('');
    }
    else{
        passwordValidation.setCustomValidity('Passwords do not match')
    }
}