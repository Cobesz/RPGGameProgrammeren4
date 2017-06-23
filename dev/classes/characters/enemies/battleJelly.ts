class BattleJelly extends Enemy {

    private battleStance1: HTMLImageElement;
    private battleStance2: HTMLImageElement;
    private attack1: HTMLImageElement;
    private attack2: HTMLImageElement;
    private attack3: HTMLImageElement;


    constructor(bh) {
        super();



        this.battleHero = bh;

        this.x = 950;
        this.y = 300;
        this.width = 29;
        this.height = 28;


        this.health = 10;
        this.behaviour = new Alive();

        this.battleStance1 = new Image(this.width, this.height);
        this.battleStance2 = new Image(this.width, this.height);


        this.battleStance1.src = '../docs/images/jellyBattle1.png';
        this.battleStance2.src = '../docs/images/jellyBattle2.png';

        this.sprite = this.battleStance1;


        this.battleHero.subscribe(this);

        this.update();

    }

    notify(damage: number) {
        this.getsDamage(damage)
    }

    getsDamage(damage) {
        this.health -= damage;
        console.log(damage);

        console.log(this.health);

        if(this.health < 0) {

            console.log("you died!");
            let g = Game.getInstance();
            g.activeScreen = new Gamescreens.MapScreen();
            g.jelly.sprite.src = "";
            alert("You killed the Jelly! Refresh to play again :)")
        }
    }


    public update() {
        // this.behaviour.update(this.health);


    }
}

