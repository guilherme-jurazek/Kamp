var CarregarFoto = function (event) {
    var image = document.getElementById("foto");
    image.src = URL.createObjectURL(event.target.files[0]);
  };
  

  var jogos = ["Valorant","League of Legends","Among Us","CS-GO","Rocket League", "GTA San Andreas", "Rainbow Six", "Roblox", "Krunker", "Minecraft"];
  jogos.sort();
  function loadGamesOps()
  {
     var oplist = document.getElementById("games");
     let line;
     for(let i=0;i<jogos.length;i++)
     {
        line = document.createElement('option');
        line.innerHTML= `${jogos[i]}`;
        line.setAttribute('value',jogos[i]);
        oplist.appendChild(line);
     }
     
  }

loadGamesOps();

var fav_jogos = ["League of Legends","Valorant","Rocket League"];
function loadGameTable()
{
    let tabela = document.getElementById("tabela");
    let linhas="";
    if(fav_jogos[0]!=null)
    {
        for(let i=0;i<fav_jogos.length;i++)
        {
            linhas += `<tr>
                         <td><input type="checkbox" value="${fav_jogos[i]}"></td>
                            <td>${fav_jogos[i]}</td>
                            <td><a class="removejogo" onclick="excluir('${fav_jogos[i]}')" >&#9746;</a></td></tr>
                            `
            tabela.innerHTML = linhas;
        }
    }
    else
    {
        tabela.innerHTML= linhas;
    }
    
}


loadGameTable();
function excluir(elem)
{
    if(confirm("Remover o jogo "+elem+" dos favoritos?"))
    {
        fav_jogos.splice(fav_jogos.indexOf(elem),1);
        loadGameTable();
    }
}

function adicionarJogo()
{
    var e = document.getElementById("games");
    var jogo = e.options[e.selectedIndex].text;
    if(!fav_jogos.includes(jogo))
    {
        fav_jogos.push(jogo);
        loadGameTable();
    }
    else
    {
        alert('Jogo já adicionado!!');
    }
}
function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

function validarDados()
{
    let correto = true;
    var nome = document.getElementById("user_name");
    if(nome.value.length<5)
    {
        nome.value="";
        nome.setAttribute('placeholder','Nome pequeno demais, no minimo 5 caracteres!!');
        nome.focus();
        correto = false;
    }
    var email = document.querySelector("#user_email");
    let format = new RegExp(/^(\w+[\-\.])*\w+@(\w+\.)+[A-Za-z]+$/); 
    if(!format.test(email.value))
    {
        email.value="";
        email.setAttribute('placeholder','Email invalido! Preencha Novamente');
        if(correto==true)
            email.focus();
        correto = false;
    }
    var idade = document.getElementById("user_age");
    if(!isNumber(idade.value))
    {
        idade.value="";
        idade.setAttribute('placeholder','Idade Invalida!!');
        if(correto==true)
            idade.focus();
        correto = false;
    }
    if(fav_jogos[0] == null)
    {
        alert("Deve haver ao menos 1 jogo favorito adicionado para salvar!!")
        correto = false;
    }
    if(correto)
        window.location.href = "perfilVisaoUsuario.html";

}


function excluirSelecionados()
{
    if(fav_jogos.length>0)
    {
        var sel = document.querySelectorAll("#tabela input[type='checkbox']:checked");
        for(let i=0;i<sel.length;i++)
            fav_jogos.splice(fav_jogos.indexOf(sel[i].getAttribute('value')),1);

        loadGameTable();
        
       
    }
}