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

function initialize() {
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
        if (rabbit.health < 0) rabbit.remove()
        rabbit.show()
        rabbit.timeSinceMated++
        if (rabbit.checkRadiusOfVisionForFoxes.length === 0) {
            let food = rabbit.findClosest(rabbit.checkRadiusOfVisionForFoods())
            rabbit.moveTowards(food)
            rabbit.eat(food)
        } else {
            let predator = rabbit.findClosest(rabbit.checkRadiusOfVisionForFoxes())
            rabbit.moveAway(predator)
        }
        if (rabbit.timeSinceMated > 1000) {
            let mate = rabbit.findClosest(rabbit.checkRadiusOfVisionForRabbits())
            if (mate !== null) {
                rabbit.moveTowards(mate)
                rabbit.mate(mate)
            }
        }
    }

    for (fox of foxes) {
        if (fox.health < 0) fox.remove()
        fox.show()
        fox.timeSinceMated++
        let prey = fox.findClosest(fox.checkRadiusOfVisionForRabbits())
        fox.moveTowards(prey)
        fox.eat(prey)
        if (fox.timeSinceMated > 1000) {

            let mate = fox.findClosest(fox.checkRadiusOfVisionForFoxes())
            if (mate !== null) {
                fox.moveTowards(mate)
                fox.mate(mate)
            }
        }
    }

}