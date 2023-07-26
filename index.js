function acceuil(){
    document.getElementById("hero").style.display='flex';
    document.getElementById("hero-profil").style.display='none';
    document.getElementById("hero-compétences").style.display='none';
    document.getElementById("hero-projets").style.display='none';
    document.getElementById("hero-contact").style.display='none';
    
}
function profil(){
    document.getElementById("hero").style.display='none';
    document.getElementById("hero-profil").style.display='flex';
    document.getElementById("hero-compétences").style.display='none';
    document.getElementById("hero-projets").style.display='none';
    document.getElementById("hero-contact").style.display='none';
    
}
function compétences(){
    document.getElementById("hero").style.display='none';
    document.getElementById("hero-profil").style.display='none';
    document.getElementById("hero-compétences").style.display='flex';
    document.getElementById("hero-projets").style.display='none';
    document.getElementById("hero-contact").style.display='none';
    
}
function projets(){
    document.getElementById("hero").style.display='none';
    document.getElementById("hero-profil").style.display='none';
    document.getElementById("hero-compétences").style.display='none';
    document.getElementById("hero-projets").style.display='flex';
    document.getElementById("hero-contact").style.display='none';
    
}
function contact(){
    document.getElementById("hero").style.display='none';
    document.getElementById("hero-profil").style.display='none';
    document.getElementById("hero-compétences").style.display='none';
    document.getElementById("hero-projets").style.display='none';
    document.getElementById("hero-contact").style.display='flex';  
}
function graphique(){
    document.getElementById("boutton").style.display='none';
    document.getElementById("graphique").style.display='flex';
}

const slide = ["/img/onepiece-rpg.jpg", "/img/site-naruto.png", "/img/site-dbz.png"];
let numero = 0;

function ChangeSlide(sens) {
    numero = numero + sens;
    if (numero < 0)
        numero = slide.length - 1;
    if (numero > slide.length - 1)
        numero = 0;
    document.getElementById("slide").src = slide[numero];
}
function cv(){
    document.getElementById("CV").style.display="none";
}
