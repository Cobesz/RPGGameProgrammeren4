class GameObject implements IDrawable {

    //bas edit
    // protected x: number;
    // protected y: number;
    // protected speed: number;
    // protected sprite: HTMLImageElement;

    private _x : number;
    private _y : number;
    private _speed: number;
    public sprite: HTMLImageElement;

    // end bas edit


    // bas edit 
    public get x(): number          {   return this._x;   }
    public set x(value: number)     {   this._x = value;  }

    public get y(): number          {   return this._y;   }
    public set y(value: number)     {   this._y = value;  } 

    public get speed(): number          {   return this._speed;   }
    public set speed(value: number)     {   this._speed = value;  } 


    // end bas edit

    constructor() {

    }


    public draw() {
        Game.getInstance().context.drawImage(this.sprite, this.x, this.y);
        // console.log(this.x, this.y);
    }

    public update() {

    }


}