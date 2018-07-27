
var kanv = document.querySelector('canvas')

kanv.width = window.innerWidth;
kanv.height = window.innerHeight;

var con = kanv.getContext('2d')

var x = Math.random() * innerWidth;
var y = Math.random() * innerHeight;
var velX = (Math.random() - 0.5) * 8;
var velY = (Math.random() - 0.5) * 8;
var rad = 30;
function animate(){
    requestAnimationFrame(animate);
    con.clearRect(0,0,innerWidth,innerHeight);

    con.beginPath();
    con.arc(x,y,rad,0,7);
    con.strokeStyle = "blue"; 
    con.stroke();
    con.fill()
    
    if(x + rad > innerWidth || x - rad < 0){
        velX = -velX
    }
    if(y + rad > innerHeight || y - rad < 0){
        velY = -velY
    }


    x += velX;
    y += velY;

};

animate();