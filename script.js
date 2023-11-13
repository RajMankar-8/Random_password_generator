
const passwordBox = document.getElementById("password");
const alertMessage = document.getElementById("alert");
const length = 12;

const upparCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const specialSymbol = "!@#$%^&*()_+-={}[]|:;'<>,.?/";

const allChars = upparCase + lowerCase + number + specialSymbol;

function createPassword(){
    let password = "";
    password += upparCase[Math.floor(Math.random() * upparCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += specialSymbol[Math.floor(Math.random() * specialSymbol.length)];

    while(length > password.length){
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }

    passwordBox.value = password;    
}

function copyPassword(){
    passwordBox.select();
    document.execCommand("copy");
    alertMessage.style.display = "block"; 
    setTimeout(()=> {
     alertMessage.style.display = "none";
    }, 2000);
}