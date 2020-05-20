let running = false

let foxes = []
let rabbits = []
let foods = []

function setup() {
    rectMode(CENTER)
    colorMode(HSB, 360, 100, 100)
    let canvas = createCanvas(windowWidth - 300, windowHeight);
    canvas.parent('sketch')

    let numberOfFoxes = foxesInput.value
    let numberOfRabbits = rabbitsInput.value
    let numberOfFoods = foodsInput.value
    
    for (let i = 0; i < numberOfRabbits; i++) {
        rabbits[i] = new Rabbit()
    }
    for (let i = 0; i < numberOfFoxes; i++) {
        foxes[i] = new Fox()
    }
    for (let i = 0; i < numberOfFoods; i++) {
        foods[i] = new Food()
    }
    console.log('ran setup')
    console.log(foxes)
}

function draw() {
    if (running) {
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
            for (rabbit of rabbits) {
                fox.eat(rabbit)
            }
        }
        //foxes[0].moveManual()

    } else {
        background(120, 70, 70);
        noLoop
    }
}