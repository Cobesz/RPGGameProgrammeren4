class Moving implements HeroBehavior {
    hero: Hero;
constructor(h : Hero){
    this.hero = h;
 document.addEventListener('keydown', this.doStuff.bind(this));
}

public doStuff(event: KeyboardEvent) {
        // PRESS LEFT ARROW
        if (event.keyCode == 37) {
            this.hero.x -= this.hero.speed;
            if (this.hero.sprite === this.hero.spriteLeft1) {
                this.hero.sprite = this.hero.spriteLeft2;
            }
            else {
                this.hero.sprite = this.hero.spriteLeft1;
            }

        }
        // PRESS UP ARROW
        else if (event.keyCode == 38) {
            this.hero.y -= this.hero.speed;

            if (this.hero.sprite === this.hero.spriteUp1) {
                this.hero.sprite = this.hero.spriteUp2;
            }
            else {
                this.hero.sprite = this.hero.spriteUp1;
            }
        }
        // PRESS RIGHT ARROW
        else if (event.keyCode == 39) {
            this.hero.x += this.hero.speed;

            if (this.hero.sprite === this.hero.spriteRight1) {
                this.hero.sprite = this.hero.spriteRight2;
            }
            else {
                this.hero.sprite = this.hero.spriteRight1;
            }
        }
        // PRESS DOWN ARROW
        else if (event.keyCode == 40) {
            this.hero.y += this.hero.speed;

            if (this.hero.sprite === this.hero.spriteDown1) {
                this.hero.sprite = this.hero.spriteDown2;
            }
            else {
                this.hero.sprite = this.hero.spriteDown1;
            }
        }
    }

}