var selecteur = document.querySelector('#listeCouleurs');
var header = document.querySelector('header');
var container = document.querySelector('.container');
var footer = document.querySelector('footer');
var cartes = document.querySelectorAll('.carte')
selecteur.addEventListener('change', function () {
    console.log('selectedIndex => '+this.selectedIndex);
    if(this.selectedIndex == 0){
        header.style.backgroundColor = "lightGray";
        header.style.color = "black";
        footer.style.backgroundColor = "lightGray";
        footer.style.color = "black";
        container.style.backgroundColor = "white";
        container.style.color = "black";
        cartes.forEach(carte => {
            carte.style.backgroundColor = "white";
        });
    }else if(this.selectedIndex == 1){
        header.style.backgroundColor = "black";
        header.style.color = "white";
        footer.style.backgroundColor = "black";
        footer.style.color = "white";
        container.style.backgroundColor = "#131314";
        container.style.color = "white";
        cartes.forEach(carte => {
            carte.style.backgroundColor = "black";
        });
    }else if(this.selectedIndex == 2){
        header.style.backgroundColor = "#141438";
        header.style.color = "white";
        footer.style.backgroundColor = "#141438";
        footer.style.color = "white";
        container.style.backgroundColor = "#010120";
        container.style.color = "#white";
        cartes.forEach(carte => {
            carte.style.backgroundColor = "#141438";
        });
    }else if(this.selectedIndex == 3){
        header.style.backgroundColor = "beige";
        header.style.color = "black";
        footer.style.backgroundColor = "beige";
        footer.style.color = "black";
        container.style.backgroundColor = "#d6d6a0";
        container.style.color = "black";
        cartes.forEach(carte => {
            carte.style.backgroundColor = "beige";
        });
    }
})
