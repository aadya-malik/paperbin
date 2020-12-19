class Dusbin{


    constructor(x,y,width,height){
        var options={
            isStatic:true,
            friction:0.5,
        }
        this.width = width
        this.height = height
        this.x = x
        this.y = y
        //this.image = loadImage("dustbingreen.png");
        this.body = Bodies.rectangle(x,y,width,height,options);
    

        World.add(world,this.body);


    }
    display(){
        var posss = this.body.position
        push()
translate(posss.x,posss.y);
rectMode(CENTER)
fill("green")

      rect(0,0,this.width,this.height);
      pop()


    }
}