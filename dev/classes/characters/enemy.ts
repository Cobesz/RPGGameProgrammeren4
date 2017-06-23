class Enemy extends GameObject implements Observer {

    protected hero;
    protected battleHero;

    protected spriteUp1: HTMLImageElement;
    protected spriteUp2: HTMLImageElement;

    protected behaviour: Behaviour;
    public health: number;
    protected random: number;

    constructor() {
        super();
        this.random = Math.random();
    }



    notify(x, y) {

    }

    getsDamage(damage) {

    }
}