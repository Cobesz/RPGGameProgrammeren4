namespace Gamescreens {
    export class MapScreen implements GameScreen, IDrawable{
        public game: Game;

        private x: number;
        private y: number;
        private sprite: HTMLImageElement;

        constructor() {
            this.x = 0;
            this.y = 0;

            this.sprite = new Image(4096, 4096);
            this.sprite.src = '../docs/images/map.png';
            this.sprite.width = window.innerWidth;
            this.sprite.height = window.innerHeight;
            console.log(this.sprite);
        }

        public draw() {
            Game.getInstance().context.drawImage(this.sprite, this.x, this.y);
            Game.getInstance().hero.draw();
            Game.getInstance().jelly.draw();
        }

        public update() {

        }

    }
}