var x, y;

var can = document.getElementById("hobbies_canvas"),
    cont = can.getContext('2d');

var width = $(window).width();
can.width = $(window).width();

function draw(start, w) {
    cont.fillStyle = "#FF0000";
    cont.fillRect(0, start, w, 20);
};

function drawAll() {
    var start = 0;
    for (var i = 1; i < 5; i++) {
        draw(start, width / (2 * i));
        start = start + 40;
    }
}

drawAll();