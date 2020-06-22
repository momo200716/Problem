class Ball{
	constructor(x,y,width,height){
		var options ={
			isStatic:false,
			restitution: 0.3,
			friction:0.5,
			density:1.2
		}
		World.add(world,this.body);
	}
    display(){
	    push();
		translate(pos.x,pos.y);
		rotate(angle);
		ellipseMode(RADIUS);
		fill("pink");
		ellipse(0, 0, this.width, this.height);
		pop();
	  
	}
}