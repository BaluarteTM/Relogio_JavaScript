
function load() {

    var msg = window.document.getElementById('mensagem');
    var img = window.document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours()
    var minuto = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}:${minuto} horas.`
    if (hora >= 0 && hora < 12){
        //Bom dia!
        img.src = 'fotomanha.png'
        document.body.style.background = '#e0ac33'

    }else if (hora >= 12 && hora <18) {
        //Boa tarde!
        img.src = 'fototarde.png'
        document.body.style.background = '#bc4a02'

    }else {
        //Boa noite!
        img.src = 'fotonoite.png'
        document.body.style.background = '#032e53'


    }
    setTimeout(function() {
        document.location.reload(true);

    } , 20000)
    
}

