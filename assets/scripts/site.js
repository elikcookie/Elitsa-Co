//-----carousel1
var slidePosition = 0;
let itemClassName = "carousel-item";
const slides = document.getElementsByClassName(itemClassName);
let totalSlides = 3;


function updateSlidePosition() {
    for (let slide of slides) {
        slide.classList.remove('carousel-item-visible');
        slide.classList.add('carousel--item--hidden');
    }

    slides[slidePosition].classList.add('carousel-item-visible');
}

function moveToNextSlide() {
    if (slidePosition === totalSlides - 1) {
        slidePosition = 0;
    }
    else {
        slidePosition++;
    }
    updateSlidePosition();
}

function moveToPreviousSlide() {
    if (slidePosition === 0) {
        slidePosition = totalSlides - 1;
    }
    else {
        slidePosition--;
    }
    updateSlidePosition();
}
//carousel 2
var slidePosition2 = 0;
let itemClassName2 = "carousel-item2";
const slides2 = document.getElementsByClassName(itemClassName2);
let totalSlides2 = 3;


function updateSlidePosition2() {
    for (let slide2 of slides2) {
        slide2.classList.remove('carousel-item-visible2');
        slide2.classList.add('carousel--item--hidden2');
    }

    slides2[slidePosition2].classList.add('carousel-item-visible2');
}

function moveToNextSlide2() {
    if (slidePosition2 === totalSlides2 - 1) {
        slidePosition2 = 0;
    }
    else {
        slidePosition2++;
    }
    updateSlidePosition2();
}

function moveToPreviousSlide2() {
    if (slidePosition2 === 0) {
        slidePosition2 = totalSlides2 - 1;
    }
    else {
        slidePosition2--;
    }
    updateSlidePosition2();
}

//carousel 3 - hamster breeds
var slidePosition3 = 0;
let itemClassName3 = "carousel-item3";
const slides3 = document.getElementsByClassName(itemClassName3);
let totalSlides3 = 5;


function updateSlidePosition3() {
    for (let slide3 of slides3) {
        slide3.classList.remove('carousel-item-visible3');
        slide3.classList.add('carousel--item--hidden3');
    }

    slides3[slidePosition3].classList.add('carousel-item-visible3');
}

function moveToNextSlide3() {
    if (slidePosition3 === totalSlides3 - 1) {
        slidePosition3 = 0;
    }
    else {
        slidePosition3++;
    }
    updateSlidePosition3();
}

function moveToPreviousSlide3() {
    if (slidePosition3 === 0) {
        slidePosition3 = totalSlides3 - 1;
    }
    else {
        slidePosition3--;
    }
    updateSlidePosition3();
}

//hamster breeds - change slide when you click on a picture--------------------------
//img1
function roboHamsterSlide(){
    slidePosition3 = 0;
    updateSlidePosition3();
}
//img2
function syrianHamsterSlide() {
    slidePosition3 = 1;
    updateSlidePosition3();
}
//img3
function WinterWhiteHamsterSlide() {
    slidePosition3 = 2;
    updateSlidePosition3();
}
//img4
function ChineseHamsterSlide() {
    slidePosition3 = 3;
    updateSlidePosition3();
}
//img5
function CambellHamsterSlide() {
    slidePosition3 = 4;
    updateSlidePosition3();
}
//-------hamster care calculator -------
function Calculate() {
    let cage = document.getElementById("userInputCage").value;
    let bedding = document.getElementById("userInputBedding").value;
    let food = document.getElementById("userInputFood").value;
    let water = document.getElementById("userInputWaterBow").value;
    let toys = document.getElementById("userInputToys").value;
    let wheel = document.getElementById("userInputWheel").value;
    let sand = document.getElementById("userInputBathSand").value;
    let vet = document.getElementById("userInputVet").value;

    let total = parseFloat(cage) + parseFloat(bedding) + parseFloat(food) + parseFloat(water) + parseFloat(toys) + parseFloat(wheel) + parseFloat(sand) + parseFloat(vet);

    document.getElementById("total").innerText = "Total: " + total;
}

//------------------contact form----------------------
//Get data
const nameInput = document.querySelector("#name");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const errorNodes = document.querySelectorAll(".error");

//validate data
function validateForm(){

    clearMessages();
    let errorFlag = false;

    if(nameInput.value.length < 1){
        errorNodes[0].innerText = "Please enter your name!";
        nameInput.classList.add("error-border");
        errorFlag = true;
    }
    if(!emailIsValid(email.value)){
        errorNodes[1].innerText = "Invalid Email Address";
        email.classList.add("error-border");
        errorFlag = true;
    }

    if(message.value.length < 1){
        errorNodes[2].innerText = "Please enter a message";
        message.classList.add("error-border");
        errorFlag = true;
    }

    if(!errorFlag){
        alert("Submission Successfull!");
    }
}

//clear error/succes messages
function clearMessages(){
    for(let i = 0; i < errorNodes.length; i++){
        errorNodes[i].innerText = " ";
    }
    nameInput.classList.remove("error-border");
    email.classList.remove("error-border");
    message.classList.remove("error-border");
}

//check if email is valid
function emailIsValid(email){
    let pattern = /\S+@\S+\.\S+/;
    return pattern.test(email);
}
//--------------menu--------------
let menu_click = 0;
var i = 0;
function menutoggle() {
    if (menu_click == 0) {
        document.getElementById("MenuItems").style.display = 'block';
        document.getElementsByClassName("menu-icon").src = "assets/images/close-menu.png";
        menu_click = 1;
    }
    else if (menu_click == 1) {
        document.getElementById("MenuItems").style.display = 'none';
        document.getElementsByClassName("menu-icon").src = "assets/images/menu.png";
        menu_click = 0;
    }
    else {
        document.getElementById("MenuItems").style.display = 'block';
    }
}