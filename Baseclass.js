class BaseClass {
    constructor(x, y, width, height){
        
    var options = {
        isStatic: true,
        density: 1.3,
        friction: 0.3
    }

    this.body = Bodies.rectangle(x, y, width, height,options);
    this.width = width;
    this.height = height;
    this.image = loadImage("dustbingreen.png");
    World.add(world,this.body);

}

display(){
    
    imageMode(CENTER);
    image(this.image, 0,0,this.width,this.height);
    var pos = this.body.position;
    
    fill("white");
    rect(pos.x,pos.y,this.width,this.height);
}
}