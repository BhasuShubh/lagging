class Block{
    constructor(x, y, width, height) {
        var options = {
           
            restitution :0.4,
            friction :0.00025,
            //'density' : 0.005,
            //isStatic:true
           
        }
        this.image = loadImage("images/00000.webp");
        //this.image = loadImage("C:\Users\shubh\Halo\TS2\images\digital-art-solid-color-wallpaper-preview.jpg");
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);

        this.Visiblity=255;
      }
      display(){
        //var angle = this.body.angle;
        //var pos= this.body.position;
        if((this.body.speed)<2.5){
          imageMode(CENTER);
        image(this.image,this.body.position.x, this.body.position.y,this.width, this.height);
        }
        else {
          push();
        this.Visiblity=this.Visiblity-15;
        tint(255,this.Visiblity)
        image(this.image,this.body.position.x,this.body.position.y,30,40)
        World.remove(world,this.body) 
        pop();

        }
        
       /* push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width, this.height);
        pop();*/
      }
}