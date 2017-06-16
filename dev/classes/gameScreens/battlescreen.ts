namespace Gamescreens {
    export class Battlescreen implements IDrawable {

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

            this.sprite = new Image(3834, 2160);
            this.sprite.src = '../docs/images/battlescreen.png';
            // this.sprite.width = 100;
            // this.sprite.height = 100;
            // console.log(this.sprite.width);
            // console.log(this.sprite.height);


            requestAnimationFrame(() => this.update());
        }

        public update() {


            this.draw();
            requestAnimationFrame(() => this.update());
        }

        public draw() {
            Game.getInstance().context.drawImage(this.sprite, this.x, this.y);

        }
    }
}