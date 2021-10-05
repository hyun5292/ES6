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
