var kanv = document.querySelector('canvas')

kanv.width = window.innerWidth
kanv.height = window.innerHeight

var con = kanv.getContext('2d')

function Circle(x,y,rad,velX,velY){
  this.x = x
  this.y = y
  this.rad = rad
  this.velX = velX
  this.velY = velY

  this.draw = function(){
    con.beginPath()
    con.arc(this.x,this.y,this.rad,0,Math.PI*2,false)
    con.fillStyle = "red"
    con.fill()
    con.stroke()
  }
  this.update = function(){
    if(this.x + this.rad > innerWidth || this.x - this.rad < 0){
      this.velX = -this.velX
    }
    if(this.y + this.rad > innerHeight || this.y - this.rad < 0){
      this.velY = -this.velY
    }
    this.x += this.velX
    this.y += this.velY

    this.draw()
  }

}
var circleArray = []
for(var i = 0;i<100;i++){
  var x = Math.random()* innerWidth
  var y = Math.random()* innerHeight
  var rad = 30
  var velX = (Math.random()-0.5)*8
  var velY = (Math.random()-0.5)*8
  circleArray.push(new Circle(x,y,rad,velX,velY))
}
var animate = function(){
  requestAnimationFrame(animate)
  con.clearRect(0,0, innerWidth,innerHeight)

  for(var i = 0;i< circleArray.length;i++){
    circleArray[i].update()
  }
}
animate()
