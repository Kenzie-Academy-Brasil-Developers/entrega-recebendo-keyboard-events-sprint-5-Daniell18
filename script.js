let boxTop = 200;
let boxLeft = 200;


document.addEventListener('keydown', (event) => {
  const keyName = event.key;
if(keyName==="ArrowUp"){
    boxTop-=10;
    document.getElementById("box").style.top = boxTop + "px";
}
if(keyName==="ArrowDown"){
    boxTop+=10;
    document.getElementById("box").style.top = boxTop + "px";
}if(keyName==="ArrowRight"){
    boxLeft+=10;
    document.getElementById("box").style.left = boxLeft + "px";
}
if(keyName==="ArrowLeft"){
    boxLeft-=10;
    document.getElementById("box").style.left = boxLeft + "px";
}

});