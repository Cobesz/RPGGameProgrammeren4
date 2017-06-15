///<reference path="../gameObject.ts"/>

class Hero extends GameObject implements Subject {

    public observers: Array<Observer> = [];

    private spriteUp1: HTMLImageElement;
    private spriteUp2: HTMLImageElement;
    private spriteLeft1: HTMLImageElement;
    private spriteLeft2: HTMLImageElement;
    private spriteDown1: HTMLImageElement;
    private spriteDown2: HTMLImageElement;
    private spriteRight1: HTMLImageElement;
    private spriteRight2: HTMLImageElement;
    private behaviour: Behaviour;
    protected health: number;

    constructor() {
        super();
        this.x = 0;
        this.y = 0;
        this.width = 25;
        this.height= 50;
        this.health = 10;
        this.behaviour = new Alive();


        this.spriteUp1 = new Image(this.width, this.height);
        this.spriteUp2 = new Image(this.width, this.height);
        this.spriteLeft1 = new Image(this.width, this.height);
        this.spriteLeft2 = new Image(this.width, this.height);
        this.spriteDown1 = new Image(this.width, this.height);
        this.spriteDown2 = new Image(this.width, this.height);
        this.spriteRight1 = new Image(this.width, this.height);
        this.spriteRight2 = new Image(this.width, this.height);

        this.spriteUp1.src = '../docs/images/heroup1.png';
        this.spriteUp2.src = '../docs/images/heroup2.png';
        this.spriteLeft1.src = '../docs/images/heroleft1.png';
        this.spriteLeft2.src = '../docs/images/heroleft2.png';
        this.spriteDown1.src = '../docs/images/herodown1.png';
        this.spriteDown2.src = '../docs/images/herodown2.png';
        this.spriteRight1.src = '../docs/images/heroright1.png';
        this.spriteRight2.src = '../docs/images/heroright2.png';

        this.sprite = this.spriteDown1;

        document.addEventListener('keydown', this.onKeyDown.bind(this));
        document.addEventListener('keyup', this.onKeyUp.bind(this));
        this.update();


    }

    public update() {
        this.x += this.speedHorizontal;
        this.y += this.speedVertical;



        // als speed > 0 notify
        if(this.speedVertical > 0 || this.speedHorizontal > 0) {
            for(let o of this.observers) {
                o.notify(this.speedHorizontal, this.speedVertical);
            }
        }

        if(this.speedVertical < 0 || this.speedHorizontal < 0) {
            for(let o of this.observers) {
                o.notify(this.speedHorizontal, this.speedVertical);
            }
        }

        this.behaviour.update(this.health);
    }

    public onKeyDown(event: KeyboardEvent) {
        // PRESS LEFT ARROW
        // if (event.keyCode == 37) {
        if (event.key == 'ArrowLeft') {
            this.speedHorizontal = -5;
            // this.x -= this.speedHorizontal;
            if (this.sprite === this.spriteLeft1) {
                this.sprite = this.spriteLeft2;
            }
            else {
                this.sprite = this.spriteLeft1;
            }

        }
        // PRESS UP ARROW
        // else if (event.keyCode == 38) {
        else if (event.key == 'ArrowUp') {
            this.speedVertical = -5;

            if (this.sprite === this.spriteUp1) {
                this.sprite = this.spriteUp2;
            }
            else {
                this.sprite = this.spriteUp1;
            }
        }
        // PRESS RIGHT ARROW
        // else if (event.keyCode == 39) {
        else if (event.key == 'ArrowRight') {
            this.speedHorizontal = 5;

            if (this.sprite === this.spriteRight1) {
                this.sprite = this.spriteRight2;
            }
            else {
                this.sprite = this.spriteRight1;
            }
        }
        // PRESS DOWN ARROW
        // else if (event.keyCode == 40) {
        else if (event.key == 'ArrowDown') {
            this.speedVertical = 5;

            if (this.sprite === this.spriteDown1) {
                this.sprite = this.spriteDown2;
            }
            else {
                this.sprite = this.spriteDown1;
            }
        }
    }

    private onKeyUp(e : KeyboardEvent) {
        if(e.key == 'ArrowLeft') {
            this.speedHorizontal = 0;
        }

        else if (e.key == 'ArrowRight') {
            this.speedHorizontal = 0;
        }

        else if (e.key == 'ArrowUp') {
            this.speedVertical = 0;
        }
        else if (e.key == 'ArrowDown') {
            this.speedVertical = 0;
        }
    }

    subscribe(o: Observer) {
        this.observers.push(o);
    }

    unsubscribe(o: Observer) {
    }

}