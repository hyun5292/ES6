////Remember to Set the Constructor Property when Changing the Prototype
/*
There is one crucial(중대한) side effect of manually setting the prototype to a
new object. It erases the constructor property! This property can be used to check
which constructor function created the instance, but since the property has been
overwritten, it now gives false result:
*/
/*
duck.constructor === Bird;
duck.constructor === Object;
duck instanceof Bird;
*/
/*
In order, these expressions would evaluate to false, true and true.

To fix this, whenever a prototype is manually set to a new object, remember to define
the constructor property:
*/
/*
Bird.prototype = {
  constructor: Bird,
  numLegs: 2,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};
*/
////////////////////////////////////////////////////////////////////////////////
/*
Define the constructor property on the Dog prototype.
*/
/*
function Dog(name) {
  this.name = name;
}

Dog.prototype = {
  constructor: Dog,
  numLegs: 4,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};
*/
////////////////////////////////////////////////////////////////////////////////
////Understand Where an Object's Prototype Comes From
/*
Just like people inherit genes from their parents, an object inherits its prototype
directly from the constructor function that created it. For example, here the Bird
constructor creates the duck object:
*/
/*
funciton Bird(name) {
  this.name = name;
}
let duck = new Bird("Donald");
*/
/*
duck inherits its prototype from the Bird constructor function. You can show this
relationship with the isPrototypeOf method:
*/
//Bird.prototype.isPrototypeOf(duck);
/*
This would return true.
*/
////////////////////////////////////////////////////////////////////////////////
/*
Use is PrototypeOf to check the prototype of beagle.
*/
/*
function Dog(name) {
  this.name = name;
}
let beagle = new Dog("Snoopy");
Dog.prototype.isPrototypeOf(beagle);
*/
////////////////////////////////////////////////////////////////////////////////
////Understand the Prototype Chain
/*
All objects in JavaScript (with a few exceptions) have a prototype. Also, an object's
prototype itself is an object.
*/
/*
function Bird(name) {
  this.name = name;
}
typeof Bird.prototype;
*/
/*
Because a prototype is an object, a prototype can have its own prototype! In this
case, the prototype of Bird.prototype is Object.prototype:
*/
//Object.prototype.isPrototypeOf(Bird.prototype);
/*
How is this useful? You may recall the hasOwnProperty method from a previous
challenge:
*/
//let duck = new Bird("Donald");
//duck.hasOwnProperty("name");
/*
The hasOwnProperty method is defined in Object.prototype, which can be accessed
by Bird.prototype, which can then be accessed by duck. This is an example of the
prototype chain. In this prototype chain, Bird is the supertype for duck, while
duck is the subtype for all objects in JavaScript. Therefore, any object can use
the hasOwnProperty method.
*/
////////////////////////////////////////////////////////////////////////////////
/*
Modify the code to show the correct prototpe chain.
*/
/*
function Dog(name) {
  this.name = name;
}
let beagle = new Dog("Snoopy");
Dog.prototype.isPrototypeOf(beagle);
Object.prototype.isPrototypeOf(Dog.prototype);
*/
////////////////////////////////////////////////////////////////////////////////
////Use Inheritance So You Don't Repeat Yourself
/*
There's a principle in programming called Don't Repeat Yourself (DRY). The reason
repeated code is a problem is because any change requires fixing code in multiple
places. This usually means more work for programmers and more room for errors.

Notice in the example below that the describe method is shared by Bird and Dog:
*/
/*
Bird.prototype = {
  constructor: Bird,
  describe: function() {
    console.log("My name is " + this.name);
  }
};

Dog.prototype = {
  constructor: Dog,
  describe: function() {
    console.log("My name is " + this.name);
  }
};
*/
/*
The describe method is repeated in two places. The code can be edited to follow
the DRY principle by creating a supertype (or parent) called Animal:
*/
/*
function Animal() {
  Animal.prototype = {
    constructor: Animal,
    describe: function() {
      console.log("My name is " + this.name);
    }
  }
};
*/
/*
Since Animal includes the describe method, you can remove it from Bird and Dog:
*/
/*
Bird.prototype = {
  constructor: Bird
};

Dog.prototype = {
  constructor: Dog
};
*/
////////////////////////////////////////////////////////////////////////////////
/*
The eat method is repeated in both Cat and Bear. Edit the code in the spirit of
DRY by moving the eat method to the Animal supertype.
*/
/*
function Cat(name) {
  this.name = name;
}

Cat.prototype = {
  constructor: Animal
};

function Bear(name) {
  this.name = name;
}

Bear.prototype = {
  constructor: Animal
};

function Animal() {  }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};
*/
////////////////////////////////////////////////////////////////////////////////
////Inherit Behaviors from a Supertype
/*
In the previous challege, you created a supertype called Animal that defined
behaviors shared by all animals:
*/
/*
function Animal() {}
Animal.prototype.eat = function() {
  console.log("nom nom nom");
};
*/
/*
This and the next challenge will cover how to reuse the methods of Animal inside
Bird and Dog without defining them again. It uses a technique called inheritance.
This challenge covers the first step: make an instance of the supertype (or parent).
You already know one way to create an instance of Animal using the new operator:
*/
//let animal = new Animal();
/*
These are some disadvantage when using this syntax for inheritance, which are too
complex for the scope of this challenge. Instead, here's an alternative approach
without those disadvantage.
*/
//let animal = Object.create(Animal.prototype);
/*
Object.create(obj) creates a new object, and sets obj as the new object's prototype.
Recall that the prototype is like the "recipe" for creating an object. By setting
the prototype of animal to be the prototype of Animal, you are effectively giving
the animal instance the same "recipe" as any other instance of Animal.
*/
//animal.eat();
//animal instanceof Animal;
/*
The instanceof method here would return true.
*/
////////////////////////////////////////////////////////////////////////////////
/*
Use Object.create to make two instances of Animal named duck and beagle.
*/
/*
function Animal() {
  Animal.prototype = {
    constructor: Animal,
    eat: function() {
      console.log("nom nom nom");
    }
  };
  let duck = Object.create(Animal.prototype);
  let beagle = Object.create(Animal.prototype);
}
*/
////////////////////////////////////////////////////////////////////////////////
////Set the Child's Prototype to an Instance of the Parent
/*
In the previous challenge you saw the first step for inheriting behavior from the
supertype (or parent) Animal: making a new instance of Animal.
 This challenge covers the next step: set the prototype of the subtype (or child)
-in this case, Bird- to be an instance of Animal.
*/
//Bird.prototype = Object.creaet(Animal.prototype);
/*
Remember that the prototype is like the "recipe" for creating an object. In a way,
the recipe for Bird now includes all the key "ingredients" from Animal.
*/
//let duck = new Bird("Donald");
//duck.eat;
/*
duck inherits all of Animal's properties, including the eat method.
*/
////////////////////////////////////////////////////////////////////////////////
/*
Modify the code so that instances of Dog inherit from Animal.
*/
/*
function Animal() {
  Animal.prototype = {
    constructor: Animal,
    eat: function() {
      console.log("nom nom nom");
    }
  }
};

function Dog() {}

Dog.prototype = Object.create(Animal.prototype);
let beagle = new Dog();
*/
////////////////////////////////////////////////////////////////////////////////
////Reset an Inherited Constructor Property
/*
When an object inherits its prototype from another object, it also inherits the
Supertypes constructor property.

Here's an example:
*/
/*
funciton Bird() {  }
Bird.prototype = Object.create(Animal.prototype);
let duck = new Bird();
duck.constructor
*/
/*
But duck and all instances of Bird should show that they were costructed by Bird
and not Animal. To do so, you can manually set the constructor property of Bird
to the Bird object:
*/
/*
Bird.prototype.constructor = Bird;
duck.constructor
*/
////////////////////////////////////////////////////////////////////////////////
/*
Fix the code so duck.constructor and beagle.constructor return their respective
constructors.
*/
/*
function Animal() {}
function Bird() {}
function Dog() {}

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);

Bird.prototype.constructor = Bird;
Dog.prototype.constructor = Dog;

let duck = new Bird();
let beagle = new Dog();
*/
////////////////////////////////////////////////////////////////////////////////
////Add Methods After Inheritance
/*
A constructor function that inherits its prototype object from a supertype constructor
function can still have its own methods in addition to inherited methods.

For example, Bird is a constructor that inherit its prototype from Animal:
*/
/*
function Animal() {}
Animal.prototype.eat = function() {
  console.log("nom nom nom");
};
function Bird() {}
Bird.prototype = Object.create(Animal.prototype);
Bird.prototype.constructor = Bird;
*/
/*
Now instances of Bird will have both eat() and fly() methods:
*/
/*
let duck = new Bird();
duck.eat();
duck.fly();
*/
/*
duck.eat() would display the string nom nom nom in the console, and duck.fly()
would display the string I'm flying!.
*/
////////////////////////////////////////////////////////////////////////////////
/*
Add all necessary code so the Dog object inherits from Animal and the Dog's prototype
constructor is set to Dog. Then add a bark() method to the Dog object so that
beagle can both eat() and bark(). The bark() method should print Woof! to the console.
*/
/*
function Animal() {}
Animal.prototype.eat = function() {
  console.log("nom nom nom");
};

function Dog() {  }

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.bark = function() {
  console.log("Woof!");
}

let beagle = new Dog();
beagle.eat();
beagle.bark();
*/
////////////////////////////////////////////////////////////////////////////////
////Override Inherited Methods
/*
In previous lessons, you learned that an object can inherit its behavior (methods)
from another object by referencing its prototype object:
*/
//ChildObject.prototype = Object.create(ParentObject.prototype);
/*
Then the ChildObject received its own methods by chaining them onto its prototype:
*/
//ChildObject.prototype.methodName = function() {...};
/*
It's possible to override an inheirited method. It's done the same way -by adding
a method to ChildObject.prototype using the same method name as the one to override.
Here's an example of Bird overriding the eat() method inherited from Animal:
*/
/*
function Animal() {  }
Animal.prototype.eat = function() {
  return "nom nom nom";
};
function Bird() {  }

Bird.prototype = Object.create(Animal.prototype);
Bird.prototype.eat = function() {
  return "peck peck peck";
};
*/
/*
If you have an instance let duck = new Bird(); and you call duck.eat(), this is
how JavaScript looks for the method on the prototype chain of duck:
1. duck => Is eat() defined here? No
2. Bird => Is eat() defined here? => Yes. Execute it and stop searching.
3. Animal => eat() is also defined, but JavaScript stopped searching before reaching
   this level.
4. Object => JavaScript stopped searching before reaching this level.
*/
////////////////////////////////////////////////////////////////////////////////
/*
Override the fly() method for Penguin so that it returns the string Alas, this is
a flightless bird.
*/
/*
function Bird() {}

Bird.prototype.fly = function() {
  return "I am flying!";
};

function Penguin() {}
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;
Penguin.prototype.fly = function() {
  return "Alas, this is a flightless bird.";
}
*/
////////////////////////////////////////////////////////////////////////////////
