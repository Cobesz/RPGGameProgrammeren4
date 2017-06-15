var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Game = (function () {
    function Game() {
        var _this = this;
        this.canvas = document.getElementsByTagName("canvas")[0];
        this.canvas.width = Game.width;
        this.canvas.height = Game.height;
        this.context = this.canvas.getContext('2d');
        this.hero = new Hero();
        this.jelly = new Jelly(this.hero);
        this.map = new Map();
        requestAnimationFrame(function () { return _this.update(); });
    }
    Game.prototype.update = function () {
        var _this = this;
        this.hero.update();
        if (Utils.checkCollision(this.hero, this.jelly)) {
            Battlescreen.getInstance();
        }
        this.draw();
        requestAnimationFrame(function () { return _this.update(); });
    };
    Game.prototype.draw = function () {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.context.fillStyle = "black";
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
        this.map.draw();
        this.hero.draw();
        this.jelly.draw();
    };
    Game.getInstance = function () {
        if (!Game.instance) {
            Game.instance = new Game();
        }
        return Game.instance;
    };
    return Game;
}());
Game.width = window.innerWidth;
Game.height = window.innerHeight;
window.addEventListener("load", function () {
    var g = Game.getInstance();
});
var Alive = (function () {
    function Alive() {
    }
    Alive.prototype.update = function (health) {
        if (health < 1) {
            alert('Game over!');
        }
        else {
        }
    };
    return Alive;
}());
var GameObject = (function () {
    function GameObject() {
        this.speedHorizontal = 0;
        this.speedVertical = 0;
    }
    GameObject.prototype.draw = function () {
        Game.getInstance().context.drawImage(this.sprite, this.x, this.y);
    };
    GameObject.prototype.update = function () {
    };
    return GameObject;
}());
var Map = (function () {
    function Map() {
        this.x = 0;
        this.y = 0;
        this.sprite = new Image(4096, 4096);
        this.sprite.src = '../docs/images/map.png';
        console.log(this.sprite);
    }
    Map.prototype.draw = function () {
        Game.getInstance().context.drawImage(this.sprite, this.x, this.y);
    };
    Map.prototype.update = function () {
    };
    return Map;
}());
var Utils = (function () {
    function Utils() {
    }
    Utils.checkCollision = function (g1, g2) {
        return (g1.x < g2.x + g2.width &&
            g1.x + g1.width > g2.x &&
            g1.y < g2.y + g1.height &&
            g1.height + g1.y > g2.y);
    };
    return Utils;
}());
var Enemy = (function (_super) {
    __extends(Enemy, _super);
    function Enemy() {
        var _this = _super.call(this) || this;
        _this.random = Math.random();
        return _this;
    }
    Enemy.prototype.notify = function (x, y) {
    };
    return Enemy;
}(GameObject));
var Hero = (function (_super) {
    __extends(Hero, _super);
    function Hero() {
        var _this = _super.call(this) || this;
        _this.observers = [];
        _this.x = 0;
        _this.y = 0;
        _this.width = 25;
        _this.height = 50;
        _this.health = 10;
        _this.behaviour = new Alive();
        _this.spriteUp1 = new Image(_this.width, _this.height);
        _this.spriteUp2 = new Image(_this.width, _this.height);
        _this.spriteLeft1 = new Image(_this.width, _this.height);
        _this.spriteLeft2 = new Image(_this.width, _this.height);
        _this.spriteDown1 = new Image(_this.width, _this.height);
        _this.spriteDown2 = new Image(_this.width, _this.height);
        _this.spriteRight1 = new Image(_this.width, _this.height);
        _this.spriteRight2 = new Image(_this.width, _this.height);
        _this.spriteUp1.src = '../docs/images/heroup1.png';
        _this.spriteUp2.src = '../docs/images/heroup2.png';
        _this.spriteLeft1.src = '../docs/images/heroleft1.png';
        _this.spriteLeft2.src = '../docs/images/heroleft2.png';
        _this.spriteDown1.src = '../docs/images/herodown1.png';
        _this.spriteDown2.src = '../docs/images/herodown2.png';
        _this.spriteRight1.src = '../docs/images/heroright1.png';
        _this.spriteRight2.src = '../docs/images/heroright2.png';
        _this.sprite = _this.spriteDown1;
        document.addEventListener('keydown', _this.onKeyDown.bind(_this));
        document.addEventListener('keyup', _this.onKeyUp.bind(_this));
        _this.update();
        return _this;
    }
    Hero.prototype.update = function () {
        this.x += this.speedHorizontal;
        this.y += this.speedVertical;
        if (this.speedVertical > 0 || this.speedHorizontal > 0) {
            for (var _i = 0, _a = this.observers; _i < _a.length; _i++) {
                var o = _a[_i];
                o.notify(this.speedHorizontal, this.speedVertical);
            }
        }
        if (this.speedVertical < 0 || this.speedHorizontal < 0) {
            for (var _b = 0, _c = this.observers; _b < _c.length; _b++) {
                var o = _c[_b];
                o.notify(this.speedHorizontal, this.speedVertical);
            }
        }
        this.behaviour.update(this.health);
    };
    Hero.prototype.onKeyDown = function (event) {
        if (event.key == 'ArrowLeft') {
            this.speedHorizontal = -5;
            if (this.sprite === this.spriteLeft1) {
                this.sprite = this.spriteLeft2;
            }
            else {
                this.sprite = this.spriteLeft1;
            }
        }
        else if (event.key == 'ArrowUp') {
            this.speedVertical = -5;
            if (this.sprite === this.spriteUp1) {
                this.sprite = this.spriteUp2;
            }
            else {
                this.sprite = this.spriteUp1;
            }
        }
        else if (event.key == 'ArrowRight') {
            this.speedHorizontal = 5;
            if (this.sprite === this.spriteRight1) {
                this.sprite = this.spriteRight2;
            }
            else {
                this.sprite = this.spriteRight1;
            }
        }
        else if (event.key == 'ArrowDown') {
            this.speedVertical = 5;
            if (this.sprite === this.spriteDown1) {
                this.sprite = this.spriteDown2;
            }
            else {
                this.sprite = this.spriteDown1;
            }
        }
    };
    Hero.prototype.onKeyUp = function (e) {
        if (e.key == 'ArrowLeft') {
            this.speedHorizontal = 0;
        }
        else if (e.key == 'ArrowRight') {
            this.speedHorizontal = 0;
        }
        else if (e.key == 'ArrowUp') {
            this.speedVertical = 0;
        }
        else if (e.key == 'ArrowDown') {
            this.speedVertical = 0;
        }
    };
    Hero.prototype.subscribe = function (o) {
        this.observers.push(o);
    };
    Hero.prototype.unsubscribe = function (o) {
    };
    return Hero;
}(GameObject));
var Jelly = (function (_super) {
    __extends(Jelly, _super);
    function Jelly(h) {
        var _this = _super.call(this) || this;
        _this.hero = h;
        _this.x = _this.random * 2000;
        _this.y = _this.random * 2000;
        _this.width = 25;
        _this.height = 50;
        _this.speedHorizontal = 5;
        _this.health = 10;
        _this.behaviour = new Alive();
        _this.spriteUp1 = new Image(_this.width, _this.height);
        _this.spriteUp2 = new Image(_this.width, _this.height);
        _this.spriteUp1.src = '../docs/images/jelly1.png';
        _this.spriteUp2.src = '../docs/images/jelly2.png';
        _this.sprite = _this.spriteUp1;
        console.log(_this.sprite);
        _this.hero.subscribe(_this);
        _this.update();
        return _this;
    }
    Jelly.prototype.update = function () {
        this.behaviour.update(this.health);
    };
    Jelly.prototype.notify = function (x, y) {
        if (x > 0) {
            this.x -= this.random * 20;
            if (this.sprite === this.spriteUp1) {
                this.sprite = this.spriteUp2;
            }
            else {
                this.sprite = this.spriteUp1;
            }
        }
        else if (y > 0) {
            this.y -= this.random * 20;
            if (this.sprite === this.spriteUp1) {
                this.sprite = this.spriteUp2;
            }
            else {
                this.sprite = this.spriteUp1;
            }
        }
        else if (x < 0) {
            this.x += this.random * 20;
            if (this.sprite === this.spriteUp1) {
                this.sprite = this.spriteUp2;
            }
            else {
                this.sprite = this.spriteUp1;
            }
        }
        else if (y < 0) {
            this.y += this.random * 20;
            if (this.sprite === this.spriteUp1) {
                this.sprite = this.spriteUp2;
            }
            else {
                this.sprite = this.spriteUp1;
            }
        }
    };
    return Jelly;
}(Enemy));
var Battlescreen = (function () {
    function Battlescreen() {
        var _this = this;
        this.x = 0;
        this.y = 0;
        this.sprite = new Image(4096, 4096);
        this.sprite.src = '../docs/images/battlescreen.png';
        console.log(this.sprite);
        this.canvas = document.getElementsByTagName("canvas")[0];
        this.canvas.width = Battlescreen.width;
        this.canvas.height = Battlescreen.height;
        this.context = this.canvas.getContext('2d');
        requestAnimationFrame(function () { return _this.update(); });
    }
    Battlescreen.prototype.update = function () {
        var _this = this;
        this.draw();
        requestAnimationFrame(function () { return _this.update(); });
    };
    Battlescreen.prototype.draw = function () {
        this.context.drawImage(this.sprite, this.x, this.y);
    };
    Battlescreen.getInstance = function () {
        if (!Battlescreen.instance) {
            Battlescreen.instance = new Battlescreen();
        }
        return Battlescreen.instance;
    };
    return Battlescreen;
}());
Battlescreen.width = window.innerWidth;
Battlescreen.height = window.innerHeight;
//# sourceMappingURL=main.js.map