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
////Use a Mixin(그냥 믹신?) to Add Common Behavior Between Unrelated Objects
/*
As you have seen, behavior is shared through inheritance. However, there are cases
when inheritance is not the best solution. Inheritance does not work well for
unrelated objects like Bird and Airplane. They can both fly, but a Bird is not a
type of Airplane and vice versa(그 반대도 마찬가지).

For unrelated objects, it's better to use mixins. A mixin allows other objects to
use a collection of functions.
*/
/*
let flyMixin = function(obj) {
  obj.fly = function() {
    console.log("Flying, wooosh!");
  }
};
*/
/*
The flyMixin takes any object and gives it the fly method.
*/
/*
let bird = {
  name: "Donald",
  numLegs: 2
};

let plane = {
  model: "777",
  numPassengers: 524
};

flyMixin(bird);
flyMixin(plane);
*/
/*
Here bird and plane are passed into flyMixin, which then assings the fly function
to each object. Now bird and plane can both fly:
*/
//bird.fly();
//plane.fly();
/*
The console would display the string Flying, wooosh! twice, once for each .fly()
call.

Note how the mixin allows for the same fly method to be reused by unrelated objects
bird and plane.
*/
////////////////////////////////////////////////////////////////////////////////
/*
Create a mixin named glideMixin that defines a method named glide. Then use the
glideMixin to give both bird and boat the ability to glide.
*/
/*
let bird = {
  name: "Donald",
  numLegs: 2
};

let boat = {
  name: "Warrior",
  type: "race-boat"
};

let glideMixin = function(obj) {
  obj.glide = function() {

  }
}
glideMixin(bird);
glideMixin(boat);
*/
////////////////////////////////////////////////////////////////////////////////
////Use Closure to Protect Properties Within an Object from Being Modified Externally
/*
In the previous challenge, bird had a public property name. It is considered public
because it can be accessed and changed outside of bird's definition.
*/
//bird.name = "Duffy";
/*
Therefore, any part of your code can easily change the name of bird to any value.
Think about things like passwords and bank accounts being easily changeable by
any part of your codebase. That could cause a lot of issues.

The simplest way to make this public property private is by creating a variable
within the constructor function. This changes the scope of that variable to be
within the constructor function versus available globally. This way, the variable
can only be accessed and changed by methods also within the constructor function.
*/
/*
function Bird() {
  let hatchedEgg = 10;

  this.getHatchedEggCount = function() {
    return hatchedEgg;
  };
}
let ducky = new Bird();
ducky.getHatchedEggCount();
*/
/*
Here getHatchedEggCount is a privileged method, because it has access to the private
variable hatchedEgg. This is possible because hatchedEgg is declared in the same
context as getHatchedEggCount. In JavaScript, a function always has access to the
context in which it was created. This is called closure.
*/
////////////////////////////////////////////////////////////////////////////////
/*
Change how weight is delared in the Bird function so it is a private variable.
Then, create a method getWeight that returns the value of weight 15.
*/
/*
function Bird() {
  let weight = 15;
  this.getWeight = function() {
    return weight;
  };
}
let bird = new Bird();
bird.getWeight();
*/
////////////////////////////////////////////////////////////////////////////////
//Understand the Immediately Invoked Function Expression (IIFE)
/*
A common pattern in JavaScript is to execute a function as soon as it is declared:
*/
/*
(function() {
  console.log("Chirp, chirp!");
}) ();
*/
/*
This is an anonymous function expression that executes right away, and outputs
Chrip, chirp! immediately.

Note that the function has no name and is not stored in a variable. The two
parenthese() at the end of the function expression cause it to be immediately
executed or invoked. This pattern is known as an immediately invoked function
expression or IIFE.
*/
////////////////////////////////////////////////////////////////////////////////
/*
Rewrite the function makeNest and remove its call so instead it's an anonymous
immediately invoked function expression (IIFE);
*/
/*
(function() {
  console.log("A cozy nest is ready");
})();
*/
////////////////////////////////////////////////////////////////////////////////
////Use an IIFE to Create a Module
/*
An immediately invoked function expression (IIFE) is often used to group related
functionality into a single object or module. For example, an earlier challenge
defined two mixins:
*/
/*
function glideMixin(obj) {
  obj.glide = function() {
    console.log("Gliding on the water");
  };
}
function flyMixin(obj) {
  obj.fly = function() {
    console.log("Flying, wooosh!");
  };
}
*/
/*
We can group these mixins into a module as follows:
*/
/*
let motionModule = (function() {
  return {
    glideMixin: function(obj) {
      obj.glide = function() {
        console.log("Gliding on the water");
      };
    },
    flyMixin: function(obj) {
      obj.fly = function() {
        console.log("Flying, wooosh!");
      };
    }
  }
})();
*/
/*
Note that you have an immediately invoked function expression (IIFE) that returns
an object motionModule. This returned object contains all of the mixin behaviors
as properties of the object. The advantage of the module pattern is that all of
the motion behaviors can be packaged into a single object that can then be used
by other parts of our code. Here is an example using it.
*/
//motionModule.glideMixin(duck);
//duck.glide();
////////////////////////////////////////////////////////////////////////////////
/*
Create a module named funModule to wrap the two mixins isCuteMixin and singMixin.
funModule should return an object.
*/
/*
let isCuteMixin = function(obj) {
  obj.isCute = function() {
    return true;
  };
};
let singMixin = function(obj) {
  obj.sing = function() {
    console.log("Singing to an awesome tune");
  };
};
//정답
let funModule = (function() {
  return {
    isCuteMixin: function(obj) {
      obj.isCute = function() {
        return true;
      };
    },
    singMixin: function(obj) {
      obj.sing = function() {
        console.log("Singing to an awesome tune");
      };
    }
  }
})();
*/
