class BattleHero extends GameObject {

    private battleStance: HTMLImageElement;
    private attack1: HTMLImageElement;
    private attack2: HTMLImageElement;
    private attack3: HTMLImageElement;



    private behaviour: Behaviour;
    protected health: number;

    constructor() {
        super();
        this.x = 0;
        this.y = 0;
        this.width = 29;
        this.height= 28;


        this.health = 10;
        this.behaviour = new Alive();

        this.battleStance = new Image(this.width, this.height);
        this.attack1 = new Image(this.width, this.height);
        this.attack2= new Image(this.width, this.height);
        this.attack3= new Image(this.width, this.height);

        this.battleStance.src = '../docs/images/battle1.png';
        this.attack1.src = '../docs/images/attack1.png';
        this.attack2.src = '../docs/images/attack2.png';
        this.attack3.src = '../docs/images/attack3.png';

        this.sprite = this.battleStance;

        this.update();

    }


    public update() {
          this.behaviour.update(this.health);
    }
}