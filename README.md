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


# Peer Review 2 door Roy Sijnesael (15-06)

Het project voldoet in de volgende opzichten:

- Klassendiagram (alleen niet geupdated)
- Speelbare game met begin en eind, zonder bugs
- encapsulation, composition, inheritance
- Singleton, Observer, Strategy
- interface, static
- Game Loop

Helaas zijn de andere eisen niet terug gekomen in de game.

## Beoordeling

De game is speelbaar, maar heeft geen duidelijk einde. Er missen ook een hoop eisen: 

- Gebruik van een library 
- Abstracts 
- Polymorphism 
- Enumarations 
- Namespaces
- Readme.md file waarin bovenstaande wordt toegelicht

Hierdoor krijgt het project van mij een voldoende.

Of nee toch niet.

![UML](./docs/images/heinrich.jpg?raw=true "heinrich")


