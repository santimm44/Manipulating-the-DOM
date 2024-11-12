let changeHeaderColor = document.getElementById("btn-header__color");
let changeSectionColor = document.getElementById("btn-section__color");
let changeFooterColor = document.getElementById("btn-footer__color");
let changeImageSrc = document.getElementById("btn-image__src");
let changeSectionText = document.getElementById("btn-section__text");
let changeBodyColor = document.getElementById("btn-body__color");
let animationFooterImage = document.getElementById("btn-footer--image__spinner")


let headerColor = document.getElementById("header__color");
let sectionColor = document.getElementById("section__color");
let footerColor = document.getElementById("footer__color");
let imageSrc = document.getElementById("image__src")
let sectionText = document.getElementById("section--paragraph__text")
let bodyColor = document.getElementById("body__color");
let footerImage = document.getElementById("footer--image__spinner");


animationFooterImage.addEventListener("click", function(event){
    footerImage.className= "spinner";
})

changeBodyColor.addEventListener("click", function(){
    bodyColor.className = "body__color";
})

changeSectionText.addEventListener("click", function(){
    sectionText.innerText = "Wow, you did it. I knew you could do it +o+"
})

changeHeaderColor.addEventListener("click", function(event){
    headerColor.className = "header__color";
})

changeSectionColor.addEventListener("click", function(event){
    sectionColor.className = "section__color";
})

changeFooterColor.addEventListener("click", function(event){
    footerColor.className = "footer__color";
})

changeImageSrc.addEventListener("click", function(event){
    imageSrc.src = "./assets/kirby.png";
})