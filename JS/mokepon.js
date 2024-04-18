let ataqueJugador
let ataqueEnemigo
let azarEnemigo
let spanelementoJugador
let mascotaJugador =""
let mascotaEnemigo =""
let resultadoCombate
let vidaJugador = 3
let vidaEnemigo = 3
let vidaJ
let vidaE

//alert("Da Click en Aceptar para Comenzar")
function iniciarJuego() {
    let sectionAtaques = document.getElementById("elige-ataque")
sectionAtaques.style.display = "none"
    let sectionReiniciar = document.getElementById("reiniciar")
sectionReiniciar.style.display = "none"
    let botonMascotaJugador = document.getElementById('boton-mascota')
botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)
    let botonMascotaEnemigo = document.getElementById('boton-enemigo')
botonMascotaEnemigo.addEventListener('click', seleccionarMascotaEnemigo);
botonMascotaEnemigo.style.display ="none"
    let botonFuego = document.getElementById('boton-fuego')
botonFuego.addEventListener('click', ataqueFuego); botonFuego.disabled = true
    let botonAgua = document.getElementById('boton-agua')
botonAgua.addEventListener('click', ataqueAgua); botonAgua.disabled = true
    let botonTierra = document.getElementById('boton-tierra')
botonTierra.addEventListener('click', ataqueTierra); botonTierra.disabled = true
    let botonReiniciar = document.getElementById('reiniciar')
