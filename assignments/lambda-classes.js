/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/
  
/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/

// function GameObject(objectAttributes) {
//     this.createdAt = objectAttributes.createdAt;
//     this.name = objectAttributes.name;
//     this.dimensions = objectAttributes.dimensions;
//   };
  
//   GameObject.prototype.destroy = function() {
//     return `${this.name} was removed from the game`
//   };
  
  class GameObject {
      constructor({createdAt, name, dimensions}) {
          this.createdAt = createdAt;
          this.name = name;
          this.dimensions = dimensions
      }

      destroy() {
        return `${this.name} was removed from the game`;
      }
  }


  class CharacterStats extends GameObject {
    constructor({createdAt, name, dimensions, healthPoints}) {
        super({createdAt, name, dimensions,});
        this.healthPoints = healthPoints;
    }

    takeDamage() {
      return `${this.name} took damage`;
    }
}


class Humanoid extends CharacterStats {
    constructor({createdAt, name, dimensions, healthPoints, team, weapons, language}) {
        super({createdAt, name, dimensions, healthPoints});
        this.team = team;
        this.weapons = weapons;
        this.language = language;
    }

    greet() {
        return `${this.name} offers a greeting in ${this.language}`;
    }
}
  
    const mage = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 1,
        height: 1,
      },
      healthPoints: 5,
      name: 'Bruce',
      team: 'Mage Guild',
      weapons: [
        'Staff of Shamalama',
      ],
      language: 'Common Tongue',
    });
  
    const swordsman = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 2,
        height: 2,
      },
      healthPoints: 15,
      name: 'Sir Mustachio',
      team: 'The Round Table',
      weapons: [
        'Giant Sword',
        'Shield',
      ],
      language: 'Common Tongue',
    });
  
    const archer = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 1,
        width: 2,
        height: 4,
      },
      healthPoints: 10,
      name: 'Lilith',
      team: 'Forest Kingdom',
      weapons: [
        'Bow',
        'Dagger',
      ],
      language: 'Elvish',
    });
  
    console.log(mage.createdAt); // Today's date
    console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
    console.log(swordsman.healthPoints); // 15
    console.log(mage.name); // Bruce
    console.log(swordsman.team); // The Round Table
    console.log(mage.weapons); // Staff of Shamalama
    console.log(archer.language); // Elvish
    console.log(archer.greet()); // Lilith offers a greeting in Elvish.
    console.log(mage.takeDamage()); // Bruce took damage.
    console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
  
  
    // Stretch task: 
    // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
    // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
    // * Create two new objects, one a villain and one a hero and fight it out with methods!
  
    // Create Hero class constructor function that inherits from Humanoid constructor function
  

  
class Hero extends Humanoid {
    constructor({createdAt, name, dimensions, healthPoints, team, weapons, language, formalTitle, place}) {
        super({createdAt, name, dimensions, healthPoints, team, weapons, language})
        this.formalTitle = formalTitle;
        this.place = place;
    }

    kneel() {
        return `I am ${this.formalTitle} ${this.name} of ${this.place} and you shall kneel before me!`;
    };

    rainOfGod() {
        this.healthPoints = this.healthPoints + 2;
        return `You have been blessed by the Rain of God! Your health is now ${this.healthPoints}! May the winds of Sha-mah-lan carry you forward!`;
    };

    fireStorm() {
        this.healthPoints = this.healthPoints - 5;
        if(this.healthPoints <= 0) {
          return this.destroy();
        } else {
          return `You have been burned by the fires of Hell! Your health is now ${this.healthPoints}! If you fall further you may be banished from this kingdom!`;
        }

    }
}

class Villain extends Hero {
    constructor({createdAt, name, dimensions, healthPoints, team, weapons, language, formalTitle, place}){
        super({createdAt, name, dimensions, healthPoints, team, weapons, language, formalTitle, place});
    }
}

  
    const hero1 = new Hero({
      createdAt: new Date(),
      dimensions: {
        length: 1,
        width: 2,
        height: 4,
      },
      healthPoints: 5,
      name: 'Oberin',
      team: 'Forest Kingdom',
      weapons: [
        'Spear',
        'Poison',
      ],
      language: 'Dornish',
      formalTitle: 'Prince',
      place: 'Dorne',
    });
  
  
    const villain1 = new Villain({
      createdAt: new Date(),
      dimensions: {
        length: 1,
        width: 2,
        height: 4,
      },
      healthPoints: 5,
      name: 'Dracula',
      team: 'The Keep',
      weapons: [
        'Teeth',
        'Poison',
      ],
      language: 'Transylvanian',
      formalTitle: 'Count',
      place: 'Transylvania',
    });
  
    Villain.prototype.beGone = function() {
      return `I am ${this.formalTitle} ${this.name} of ${this.place} and you shall be gone from my lands!`;
    }
  
    console.log(hero1.kneel())
  
    console.log(villain1.beGone());
  
    console.log(hero1.rainOfGod());
  
    console.log(hero1.rainOfGod());
  
    console.log(hero1.fireStorm());
  
    console.log(villain1.fireStorm());
  
