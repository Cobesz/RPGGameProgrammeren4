# Oldskool Typescript RPG -> Work in progress!


**Installatie instructies**

De game is te spelen via de live omgeving van github, als je het wilt forken is het letterlijk forken -> compilen en gaan.

https://cobesz.github.io/RPGGameProgrammeren4/docs/

## Programmeerprincipes toegepast

**Interface**

in de dev folder heb je het mapje interfaces, hierin heb ik IDrawable en IMove. Ze beschrijven respectievelijk de blueprints voor het tekenen op de canvas en movement voor objecten.

**Static Utility Method**

De static method die ik gebruik is de getInstance method voor de singleton.

**Singleton**

De game class heb ik tot singleton gemaakt, deze is vervolgens overal te bereiken via  `let g = Game.getInstance();`

**Encapsulation**

    class GameObject implements IDrawable {
        protected x: number;
        protected y: number;
        protected speed: number;

        protected sprite: HTMLImageElement;

        constructor() {

        }

**Inheritance**

`class Hero extends GameObject implements IMove { }`


**Overige info**

De UML is te vinden in de root folder van de repo.

Herinlevering week 4 - mei 2018

Pull-request: https://github.com/TBRRayz/eindproject/pull/3

Peer-review week 6: https://github.com/RoySijnesael/PRG08-Herkansing/issues/3
