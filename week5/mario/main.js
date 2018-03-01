
var running = document.querySelector('#running');
var standing = document.querySelector('#mario');
var jumping = document.querySelector('#jumping');

var slide = 0;
var interval;

function ground() {
    document.body.style.backgroundPosition = slide + 'px bottom';
    slide += -15;
}


function run() {
    standing.style.display = 'none';
    running.style.display = 'block';
    if (interval == undefined) {
        interval = setInterval(ground, 100);
    }
}

function stop() {
    running.style.display = 'none';
    standing.style.display = 'block';
    interval = clearInterval(interval);
}


function goUp() {
    
    jumping.style.bottom = altitude + 'px';
    altitude += 10;
    if (altitude == 233) {
        clearInterval(up);
        down = setInterval(goDown, 50);
    }
}

function goDown() {
    altitude += -10;
    jumping.style.bottom = altitude + 'px';
    if (altitude == 83) {
        clearInterval(down);
        document.body.addEventListener('keydown', checkCode);
        jumping.style.display = 'none';
        standing.style.display = 'block';
        running.style.display = 'none';
    }
    
}

var altitude = 83;
var up;
var down;

function jump() {
    if (altitude == 83) {
        document.body.removeEventListener('keydown', checkCode);
        jumping.style.display = 'block';
        running.style.display = 'none';
        standing.style.display = 'none';
        
        up = setInterval(goUp, 50);
    }
}

function checkCode() {
    if (event.keyCode == 32) {
        jump();
    }
}




document.body.addEventListener('keydown', function (event) {
    if (event.keyCode == 39) {
        run();
    }
});

document.body.addEventListener('keyup', function (event) {
    if (event.keyCode == 39) {
        stop();
    }
});

document.body.addEventListener('keydown', checkCode);




