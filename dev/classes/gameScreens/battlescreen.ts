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
            this.battleJelly = new BattleJelly(this.battleHero);

            this.drawElements();


            requestAnimationFrame(() => this.update());
        }

        public update() {
            this.draw();
            requestAnimationFrame(() => this.update());
        }

        public draw() {
            Game.getInstance().context.drawImage(this.sprite, this.x, this.y);

            this.battleHero.draw();
            this.battleJelly.draw();

        }

        drawElements() {

            let battleBar = document.getElementById("battle-elements");
            battleBar.style.width = "100%";
            battleBar.style.height = "140px";
            battleBar.style.background = "#3f4c6b";  /* Old browsers */
            battleBar.style.background = "-moz-linear-gradient(top, #3f4c6b 0%, #3f4c6b 100%)"; /* FF3.6-15 */
            battleBar.style.background = "-webkit-linear-gradient(top, #3f4c6b 0%,#3f4c6b 100%)"; /* Chrome10-25,Safari5.1-6 */
            battleBar.style.background = "linear-gradient(to bottom, #3f4c6b 0%,#3f4c6b 100%)"; /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
            battleBar.style.color = "white";
            battleBar.style.filter = "progid:DXImageTransform.Microsoft.gradient( startColorstr='#3f4c6b', endColorstr='#3f4c6b',GradientType=0 )"; /* IE6-9 */
            battleBar.style.bottom = "0";

            let healthBox = document.createElement("div");
            healthBox.id = "healthBox";
            healthBox.style.width = "300px";
            healthBox.style.height = "100%";
            healthBox.style.border= "1px solid white";
            healthBox.style.background= "#7891CC";

            battleBar.appendChild(healthBox);

            let heroName = document.createElement("h2");
            heroName.innerText = "Maxim";
            heroName.style.margin= "20px";

            healthBox.appendChild(heroName);

            let healthBar = document.createElement("div");
            healthBar.id = "healthBar";
            healthBar.style.width = "200px";
            healthBar.style.height = "10px";
            healthBar.style.border= "1px solid white";
            healthBar.style.margin= "60px 0 0 20px";
            healthBar.style.background= "green";

            healthBox.appendChild(healthBar);
        }
    }
}