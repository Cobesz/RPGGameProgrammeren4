class Battlescreen implements IDrawable {

    private static instance: Battlescreen;
    private x: number;
    private y: number;
    private sprite: HTMLImageElement;

    public canvas: HTMLCanvasElement;
    public context: CanvasRenderingContext2D;

    public static width: number = window.innerWidth;
    public static height: number = window.innerHeight;

    constructor() {
        this.x = 0;
        this.y = 0;

        this.sprite = new Image(4096, 4096);
        this.sprite.src = '../docs/images/battlescreen.png';
        console.log(this.sprite);

        this.canvas = document.getElementsByTagName("canvas")[0];
        this.canvas.width = Battlescreen.width;
        this.canvas.height = Battlescreen.height;

        this.context = this.canvas.getContext('2d');


        requestAnimationFrame(() => this.update());
    }

    public update() {


        this.draw();
        requestAnimationFrame(() => this.update());
    }

    public draw() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.context.fillStyle = "black";
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);

        this.context.drawImage(this.sprite, this.x, this.y);

    }

    public static getInstance() {
        if (!Battlescreen.instance) {
            Battlescreen.instance = new Battlescreen();
        }
        return Battlescreen.instance;
    }

}