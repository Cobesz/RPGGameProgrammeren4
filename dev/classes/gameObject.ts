enum isDead {
    YES,
    NO
}


abstract class GameObject implements IDrawable {
    public x: number;
    public y: number;
    public width: number;
    public height: number;

    protected speedHorizontal: number = 0;
    protected speedVertical : number = 0;

    protected sprite: HTMLImageElement;

    protected isDead: isDead = isDead.NO;

    constructor() {

    }

    public draw() {
        Game.getInstance().context.drawImage(this.sprite, this.x, this.y);
        // console.log(this.x, this.y);
    }

    public update() {

    }

}