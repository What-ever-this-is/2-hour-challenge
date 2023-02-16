const sounds = {
    shoot:"./resources/sound/shoot.mp3"
}
function playSound(sound){
    var audio = new Audio(sound);
    audio.play()
    return audio;
}