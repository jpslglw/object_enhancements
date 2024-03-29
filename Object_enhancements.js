// Same keys and values
function createInstructor(firstName, lastName){
    return {
      firstName,
      lastName
    }
  }

// Computed Property Names
var favoriteNumber = 42;

var instructor = {
  firstName: "Colt",
  [favoriteNumber]: "That is my favorite!"
}

// Object Methods
var instructor = {
    firstName: "Colt",
    sayHi(){
      return "Hi!";
    },
    sayBye(){
      return this.firstName + " says bye!";
    }
  }

// createAnimal function
function createAnimal(species,fct,str) {
    return {
        species,
        [fct]: function(){
            return str;
        }
    };
}
