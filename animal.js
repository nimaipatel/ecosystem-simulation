class Animal {
    constructor() {
        this.x = random(5, width - 5)
        this.y = random(5, height - 5)
        this.maxHealth = randomGaussian(80, 5)
        this.health = this.maxHealth * 0.8
        this.radiusOfVision = randomGaussian(50, 5)
        //console.log(this.health)
    }

    show() {
        strokeWeight(0)
        fill(51, 100, 100, 0.4)
        circle(this.x, this.y, this.radiusOfVision * 2)

        textAlign(CENTER)
        textSize(this.size)
        text(this.emoji, this.x, this.y)

        strokeWeight(0.5)
        fill(51)
        rect(this.x, this.y + 10, 25, 5, 5)

        strokeWeight(0.5)
        fill(90.5, 100, 49.4)
        rect(this.x - 25 * (1 - this.health / this.maxHealth), this.y + 10, 25 * this.health / this.maxHealth, 5, 5)
    }

    moveManual() {
        if (keyIsDown(UP_ARROW)) {
            //console.log('up')
            this.y -= this.speed
        } else if (keyIsDown(DOWN_ARROW)) {
            //console.log('down')
            this.y += this.speed
        } else if (keyIsDown(RIGHT_ARROW)) {
            //console.log('Working')
            this.x += this.speed
        } else if (keyIsDown(LEFT_ARROW)) {
            //console.log('Working')
            this.x -= this.speed
        }
    }

    moveNoThink() {
        if (this.y > height) {
            this.y = 5
        } else if (this.y < 0) {
            this.y = height - 5
        } else if (this.x > width) {
            this.x = 5
        } else if (this.x < 0) {
            this.x = width - 5
        } else {
            let direction = random(0, 360)
            this.x += this.speed * cos(direction)
            this.y += this.speed * sin(direction)
            console.log(direction, sin(direction))
        }
    }

    findClosest(foods) {
        let closest = foods[0]
        for (let i = 0; i < foods.length; i++) {
            if (dist(this.x, this.y, foods[i].x, foods[i].y) < dist(this.x, this.y, closest.x, closest.y)) {
                closest = foods[i]
            }
        }
        return closest
    }

    moveTowards(food) {
        if (this.y > height) {
            this.y = 5
        } else if (this.y < 0) {
            this.y = height - 5
        } else if (this.x > width) {
            this.x = 5
        } else if (this.x < 0) {
            this.x = width - 5
        } else {
            let direction = atan((food.y - this.y) / (food.x - this.x))
            this.x += this.speed * cos(direction)
            this.y += this.speed * sin(direction)
        }
    }

    eat(food) {
        if (dist(this.x, this.y, food.x, food.y) < 20) {
            //console.log('eating')
            if (this.health += food.nutrition > this.maxHealth) {
                this.health = this.maxHealth
            } else {
                this.health += food.nutrition
            }
            food.remove()
        }
    }
}