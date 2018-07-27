var kanv = document.querySelector('canvas')

kanv.height = window.innerHeight;
kanv.width = window.innerWidth;

var con = kanv.getContext('2d')
//mouseevents
var mouse = {
    x:undefined,
    y:undefined
}

window.addEventListener('mousemove',
  function(event){
  mouse.x = event.x
  mouse.y = event.y
  console.log(event)
})

function Circle(x , y , rad , velX , velY){
    this.x = x;
    this.y = y;
    this.rad = rad;
    this.velX = velX;
    this.velY = velY;


    this.draw = function(){

        con.beginPath()
        con.arc(this.x , this.y , this.rad,0, Math.PI * 2, false)
        con.strokeStyle ="yellow"
        con.stroke();
        con.fill();
        con.fillStyle = "black"
    }
    this.update = function(){

        if (this.x + this.rad > innerWidth || this.x -this.rad < 0){
            this.velX = -this.velX
        }
        if(this.y + this.rad > innerHeight || this.y -this.rad < 0){
            this.velY = -this.velY
        }
        this.x += this.velX;
        this.y += this.velY;

        //interactivity
        if(mouse.x - this.x < 50 && mouse.x - this.x > -50
           && mouse.y - this.y < 50 && mouse.y - this.y > -50
        ) {
           this.rad+=1
        }else if(this.rad > 10){
           this.rad -=1
        }

        this.draw();

    }

}
//var circle = new Circle(50 , 50 , 40 , 8, 8)
// duplicating circles
var circleArray = []
for(var i =0;i<100;i++){

    var x = Math.random()* innerWidth;
    var y = Math.random()* innerHeight;
    var velX = (Math.random()-0.5)*8;
    var velY = (Math.random()-0.5)*8;
    var rad = 30;
    circleArray.push(new Circle(x,y,rad,velX,velY))

}

var animate = function(){
    requestAnimationFrame(animate)
    con.clearRect(0,0,innerWidth,innerHeight)

    //circle.update()
    for(var i = 0; i<circleArray.length;i++){
        circleArray[i].update()
    }
}

animate();
