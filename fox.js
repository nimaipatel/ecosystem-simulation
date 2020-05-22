class Fox extends Animal {
    constructor() {
        super()
        this.emoji = '🦊'
        this.speed = 5
        this.speed = 9
    }

    remove() {
        let index = foxes.indexOf(this)
        foxes.splice(index, 1)
    }

    checkRadiusOfVisionForRabbits() {
        let visibleRabbits = []
        for (let rabbit of rabbits) {
            if (dist(rabbit.x, rabbit.y, this.x, this.y) < this.radiusOfVision) visibleRabbits.push(rabbit)
        }
        return visibleRabbits
    }
}