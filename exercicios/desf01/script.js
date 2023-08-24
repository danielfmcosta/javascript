function carregar() {  
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 6 && hora < 12) {
        img.style.backgroundImage = "url('imagens/morning.jpg')";
        document.body.style.backgroundColor = "lightblue"
    } else if (hora >= 12 && hora < 20) {
        img.style.backgroundImage = "url('imagens/afternoon.jpg')";
        document.body.style.backgroundColor = "#b9846f"
    } else { 
        img.style.backgroundImage = "url('imagens/night.jpg')";
        document.body.style.backgroundColor = "darkslategrey";
    }
}