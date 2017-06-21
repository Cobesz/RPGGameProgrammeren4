namespace Gamescreens {
    export class Battlescreen implements IDrawable {

        private x: number;
        private y: number;
        private sprite: HTMLImageElement;

        public battleHero: BattleHero;
        public battleJelly: BattleJelly;

        public static width: number = window.innerWidth;
        public static height: number = window.innerHeight;

        constructor() {
            this.x = 0;
            this.y = 0;

            this.sprite = new Image(3834, 2160);
            this.sprite.src = '../docs/images/battlescreen.png';

            this.battleHero = new BattleHero();
            this.battleJelly = new BattleJelly;



            requestAnimationFrame(() => this.update());
        }

        public update() {


            this.draw();
            requestAnimationFrame(() => this.update());
        }

        public draw() {
            Game.getInstance().context.drawImage(this.sprite, this.x, this.y);

            this.battleHero.draw();
            // this.battleJelly.draw();

        }
    }
}