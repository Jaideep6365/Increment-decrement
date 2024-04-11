const plus=document.querySelector("#plus");
const minus=document.querySelector("#minus");
const text=document.querySelector("#text");

function increment(){
    let value= parseInt(text.innerText);
    value= value+1;
    text.innerText=value;
}

function decrement(){
    let value= parseInt(text.innerText);
    value= value-1;
    text.innerText=value;
}

plus.addEventListener("click", increment);
minus.addEventListener("click",decrement);