botonReiniciar.addEventListener('click', reiniciarJuego);
}
function seleccionarMascotaJugador() {
    let botonMascotaJugador = document.getElementById('boton-mascota')
    spanmascotaJugador = document.getElementById("mascota-jugador")
    let inputAguamon = document.getElementById("aguamon")
    let inputTierramon = document.getElementById("tierramon")
    let inputFuegomon = document.getElementById("fuegomon")
    let inputVapormon = document.getElementById("vapormon")
    let inputLodomon = document.getElementById("lodomon")
    let inputLavamon = document.getElementById("lavamon")
    let sectionAtaques = document.getElementById("elige-ataque")
    let botonMascotaEnemigo = document.getElementById('boton-enemigo')
    if(inputAguamon.checked){
       alert( "Elegiste a: "+"Aguamon"); spanmascotaJugador.innerHTML = '<img src="./mascotas/aguamon.png" alt=""><p>"Aguamon"</p>';
       mascotaJugador = '"Aguamon"';
    }else if(inputTierramon.checked){
        alert( "Elegiste a: "+"Tierramon"); spanmascotaJugador.innerHTML = '<img src="./mascotas/tierramon.png" alt=""><p>"Tierramon"</p>';
        mascotaJugador = '"Tierramon"'; 
    }else if(inputFuegomon.checked){
        alert( "Elegiste a: "+"Fuegomon"); spanmascotaJugador.innerHTML = '<img src="./mascotas/fuegomon.png" alt=""><p>"Fuegomon"</p>'; 
        mascotaJugador = '"Fuegomon"';
    }else if(inputVapormon.checked){
        alert( "Elegiste a: "+"Vapormon"); spanmascotaJugador.innerHTML = '<img src="./mascotas/vapormon.png" alt=""><p>"Vapormon"</p>';
        mascotaJugador = '"Vapormon"'; 
    }else if(inputLodomon.checked){
        alert( "Elegiste a: "+ "Lodomon"); spanmascotaJugador.innerHTML = '<img src="./mascotas/lodomon.png" alt=""><p>"Lodomon"</p>';
        mascotaJugador = '"Lodomon"'; 
    }else if(inputLavamon.checked){
        alert( "Elegiste a: "+"Lavamon"); spanmascotaJugador.innerHTML = '<img src="./mascotas/lavamon.png" alt=""><p>"Lavamon"</p>';
        mascotaJugador = '"Lavamon"'; 
    }else{    
    alert('No Seleccionaste tu Mascota') 
    }; 
    if(spanmascotaJugador.innerHTML != "-"){botonMascotaJugador.disabled = true; botonMascotaEnemigo.style.display =""}
    
}
function seleccionarMascotaEnemigo() {
    let spanmascotaEnemigo = document.getElementById("mascota-enemigo")
    let botonMascotaEnemigo = document.getElementById('boton-enemigo')
    let mascotaAleatoria = alazar(1,6)
    let botonAgua = document.getElementById('boton-agua')
    let botonFuego = document.getElementById('boton-fuego')
    let botonTierra = document.getElementById('boton-tierra')
    //let sectionEnemigo = document.getElementById("mascota-nene")
    let sectionElegir = document.getElementById("elige-mascota")
    let sectionAtaques = document.getElementById("elige-ataque")
    if(mascotaAleatoria==1){
       alert( "Enemigo Elige a: "+"Aguamon"); spanmascotaEnemigo.innerHTML = '<img src="./mascotas/aguamon.png" alt=""><p>"Aguamon"</p>';
       mascotaEnemigo =  '"Aguamon"';
    }else if(mascotaAleatoria==2){
        alert( "Enemigo Elige a: "+"Tierramon"); spanmascotaEnemigo.innerHTML = '<img src="./mascotas/tierramon.png" alt=""><p>"Tierramon"</p>';
        mascotaEnemigo =  '"Tierramon"'; 
    }else if(mascotaAleatoria==3){
        alert( "Enemigo Elige a: "+"Fuegomon"); spanmascotaEnemigo.innerHTML = '<img src="./mascotas/fuegomon.png" alt=""><p>"Fuegomon"</p>';
        mascotaEnemigo =  '"Fuegomon"'; 
    }else if(mascotaAleatoria==4){
        alert( "Enemigo Elige a: "+"Vapormon"); spanmascotaEnemigo.innerHTML = '<img src="./mascotas/vapormon.png" alt=""><p>"Vapormon"</p>';
        mascotaEnemigo =  '"Vapormon"'; 
    }else if(mascotaAleatoria==5){
        alert( "Enemigo Elige a: "+ "Lodomon"); spanmascotaEnemigo.innerHTML = '<img src="./mascotas/lodomon.png" alt=""><p>"Lodomon"</p>';
        mascotaEnemigo =  '"Lodomon"'; 
    }else{
        alert( "Enemigo Elige a: "+"Lavamon"); spanmascotaEnemigo.innerHTML = '<img src="./mascotas/lavamon.png" alt=""><p>"Lavamon"</p>';
        mascotaEnemigo =  '"Lavamon"'; 
    }; botonMascotaEnemigo.disabled = true;
    botonFuego.disabled = false; botonAgua.disabled = false; botonTierra.disabled = false; //sectionEnemigo.style.display = "";
    sectionAtaques.style.display = ""; sectionElegir.style.display = "none"
}
function alazar (min,max){
    return Math.floor(Math.random()*(max-min+1)+min)
}
function ataqueAgua() {
    ataqueJugador = "AGUA";
    ataquedeEnemigo()
}
function ataqueFuego() {
    ataqueJugador = "FUEGO"
    ataquedeEnemigo()
}
function ataqueTierra() {
    ataqueJugador = "TIERRA"
    ataquedeEnemigo()
}
function ataquedeEnemigo() {
    let azarEnemigo = alazar(1,3)
    if(azarEnemigo==1){
        ataqueEnemigo = "AGUA"
    }else if(azarEnemigo==2){
        ataqueEnemigo = "FUEGO"
    }else{
        ataqueEnemigo = "TIERRA"
    };  combate();

}

