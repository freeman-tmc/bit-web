

function run() {
    var mario = document.querySelector('#mario');
    mario.setAttribute('src', 'img/mario_running.gif');
}

function stop() {
    var mario = document.querySelector('#mario');
    mario.setAttribute('src', 'img/mario.png');
}



document.body.addEventListener('keydown', function(event) {
    if(event.keyCode == 39) {
        run();
    }
})

document.body.addEventListener('keyup', function(event) {
    if(event.keyCode == 39) {
        stop();
    }
})


// var a = 0;
// function ground() {
//     document.body.style.backgroundPosition
// }
// var b = setInterval(ground, 50);
