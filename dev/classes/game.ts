class Game {
    private static instance: Game;
    private hero: Hero;
    private jelly: Jelly;
    private map: Map;

    public canvas: HTMLCanvasElement;
    public context: CanvasRenderingContext2D;

    public static width: number = window.innerWidth;
    public static height: number = window.innerHeight;

    constructor() {
        this.canvas = document.getElementsByTagName("canvas")[0];
        this.canvas.width = Game.width;
        this.canvas.height = Game.height;

        this.context = this.canvas.getContext('2d');

        this.hero = new Hero();
        this.jelly = new Jelly(this.hero);
        this.map = new Map();

        requestAnimationFrame(() => this.update());
    }


    private update(): void {
        this.hero.update();

        //collision
        if(Utils.checkCollision(this.hero, this.jelly)) {
            console.log("Fuck you");
        }


        this.draw();
        requestAnimationFrame(() => this.update());
    }

    private draw(): void {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.context.fillStyle = "black";
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
        this.map.draw();
        this.hero.draw();
        this.jelly.draw();

    }

    public static getInstance() {
        if (!Game.instance) {
            Game.instance = new Game();
        }
        return Game.instance;
    }



}
