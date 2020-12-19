class Ground{


    constructor(x,y,width,height){
        var option={
isStatic:true,
restitution:0.3,
friction:0.5,
density:1.2,

        }
        this.x=x
        this.y=y
        this.width=width
        this.height=height
    
   
     
        this.body = Bodies.rectangle(this.x, this.y ,this.width,this.height,option);
        World.add(world, this.body);
    }
    display(){
        var poss = this.body.position
        push()
translate(poss.x,poss.y);
rectMode(CENTER)
fill("white")

      rect(0,0,this.width,this.height);
      pop()
    }
}