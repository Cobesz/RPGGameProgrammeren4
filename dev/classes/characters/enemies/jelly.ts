class Jelly extends Enemy {
    constructor(h) {
        super();

        this.hero = h;

        this.x = 20;
        this.y = 20;
        this.speedHorizontal = 5;
        this.health = 10;
        this.behaviour = new Alive();

        this.spriteUp1 = new Image(100, 200);
        this.spriteUp2 = new Image(100, 200);
        this.spriteLeft1 = new Image(100, 200);
        this.spriteLeft2 = new Image(100, 200);
        this.spriteDown1 = new Image(100, 200);
        this.spriteDown2 = new Image(100, 200);
        this.spriteRight1 = new Image(100, 200);
        this.spriteRight2 = new Image(100, 200);
        //
        this.spriteUp1.src = '../docs/images/jelly1.png';
        this.spriteUp2.src = '../docs/images/jelly2.png';
        this.spriteLeft1.src = '../docs/images/jelly1.png';
        this.spriteLeft2.src = '../docs/images/jelly2.png';
        this.spriteDown1.src = '../docs/images/jelly1.png';
        this.spriteDown2.src = '../docs/images/jelly2.png';
        this.spriteRight1.src = '../docs/images/jelly1.png';
        this.spriteRight2.src = '../docs/images/jelly2.png';

        this.sprite = this.spriteDown1;

        this.hero.subscribe(this);

        this.update();
    }

    public update() {

        console.log("hij hier komen");

        this.behaviour.update(this.health);
    }




    notify(x, y) {

        console.log(x);
        console.log(y);

        if(x > 0 || y > 0){
            this.x += 5;
            this.y += 5;
        }

        if(x < 0 || y < 0){
            this.x -= 5;
            this.y -= 5;
        }
        // this.x += 5;
        console.log(this);
    }

}