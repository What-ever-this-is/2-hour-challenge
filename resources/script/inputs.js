function keyEvent(e){
    keyDown[keyMap[e.code]] = e.type=="keydown";
}
const keyDown = {
    up:false,
    down:false,
    left:false,
    right:false,
}
const keyMap = {
    ArrowUp:"up",
    ArrowDown:"down",
    ArrowLeft:"left",
    ArrowRight:"right",
    KeyW:"up",
    KeyS:"down",
    KeyA:"left",
    KeyD:"right"
}