let rabbits = []
let foxes = []
let numberOfRabbits = 10
let numberOfFoxes = 1
let carrot

const height = 600
const width = 1000

function setup() {
    rectMode(RADIUS)
    createCanvas(width, height);
    for (let i=0; i<numberOfRabbits; i++){
        rabbits[i] = new Rabbit()
    }
    for (let i=0; i<numberOfFoxes; i++){
        foxes[i] = new Fox()
    }
    carrot = new Food()
}

function draw() {
    background(51);
    for (let i=0; i<numberOfRabbits; i++){
        rabbits[i].show()
    }
    for (let i=0; i<numberOfFoxes; i++){
        foxes[i].show()
    }

    foxes[0].moveManual()

}
