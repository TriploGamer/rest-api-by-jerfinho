function logar(){

var login = document.getElementById('login').value;
var senha = document.getElementById('senha').value;

    if(login == "Admin" && senha == "1234"){
                location.href = "inicio.html";
    }
    
    if(login == "1234" && senha == "1234"){
                location.href = "inicio.html";
    }
}
