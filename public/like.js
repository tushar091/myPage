var x, y;

var can = document.getElementById("hobbies_canvas"),
    cont = can.getContext('2d');

var width = $(window).width();
can.width = $(window).width();
can.height = width / 2;

function draw(start, w, hobby) {
    cont.fillStyle = "#FF0000";
    cont.fillRect(0, start, w, 30);
    cont.font = "20px Comic Sans MS";
    cont.fillText(hobby, w + 20, start + 20);
};

function drawAll() {
    var start = 0;
    var hobbies = ["Football", "Coding competitions", "Travel", "Cook"];
    for (var i = 1; i < 5; i++) {
        draw(start, width / (2 * i), hobbies[i - 1]);
        start = start + 60;
    }
}

drawAll();