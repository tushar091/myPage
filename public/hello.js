var canvas = document.getElementById('mycanvas'),
context = canvas.getContext('2d');
w = 500;h = 500;
canvas.width = w;
canvas.height = h;
var radius = 25;
var startAngle = 0;
var endAngle = 2 * Math.PI;
var counterClockwise = false;
var ballRed = {},ballGreen = {}
gravity = 0.2,
bounceFactor = 0.6;
greenBounce = 0.7;
ballRed = {
x:w/2,
y:0,
    
radius: 25,
color: 	'#FF0000',
    
    // Velocity components
vx: 0,
vy: 1,
draw: function() {
    // Here, we'll first begin drawing the path and then use the arc() function to draw the circle. The arc function accepts 6 parameters, x position, y position, radius, start angle, end angle and a boolean for anti-clockwise direction.
    context.beginPath();
    context.arc(this.x, this.y, this.radius, 0, Math.PI*2, false);
    context.fillStyle = this.color;
    context.fill();
    context.closePath();
}
};

ballGreen = {
x:w/3,
y:0,
    
radius: 15,
color: 	'green',
    
    // Velocity components
vx: 0,
vy: 1,
draw: function() {
    // Here, we'll first begin drawing the path and then use the arc() function to draw the circle. The arc function accepts 6 parameters, x position, y position, radius, start angle, end angle and a boolean for anti-clockwise direction.
    context.beginPath();
    context.arc(this.x, this.y, this.radius, 0, Math.PI*2, false);
    context.fillStyle = this.color;
    context.fill();
    context.closePath();
}
};


function clearCanvas() {
    context.clearRect(0, 0, w, h);
}

function refresh(){
    clearCanvas();
    ballRed.draw();
    ballGreen.draw();
    
    ballRed.y += ballRed.vy;
     ballGreen.y += ballGreen.vy;
    // Ohh! The ball is moving!
    // Lets add some acceleration
    ballRed.vy += gravity;
    ballGreen.vy += gravity;
    //Perfect! Now, lets make it rebound when it touches the floor
    if(ballRed.y + ballRed.radius > h) {
        // First, reposition the ball on top of the floor and then bounce it!
        ballRed.y = h - ballRed.radius;
        ballRed.vy *= -bounceFactor;
        // The bounceFactor variable that we created decides the elasticity or how elastic the collision will be. If it's 1, then the collision will be perfectly elastic. If 0, then it will be inelastic.
    }
    if(ballGreen.y + ballGreen.radius > h) {
        // First, reposition the ball on top of the floor and then bounce it!
        ballGreen.y = h - ballGreen.radius;
        ballGreen.vy *= -greenBounce;
        // The bounceFactor variable that we created decides the elasticity or how elastic the collision will be. If it's 1, then the collision will be perfectly elastic. If 0, then it will be inelastic.
    }
}
setTimeout(function(){
           var element = document.getElementById("mainBody");
           element.classList.add("loaded");
           }, 3000);
setInterval(refresh, 1000/60);
