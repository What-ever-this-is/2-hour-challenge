const game = {
    state:"start"
}
function gameloop(){
    try{
        ctx.clearRect(0,0,900,600)
        
        requestAnimationFrame(gameloop)
    }catch(e){
        var proceed = confirm("Oh shoot! An error has occurred!\nWe have stopped the game to prevent problems.\nIf you are the developer, press OK to view error information.")
        if(proceed){
            alert(e.stack);
        }
        console.error(e.stack);
    }
}