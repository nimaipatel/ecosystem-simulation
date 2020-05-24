class Fox extends Animal {
    constructor() {
        super()
        this.emoji = '🦊'
        this.speed = 5
        this.speed = 9
        //console.log(this.chromosome)
    }

    mate(other) {
        if (dist(this.x, this.y, other.x, other.y) < 20) {
            let maxHealth = random([this.maxHealth, other.maxHealth])
            let radiusOfVision = random([this.radiusOfVision, other.radiusOfVision])
            let x = (this.x + other.x) / 2
            let y = (this.y + other.y) / 2
            let offspring = new Fox(x, y, maxHealth, radiusOfVision)
            foxes.push(offspring)
            this.timeSinceMated = 0
        }
    }

    remove() {
        let index = foxes.indexOf(this)
        foxes.splice(index, 1)
    }

    checkRadiusOfVisionForFoxes() {
        let index = foxes.indexOf(this)
        let foxesDiscludingSelf = [...foxes]
        foxesDiscludingSelf.splice(index, 1)
        let visibleFoxes = []
        for (let fox of foxesDiscludingSelf) {
            if (dist(fox.x, fox.y, this.x, this.y) < this.radiusOfVision) { visibleFoxes.push(fox) }
        }
        return visibleFoxes
    }

    checkRadiusOfVisionForRabbits() {
        let visibleRabbits = []
        for (let rabbit of rabbits) {
            if (dist(rabbit.x, rabbit.y, this.x, this.y) < this.radiusOfVision) visibleRabbits.push(rabbit)
        }
        return visibleRabbits
    }
}