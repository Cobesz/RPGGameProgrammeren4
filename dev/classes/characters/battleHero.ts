class BattleHero extends GameObject implements Subject{

    public observers: Array<Observer> = [];

    private battleJelly: BattleJelly;

    private battleStance: HTMLImageElement;
    private attack1: HTMLImageElement;
    private attack2: HTMLImageElement;
    private attack3: HTMLImageElement;


    private behaviour: Behaviour;
    protected health: number;

    constructor() {
        super();
        this.x = 500;
        this.y = 550;
        this.width = 29;
        this.height = 28;


        this.health = 10;
        this.behaviour = new Alive();

        this.battleStance = new Image(this.width, this.height);
        this.attack1 = new Image(this.width, this.height);
        this.attack2 = new Image(this.width, this.height);
        this.attack3 = new Image(this.width, this.height);

        this.battleStance.src = '../docs/images/battle1.png';
        this.attack1.src = '../docs/images/attack1.png';
        this.attack2.src = '../docs/images/attack2.png';
        this.attack3.src = '../docs/images/attack3.png';

        this.sprite = this.battleStance;



        document.addEventListener('keydown', this.onKeyDown.bind(this));
        document.addEventListener('keyup', this.onKeyUp.bind(this));

        this.update();

    }


    public update() {
        this.behaviour.update(this.health);
    }


    public onKeyDown(event: KeyboardEvent) {
        if (event.keyCode == 32) {
            this.attack();
        }
    }

    private onKeyUp(e : KeyboardEvent) {
        if(e.keyCode == 32){
            if (this.sprite === this.attack1) {
                this.sprite = this.attack2;
            }
        }
    }



    public attack() {

        if (this.sprite === this.battleStance || this.sprite === this.attack2) {
            this.sprite = this.attack1;
        }

        this.random = Math.round(Math.random() * 3);

        for(let o of this.observers) {
            o.getsDamage(this.random);

        }
    }

    subscribe(o: Observer) {
        this.observers.push(o);
    }

    unsubscribe() {

    }
}