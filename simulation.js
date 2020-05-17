let rabbits = []
let foxes = []
let foods = []
let numberOfRabbits = 10
let numberOfFoxes = 1
let numberOfFoods = 10


const height = 600
const width = 1000

function setup() {
    createCanvas(width, height);
    for (let i = 0; i < numberOfRabbits; i++) {
        rabbits[i] = new Rabbit()
    }
    for (let i = 0; i < numberOfFoxes; i++) {
        foxes[i] = new Fox()
    }
    for (let i = 0; i < numberOfFoods; i++) {
        foods[i] = new Food()
    }
}

function draw() {
    background(51);
    for (let i = 0; i < numberOfRabbits; i++) {
        rabbits[i].show()
    }
    for (let i = 0; i < numberOfFoxes; i++) {
        foxes[i].show()
    }
    for (let i = 0; i < numberOfFoods; i++) {
        foods[i].show()
    }

    for (rabbit of rabbits) {
        for (food of foods) {
            rabbit.eat(food)
        }
    }

    for (fox of foxes){
        for(rabbit of rabbits){
            fox.eat(rabbit)
        }
    }

    foxes[0].moveManual()
}
