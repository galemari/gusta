var like = 9;
var like2= 12;
var like3 = 9;
var like4= 3;
var likeElement = document.querySelector('#like');
var gustaElement = document.querySelector('#gusta');
var gusta2Element = document.querySelector('#gusta2');
var gusta3Element = document.querySelector('#gusta3');

function click_editar(){
    like++
    likeElement.innerText = like + " like(s)"
    console.log(like);
}
function click_editar2(){
    like2++
    gustaElement.innerText = like2 + " like(s)"
    console.log(like2);
}
function click_editar3(){
    like3++
    gusta2Element.innerText = like3 + " like(s)"
    console.log(like3);
}
function click_editar4(){
    like4++
    gusta3Element.innerText = like4 + " like(s)"
    console.log(like4);
}
/*
var like = 9;
var likeElement = document.querySelector('#like');

function click_editar(){
    like++
    likeElement.innerText = like + " like(s)"
    console.log(like);
} */