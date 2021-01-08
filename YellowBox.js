class YellowBox extends Box{
    constructor(x,y){
        super(x,y,20,30);
    }

    display(){
       // this.setCollider(10,10)

       if(this.body.speed < 3){
        fill("yellow");
        super.display(); 
      }
      else{
        World.remove(world, this.body);
        push();
        this.Visiblity = this.Visiblity - 5;
        tint(255,this.Visiblity);
        rect(this.x,this.y, 20, 30);
        pop();
      }
    }
}