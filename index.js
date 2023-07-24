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