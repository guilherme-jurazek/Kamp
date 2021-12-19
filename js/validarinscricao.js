function validarDadosCT() {
    var email = document.querySelector("#t_email");
    var nomeT = document.querySelector("#t_nome"); 
    var desc = document.querySelector("#desc"); 
    let format = new RegExp(/^(\w+[\-\.])*\w+@(\w+\.)+[A-Za-z]+$/); 
    var correto=true;
    
    if(nomeT.value.length < 5) //validador de nome de time
    {  nomeT.value = "";
        nomeT.setAttribute('placeholder','Nome invalido!');
        nomeT.style.border = "solid 1px red";
        //auxPonteiro=1;
        correto = false;
        nomeT.focus();
    }
    else 
    {
        nomeT.style.border = "none";
    }
    if(!format.test(email.value))
    {
        email.value="";
        email.setAttribute('placeholder','Email invalido! Preencha Novamente');
        email.style.border = "solid 1px red";
        if(correto)
            email.focus();
        correto = false;
    }
    else
    {
        email.style.border = "none";
    }
    if(desc.value.length < 5) //validador de descrição obrigatoria
    {  desc.value = "";
        desc.setAttribute('placeholder','Tamanho minímo de 5 caracteres!');
        desc.style.border = "solid 1px red";
        //auxPonteiro=1;
        if(correto)
            desc.focus();
        correto = false;
    }
    else 
    {
        desc.style.border = "none";
    }   
    if(correto)
    {
        confirm("Solicitação de inscrição enviada com sucesso, verifique no seu e-mail a confirmação de cadastro.");
        window.location.href = "PagEventos.html"; 
    }
        
  }


  function limpar()
  {
      var nome = document.getElementById("t_nome");
      var email = document.getElementById("t_email");
      nome.value = "";
      email.value="";
      
  }


