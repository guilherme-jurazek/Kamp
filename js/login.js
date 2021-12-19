var btnSignin = document.querySelector("#signin");
var btnSignup = document.querySelector("#signup");

var body = document.querySelector("body");


var DadosReg = [
    {player_name:"", name_user:"", cpf_user:"", email_user:"", psw_user:""}
];


function adicionaDados(){
    event.preventDefault();
    let splayer_name = document.querySelector('#senha').value;
    let sname_user = document.querySelector("#email").value;
    let scpf_user = document.querySelector("#nomeP").value;
    let semail_user = document.querySelector("#nomeC").value;
    let spsw_user = document.querySelector("#senha1").value;
    

    let dados = {player_name:splayer_name,
                name_user:sname_user, 
                cpf_user:scpf_user, 
                email_user:semail_user,
                psw_user:spsw_user};
    DadosReg.push(dados);

}


btnSignin.addEventListener("click", function () {
   body.className = "sign-in-js"; 
});

btnSignup.addEventListener("click", function () {
    body.className = "sign-up-js";
})

$("#cpf").keypress(function() {
    $(this).mask('000.000.000-00');
});

function enviardados() 
{
    var senha = document.querySelector("#senha");
    var email = document.querySelector("#email"); 
    var nomeP = document.querySelector("#nomeP");
    var nomeC = document.querySelector("#nomeC");  
    var senha1 = document.querySelector("#senha1"); 
    var correto = true;
    if(senha.value.length < 5) //validador de senha
    {  senha.value = "";
        senha.setAttribute('placeholder','Senha inválida!');
        senha.style.border = "solid 1px red";
        auxPonteiro=1;
        correto = false;
    }
    else 
    {
        senha.style.border = "none";
    }
    if(senha1.value.length < 5) //validador de senha
    {  senha1.value = "";
        senha1.setAttribute('placeholder','Senha inválida!');
        senha1.style.border = "solid 1px red";
        auxPonteiro=1;
        correto = false;
    }
    else 
    {
        senha1.style.border = "none";
    }
    if(nomeP.value.length < 7)  //validador de nome de jogador
    {  nomeP.value = "";
        nomeP.setAttribute('placeholder','Nick invalido!');
        nomeP.style.border = "solid 1px red";
        auxPonteiro=1;
        correto = false;
    }
    else 
    {
        nomeP.style.border = "none";
    }
    if(nomeC.value.length < 10) //validador de nome completo
    {  nomeC.value = "";
        nomeC.setAttribute('placeholder','Nome invalido!');
        nomeC.style.border = "solid 1px red";
        auxPonteiro=1;
        correto = false;
    }
    else 
    {
        nomeC.style.border = "none";
    }
    
    //adicionaDados();
}

function validacaoEmail(field) // validar email
{
    usuario = field.value.substring(0, field.value.indexOf("@"));
    dominio = field.value.substring(field.value.indexOf("@")+ 1, field.value.length);
    
    if ((usuario.length >=1) &&
        (dominio.length >=3) &&
        (usuario.search("@")==-1) &&
        (dominio.search("@")==-1) &&
        (usuario.search(" ")==-1) &&
        (dominio.search(" ")==-1) &&
        (dominio.search(".")!=-1) &&
        (dominio.indexOf(".") >=1)&&
        (dominio.lastIndexOf(".") < dominio.length - 1)) 
    {
        field.style.border = "none";
    }
    else
    {
        field.style.border = "solid 1px red";
        
    }
}

function isValidCPF() 
{
    let cpf = document.getElementById("cpf").value;
    let cpfStyle = document.querySelector("#cpf"); 
    cpfStyle.style.border = "solid 1px red";
    if (typeof cpf !== "string") 
    {
        cpfStyle.style.border = "solid 1px red";
        cpfStyle.value = "";
        return false
    }
    cpf = cpf.replace(/[\s.-]*/igm, '')
    if (
        !cpf ||
        cpf.length != 11 ||
        cpf == "00000000000" ||
        cpf == "11111111111" ||
        cpf == "22222222222" ||
        cpf == "33333333333" ||
        cpf == "44444444444" ||
        cpf == "55555555555" ||
        cpf == "66666666666" ||
        cpf == "77777777777" ||
        cpf == "88888888888" ||
        cpf == "99999999999" 
    )  
        {
            cpfStyle.style.border = "solid 1px red";
            cpfStyle.value = "";
            return false
        }
    var soma = 0
    var resto
    for (var i = 1; i <= 9; i++) 
        soma = soma + parseInt(cpf.substring(i-1, i)) * (11 - i)
    resto = (soma * 10) % 11
    if ((resto == 10) || (resto == 11))  resto = 0
        if (resto != parseInt(cpf.substring(9, 10)) ) 
        {
            cpfStyle.style.border = "solid 1px red";
            cpfStyle.value = "";
            return false
        }
    soma = 0
    for (var i = 1; i <= 10; i++) 
        soma = soma + parseInt(cpf.substring(i-1, i)) * (12 - i)
    resto = (soma * 10) % 11
    if ((resto == 10) || (resto == 11))  resto = 0
        if (resto != parseInt(cpf.substring(10, 11) ) ) 
        {
            cpfStyle.style.border = "solid 1px red";
            cpfStyle.value = "";
            return false
        }
    cpfStyle.style.border = "none";
    return true
}

