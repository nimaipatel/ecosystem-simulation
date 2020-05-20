let rabbits = []
let foxes = []
let foods = []
let numberOfRabbits = 10
let numberOfFoxes = 1
let numberOfFoods = 10

function setup() {
    rectMode(CENTER)
    colorMode(HSB, 360, 100, 100)

    let canvas = createCanvas(windowWidth - 300, windowHeight);
    canvas.parent('sketch')
    
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
    background(120, 70, 70);
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
