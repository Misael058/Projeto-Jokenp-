const pc = document.getElementById("pcJogou");
const papel = document.getElementById("papel");
const pedra = document.getElementById("pedra");
const tesoura = document.getElementById("tesoura");

function jogar()  {

    if (papel.checked === false && pedra.checked === false && tesoura.checked === false) {
        alert("Por favor , escolha uma das opções para poder jogar");
        
    } 
    else {
        var sorteio = Math.floor(Math.random() * 3);
        switch (sorteio) {
            case 0:
                pc.src="img/pcpedra.png";
                
                break;

                case 1:
                    pc.src="img/pcpapel.png";
                    break;

                    case 2:
                    pc.src="img/pctesoura.png";
        }


        if ((pedra.checked && sorteio === 0) || (papel.checked  && sorteio == 1) || (tesoura.checked && sorteio == 2)) {
             document.getElementById("resultado").innerHTML="EMPATE";
            
        } else if ((pedra.checked && sorteio === 2) || (papel.checked  && sorteio == 0) || (tesoura.checked && sorteio == 1)) {
            document.getElementById("resultado").innerHTML="JOGADOR VENCEU !";
            
        } 

        else if ((pedra.checked && sorteio === 1) || (papel.checked  && sorteio == 2) || (tesoura.checked && sorteio == 0)) {
            document.getElementById("resultado").innerHTML="PC GANHOU!!";

        }

        

    }
 }

