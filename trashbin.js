class TrashBin extends BaseClass {

    constructor(x, y, width, height){
        super(x,y,width,height);

        this.image = loadImage("dustbingreen.png") 
    }

    display(){
        super.display();
        image(this.image, 600,230,200,110);
    }

}