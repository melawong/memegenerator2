"use strict"

const linkInput = document.querySelector('#link');
const topInput = document.querySelector("#top_text");
const bottomInput = document.querySelector("#bottom_text");
const main = document.querySelector("#main");
const form = document.querySelector("#form");

function clearInputs(){
linkInput.value = '';
topInput.value = '';
bottomInput.value = '';}

form.addEventListener("submit", function(e){
    e.preventDefault();

    const wholeMeme = document.createElement("div");
    wholeMeme.setAttribute("class", "meme_container");

    const memePic = document.createElement("div");
    memePic.setAttribute("class", "meme_body");
    memePic.style.backgroundImage = `url("${linkInput.value}")`;

    const memeTop = document.createElement("p");
    memeTop.setAttribute("class", "top_text");
    memeTop.innerText = topInput.value;

    const memeBottom = document.createElement("p");
    memeBottom.setAttribute("class", "bottom_text");
    memeBottom.innerText = bottomInput.value;

    const clear = document.createElement("p");
    clear.setAttribute("class", "close");
    clear.innerHTML = "CLEAR";

    main.prepend(wholeMeme);
    wholeMeme.append(memePic);
    memePic.append(memeTop);
    memePic.append(clear);
    memePic.append(memeBottom);
   
    clearInputs();
});

main.addEventListener("click", function(evt){
    if(evt.target.className === 'close'){
        evt.target.parentElement.remove();
    };
})


