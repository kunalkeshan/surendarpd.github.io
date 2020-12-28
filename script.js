
const name = document.getElementById('username')
const password1 = document.getElementById('password1')
const password2 = document.getElementById('password2')
const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
    /*
    if (name.value === '' || name.value == null){
        alert('enter your username')
        e.preventDefault()
    }
    if (name.value.length <5 ){
        alert('username should be greater that 5 characters')
        e.preventDefault()
    }
    if (name.value.length >15 ){
        alert('username should not be greater than 10 characters')
        e.preventDefault()
    }
    if (password1.value != password2.value){
        alert('passwords do not match')
        e.preventDefault()
    }*/
    e.preventDefault()

    checkInputs();
})

function checkInputs(){
    const usernameValue = name.value.trim()
    const password1Value = password1.value
    const password2Value = password2.value

    if (usernameValue === ''){
        setErrorFor(name,'Username cannot be blank')
    }
    else{
        setSuccessFor(name)
    }
    if (password1Value === ''){
        setErrorFor(password1,'Enter Password')
    }
    else{
        setSuccessFor(password1)
    }
    if (password1Value != password2Value){
        setErrorFor(password2,'Passwords does not match')
    }
    else if (password2Value === ''){
        setErrorFor(password2,'re-enter password')
    }
    else{
        setSuccessFor(password2)
    }
    if (usernameValue>0){
        alert('hi')
    }

}

function setErrorFor(input, message){
    const username = input.parentElement;
    const small = username.querySelector('small');
    small.innerText = message;
    username.className = 'username error'
}

function setSuccessFor(input){
    const username = input.parentElement;
    username.className = 'username success'
}