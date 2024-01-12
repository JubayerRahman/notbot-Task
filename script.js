const loginButton = document.getElementById("loginButton")

const form = document.getElementById("form")

form.addEventListener("submit",(event)=>{
    event.preventDefault()
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value
    if(email && password){
        window.location.href = "https://jubayerrahman.github.io/notbot-Task/success.html"
    }


})