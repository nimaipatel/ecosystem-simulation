class Animal {
    constructor(x, y, maxHealth, radiusOfVision) {
        this.x = random(5, width - 5) || x
        this.y = random(5, height - 5) || y
        this.maxHealth = randomGaussian(80, 5) || maxHealth
        this.health = this.maxHealth * 0.8
        this.radiusOfVision = randomGaussian((width + height) / 8, 5) || radiusOfVision
        this.timeSinceMated = 0
        // this.fitness = this.maxHealth * 100 / 80 + this.radiusOfVision * 100 / width
        // this.chromosome = {
        //     maxHealth: this.maxHealth,
        //     radiusOfVision: this.radiusOfVision,
        //     fitness: this.fitness
        // }
    }

    show() {
        strokeWeight(0)
        fill(51, 100, 100, 0.1)
        circle(this.x, this.y, this.radiusOfVision * 2)

        textAlign(CENTER)
        textSize(this.size)
        fill(51, 100, 100, 1)
        text(this.emoji, this.x, this.y)

        strokeWeight(0.5)
        fill(51)
        rect(this.x, this.y + 10, 25, 5, 5, 5, 5)

        strokeWeight(0.5)
        fill(90.5, 100, 49.4)
        rect(this.x - 25 * (1 - this.health / this.maxHealth), this.y + 10, 25 * this.health / this.maxHealth, 5, 5, 5, 5)
    }

    findClosest(foods) {
        if (foods.length === 0) {
            return null
        } else {
            let closest = foods[0]
            for (let i = 0; i < foods.length; i++) {
                if (dist(this.x, this.y, foods[i].x, foods[i].y) < dist(this.x, this.y, closest.x, closest.y)) {
                    closest = foods[i]
                }
            }
            return closest
        }
    }

    moveNoThink() {
        let direction = random(0, 360)
        this.x = (this.x + this.speed * cos(direction) + width) % width
        this.y = (this.y + this.speed * sin(direction) + height) % height
    }

    moveAway(predator) {
        if (predator !== null) {
            let direction = angleBetween(predator.x, predator.y, this.x, this.y)
            this.x = (this.x + this.speed * cos(direction + 180) + width) % width
            this.y = (this.y + this.speed * sin(direction + 180) + height) % height
        } else {
            this.moveNoThink()
        }
        //this.health -= 0.1
    }

    moveTowards(food) {
        if (food !== null) {
            let direction = angleBetween(food.x, food.y, this.x, this.y)
            this.x = (this.x + this.speed * cos(direction) + width) % width
            this.y = (this.y + this.speed * sin(direction) + height) % height
        } else {
            this.moveNoThink()
        }
        //this.health -= 0.1
    }

    eat(food) {
        if (food !== null) {
            if (dist(this.x, this.y, food.x, food.y) < 20) {
                if (this.health += food.nutrition > this.maxHealth) {
                    this.health = this.maxHealth
                } else {
                    this.health += food.nutrition
                }
                food.remove()
            }
        }
    }
}

function angleBetween(x2, y2, x1, y1) {
    Y = y2 - y1
    X = x2 - x1
    alpha = Math.atan(abs(Y) / abs(X)) * (180 / Math.PI)
    if (X >= 0) {
        if (Y >= 0) {
            return alpha
        } else {
            return (-alpha)
        }
    } else {
        if (Y >= 0) {
            return (180 - alpha)
        } else {
            return (180 + alpha)
        }
    }
}

function sigmoid(z) {
    return 1 / (1 + Math.exp(-z))
}