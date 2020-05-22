class Rabbit extends Animal {
    constructor() {
        super()
        this.emoji = '🐰'
        this.size = 13
        this.speed = 5
        this.nutrition = (this.health / 100) * 5 + 5
    }

    mate(other) {
        if (dist(this.x, this.y, other.x, other.y) < 20) {
            let maxHealth = random([this.maxHealth, other.maxHealth])
            let radiusOfVision = random([this.radiusOfVision, other.radiusOfVision])
            let x = (this.x + other.x) / 2
            let y = (this.y + other.y) / 2
            let offspring = new Rabbit(x, y, maxHealth, radiusOfVision)
            rabbits.push(offspring)
            this.timeSinceMated = 0
        }
    }

    remove() {
        let index = rabbits.indexOf(this)
        rabbits.splice(index, 1)
    }

    checkRadiusOfVisionForFoxes() {
        let visibleFoxes = []
        for (let fox of foxes) {
            if (dist(fox.x, fox.y, this.x, this.y) < this.radiusOfVision) visibleFoxes.push(fox)
        }
        return visibleFoxes
    }

    checkRadiusOfVisionForRabbits() {
        let index = rabbits.indexOf(this)
        let rabbitsDiscludingSelf = [...rabbits]
        rabbitsDiscludingSelf.splice(index, 1)
        let visibleRabbits = []
        for (let rabbit of rabbitsDiscludingSelf) {
            if (dist(rabbit.x, rabbit.y, this.x, this.y) < this.radiusOfVision) { visibleRabbits.push(rabbit) }
        }
        return visibleRabbits
    }

    checkRadiusOfVisionForFoods() {
        let visibleFoods = []
        for (let food of foods) {
            if (dist(food.x, food.y, this.x, this.y) < this.radiusOfVision) visibleFoods.push(food)
        }
        return visibleFoods
    }
}