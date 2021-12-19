function enviardados() 
{
    var nome = document.querySelector("#Nome");

    var correto = true;
    if(nome.value.length < 3) //validador de nome
    {  nome.value = "";
        nome.setAttribute('placeholder','Nome inválido! (Min 5 caracteres)');
        nome.style.border = "solid 1px red";
        auxPonteiro=1;
        correto = false;
    }
    else 
    {
        nome.style.border = "none";
    }
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