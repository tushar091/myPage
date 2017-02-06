var canvas = document.getElementById('mycanvas'),
context = canvas.getContext('2d');
w = 500;h = 500;
canvas.width = w;
canvas.height = h;
var radius = 45;
var startAngle = 0;
var endAngle = 2 * Math.PI;
offset = 0;
increment = 1;
var angle = 0;
var initialAngle = 30;
var j = 1;

wheel = {
x:250,
y:250,
    
radiusOut:45,
radiusIn:35,
    
    draw : function(){
        context.beginPath();
        context.arc(250, 250, radius, 0, Math.PI*2, false);
        context.fillStyle = 'white';
        context.fill();
        context.closePath();
        
        context.beginPath();
        context.arc(250, 250, 35, 0, Math.PI*2, false);
        context.fillStyle = 'black';
        context.fill();
        context.closePath();
        
        context.beginPath();
        context.arc(250, 250, radius + 5, 0, Math.PI*2, false);
        context.strokeStyle = 'white'
        context.stroke();
        context.closePath();
        
        context.beginPath();
        context.arc(250, 250, radius + 15, 0, Math.PI*2, false);
        context.strokeStyle = 'white'
        context.stroke();
        context.closePath();
        
        for(i = 0;i<12;i++){
            ang = initialAngle * i;
            context.beginPath();
            context.moveTo(this.x,this.y);
            context.lineTo(this.x + Math.cos(Math.PI*(ang + angle)/180)*this.radiusIn,
                           this.y + Math.sin(Math.PI*(ang + angle)/180)*this.radiusIn);
            context.strokeStyle = 'white'
            context.lineWidth = 5;
            context.stroke();
        }
        
    }
}

function clearCanvas() {
    context.clearRect(0, 0, w, h);
}

function refresh(){
    clearCanvas();
    angle = j;
    j++;
    console.log(angle);
    wheel.draw();
}

setTimeout(function(){
           var element = document.getElementById("mainBody");
           element.classList.add("loaded");
           }, 3000);

setInterval(refresh,1000/60);
