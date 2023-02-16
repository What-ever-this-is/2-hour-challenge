const game = {
    state:"start",
    ready:false
}
const timers = {}
function gameloop(){
    try{
        ctx.clearRect(0,0,900,600)
        switch(game.state){
            case "start":
                ctx.fillStyle="black";
                ctx.fillRect(0,0,900,600);
                ctx.strokeStyle="white";
                ctx.lineWidth="2px";
                ctx.strokeRect(300,295,300,30);
                ctx.fillStyle="white";
                ctx.font="20px sans-serif";
                ctx.fillText("START",450-ctx.measureText("START").width/2,318);
                break;
        }
        requestAnimationFrame(gameloop)
    }catch(e){
        var proceed = confirm("Oh shoot! An error has occurred!\nWe have stopped the game to prevent problems.\nIf you are the developer, press OK to view error information.")
        if(proceed){
            alert(e.stack);
        }
        console.error(e.stack);
    }
}