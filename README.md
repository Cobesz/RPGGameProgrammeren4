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



**Edit**
_____________________________________________________________________________________

Volgens je Readme mis je composition en Stratagy, 
maar composition komt wel terug in je game, ook in je UML staat dat je composition gebruikt.

Strategy kon ik niet terug vinden, maar is in principe makkelijk toe te passen bij Hero en Enemy.
In de pull request vind je hier een voorbeeld van terug.

Verder heb je alle eisen (singleton, statuc ulility, encapsulation, inheritance en composition).

Verder moet je opletten dat je Hero nog voorbij het scherm kan lopen en over water.
Buiten het scherm lopen is makkelijk te fixen met een scherm collision check.

