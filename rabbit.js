class Rabbit extends Animal {
    constructor(){
        super()
        this.emoji = '🐰'
        this.size = 13
        this.speed = 5
        this.nutrition = (this.health/100)*5 + 5
    }

    remove(){
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
        let visibleRabbits = []
        for (let rabbit of rabbits) {
            if (dist(rabbit.x, rabbit.y, this.x, this.y) < this.radiusOfVision) visibleRabbits.push(rabbit)
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