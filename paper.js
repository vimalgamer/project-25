class Paper {

    constructor(x, y,radius){

        var options = {
            isStatic: false,
            density: 1.3,
            friction: 0.3
        }
    
        this.body = Bodies.circle(x, y, radius,options);
        this.radius = radius;
        this.image = loadImage("paperimage.png");
        World.add(world,this.body);
    }

    display(){

        var pos = this.body.position;
        
        image(this.image, pos.x, pos.y, 80, 46);
        
    }
}