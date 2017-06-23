class Map implements IDrawable {
    private x: number;
    private y: number;
    private sprite: HTMLImageElement;

    constructor() {
        this.x = 0;
        this.y = 0;

        this.sprite = new Image(4096, 4096);
        this.sprite.src = '../docs/images/map.png';
        console.log(this.sprite);
    }

    public draw() {
        Game.getInstance().context.drawImage(this.sprite, this.x, this.y);
    }

    public update() {

    }

}