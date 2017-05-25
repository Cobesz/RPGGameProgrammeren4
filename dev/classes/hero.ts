///<reference path="gameObject.ts"/>

class Hero extends GameObject  {
// IMove is nu van toepassing in het behavior moving
// bas edit
    // private spriteUp1: HTMLImageElement;
    // private spriteUp2: HTMLImageElement;
    // private spriteLeft1: HTMLImageElement;
    // private spriteLeft2: HTMLImageElement;
    // private spriteDown1: HTMLImageElement;
    // private spriteDown2: HTMLImageElement;
    // private spriteRight1: HTMLImageElement;
    // private spriteRight2: HTMLImageElement;

    public spriteUp1: HTMLImageElement;
    public  spriteUp2: HTMLImageElement;
    public  spriteLeft1: HTMLImageElement;
    public  spriteLeft2: HTMLImageElement;
    public  spriteDown1: HTMLImageElement;
    public  spriteDown2: HTMLImageElement;
    public  spriteRight1: HTMLImageElement;
    public  spriteRight2: HTMLImageElement;
    //end bas edit

    //bas edit strategy
    public  behavior    : HeroBehavior;
    //end bas edit

    constructor() {
        super();
        this.x = 0;
        this.y = 0;
        this.speed = 5;

        //bas edit strategy
        this.behavior = new Moving(this);
        //end bas edit


        this.spriteUp1 = new Image(100, 200);
        this.spriteUp2 = new Image(100, 200);
        this.spriteLeft1 = new Image(100, 200);
        this.spriteLeft2 = new Image(100, 200);
        this.spriteDown1 = new Image(100, 200);
        this.spriteDown2 = new Image(100, 200);
        this.spriteRight1 = new Image(100, 200);
        this.spriteRight2 = new Image(100, 200);

        this.spriteUp1.src = '../docs/images/heroup1.png';
        this.spriteUp2.src = '../docs/images/heroup2.png';
        this.spriteLeft1.src = '../docs/images/heroleft1.png';
        this.spriteLeft2.src = '../docs/images/heroleft2.png';
        this.spriteDown1.src = '../docs/images/herodown1.png';
        this.spriteDown2.src = '../docs/images/herodown2.png';
        this.spriteRight1.src = '../docs/images/heroright1.png';
        this.spriteRight2.src = '../docs/images/heroright2.png';

        this.sprite = this.spriteDown1;

        // document.addEventListener('keydown', this.behavior.doStuff.bind(this));
    }

    // bas edit strategy
    // public move(event: KeyboardEvent) {
    //     // PRESS LEFT ARROW
    //     if (event.keyCode == 37) {
    //         this.x -= this.speed;
    //         if (this.sprite === this.spriteLeft1) {
    //             this.sprite = this.spriteLeft2;
    //         }
    //         else {
    //             this.sprite = this.spriteLeft1;
    //         }

    //     }
    //     // PRESS UP ARROW
    //     else if (event.keyCode == 38) {
    //         this.y -= this.speed;

    //         if (this.sprite === this.spriteUp1) {
    //             this.sprite = this.spriteUp2;
    //         }
    //         else {
    //             this.sprite = this.spriteUp1;
    //         }
    //     }
    //     // PRESS RIGHT ARROW
    //     else if (event.keyCode == 39) {
    //         this.x += this.speed;

    //         if (this.sprite === this.spriteRight1) {
    //             this.sprite = this.spriteRight2;
    //         }
    //         else {
    //             this.sprite = this.spriteRight1;
    //         }
    //     }
    //     // PRESS DOWN ARROW
    //     else if (event.keyCode == 40) {
    //         this.y += this.speed;

    //         if (this.sprite === this.spriteDown1) {
    //             this.sprite = this.spriteDown2;
    //         }
    //         else {
    //             this.sprite = this.spriteDown1;
    //         }
    //     }
    // }
    // end bas edit 
}