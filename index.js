// A Class is a template of functionality
// Encapsulation of a data sctructure and functionality

const myArray = [1, 2, 3]
const myArray2 = new Array(1, 2, 3)

class Animal {
  constructor(type, sound, countOfLegs) {
    this.type = type
    this.sound = sound
    this.legs = countOfLegs
    this.location = 0
  }

  makeSomeNoise() {
    return this.sound
  }

  walk() {
    this.location++
  }
}

class Bird extends Animal {
  constructor(sound, countOfLegs, type = "Bird") {
    super(type, sound, countOfLegs)
  }

  flying() {
    this.location++
  }
}

const giraffe = new Animal("Mamel", "...", 4)
const cat = new Animal("cat", "miau", 4)
const sparrow = new Bird("chipchip", 2)
