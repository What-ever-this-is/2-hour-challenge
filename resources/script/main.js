var canvas,ctx;
function main(){
    canvas = document.getElementsByTagName("canvas")[0];
    ctx = canvas.getContext("2d");
    canvas.addEventListener("keydown",keyEvent);
    canvas.addEventListener("keyup",keyEvent);
    requestAnimationFrame(gameloop);
    canvas.onclick = function(){
        playSound(sounds.shoot)
    }
}
window.onload = main;