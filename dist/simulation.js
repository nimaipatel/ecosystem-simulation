let foxes = []
let rabbits = []
let foods = []

function setup() {
    angleMode(DEGREES)
    rectMode(CENTER)
    colorMode(HSB, 360, 100, 100)
    frameRate(10)
    let canvas = createCanvas(windowWidth - 300, windowHeight);
    canvas.parent('sketch')
    //initialize()
    console.log('ran setup')
}

function initialize(){
    console.log('starting init')
    let numberOfFoxes = foxesInput.value
    let numberOfRabbits = rabbitsInput.value
    let numberOfFoods = foodsInput.value

    for (let i = 0; i < numberOfFoxes; i++) {
        foxes[i] = new Fox()
    }
    for (let i = 0; i < numberOfRabbits; i++) {
        rabbits[i] = new Rabbit()
    }
    for (let i = 0; i < numberOfFoods; i++) {
        foods[i] = new Food()
    }
    console.log('completed init')
}

function draw() {
    //console.log(frameRate())
    background(120, 70, 70);

    for (food of foods) {
        food.show()
    }

    for (rabbit of rabbits) {
        rabbit.show()
        for (food of foods) {
            rabbit.eat(food)
        }
    }

    for (fox of foxes) {
        fox.show()
        let prey = fox.findClosest(rabbits)
        fox.moveTowards(prey)
        fox.eat(prey)
    }
}