function crearMensaje() {
    let parrafo = document.createElement("p")
    let sectionMensajes = document.getElementById("mensajes")
    let parrafoViejo = document.getElementById("viejo")
    parrafo.innerHTML = "Tu Mascota " + mascotaJugador + " ataco con " + ataqueJugador + ", Mascota Enemiga " + mascotaEnemigo +" ataco con " + ataqueEnemigo + " " + resultadoCombate
    sectionMensajes.insertBefore(parrafo, parrafoViejo);
    parrafoViejo.style.display = "none"
    let batallaJugador = document.getElementById("batalla-jugador")
    batallaJugador.innerHTML = "Ataco con "+ ataqueJugador
    let batallaEnemigo = document.getElementById("batalla-enemigo")
    batallaEnemigo.innerHTML = "Ataco con "+ ataqueEnemigo
    let batallaResultado = document.getElementById("batalla-resultado")
    batallaResultado.innerHTML = resultadoCombate
}

function combate() {
    if(ataqueJugador==ataqueEnemigo){
        resultadoCombate = "Empate";
        
    }else if(ataqueJugador=="FUEGO"&&ataqueEnemigo=="TIERRA"){
        resultadoCombate = "Victoria";
        
    }else if(ataqueJugador=="AGUA"&&ataqueEnemigo=="FUEGO"){
        resultadoCombate = "Victoria";
        
    }else if(ataqueJugador=="TIERRA"&&ataqueEnemigo=="AGUA"){
        resultadoCombate = "Victoria";
        
    }else {resultadoCombate = "Derrota";
    
    } crearMensaje(); contadorVidas(); setTimeout(finalPartida,100)
}

function contadorVidas(){
    let spanVidaJugador = document.getElementById("vida-jugador")
    let spanVidaEnemigo = document.getElementById("vida-enemigo")
    vidaJ = document.getElementById("vidaj")
    vidaE = document.getElementById("vidae")
    if (resultadoCombate == "Victoria"){vidaEnemigo -- ; spanVidaEnemigo.innerHTML = vidaEnemigo
    }else if(resultadoCombate == "Derrota"){vidaJugador --; spanVidaJugador.innerHTML = vidaJugador
    }else {};
    if (vidaEnemigo > 1){vidaE.innerHTML = " vidas"
    }else if(vidaEnemigo < 1){vidaE.innerHTML = " vidas y MURIO"
    }else {vidaE.innerHTML = " vida"};
    if (vidaJugador > 1){vidaJ.innerHTML = " vidas" 
    }else if(vidaJugador < 1){vidaJ.innerHTML = "     vidas y MURIO"
    }else {vidaJ.innerHTML = " vida"};
    
}

function finalPartida(){
    let parrafo = document.createElement("p")
    parrafo.setAttribute("id", "finjuego");
    let sectionMensajes = document.getElementById("elige-ataque")
    let parrafoViejo = document.getElementById("texto-ataque")
    let botonFuego = document.getElementById('boton-fuego')
    let botonAgua = document.getElementById('boton-agua')
    let botonTierra = document.getElementById('boton-tierra')
    let sectionReiniciar = document.getElementById("reiniciar")
    let botonAtaque = document.getElementById('boton-ataque')
    if (vidaEnemigo == 0 || vidaJugador == 0){
        botonFuego.disabled = true;
        botonAgua.disabled = true;
        botonTierra.disabled = true;
        sectionReiniciar.style.display = "";
        sectionMensajes.insertBefore(parrafo, parrafoViejo);
        parrafoViejo.style.display = "none"
        botonAtaque.style.display = "none"    
    }
    if (vidaEnemigo == 0){
        alert("Fin del Juego - GANASTE LA PARTIDA"); parrafo.innerHTML = "Fin del Juego - 👑👑GANASTE LA PARTIDA👑👑 "
    }else if(vidaJugador == 0){
        alert("Fin del Juego - PERDISTE LA PARTIDA");parrafo.innerHTML = "Fin del Juego - ☠️☠️PERDISTE LA PARTIDA☠️☠️"
    }else {} 
    

}

function reiniciarJuego(){
    location.reload();
}

window.addEventListener('load', iniciarJuego)