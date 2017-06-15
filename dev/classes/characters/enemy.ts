class Enemy extends GameObject implements Observer {

    protected hero;

    protected spriteUp1: HTMLImageElement;
    protected spriteUp2: HTMLImageElement;

    protected behaviour: Behaviour;
    protected health: number;
    protected random: number;

    constructor() {
        super();
        this.random = Math.random();
    }



    notify(x, y) {

    }
}