class Animal {
    constructor() {
        this.x = random(5, width-5)
        this.y = random(5, height-5)
        this.maxHealth = randomGaussian(80, 5)
        this.health = this.maxHealth*0.8
        console.log(this.health)
    }

    show() {
        textSize(this.size)
        text(this.emoji, this.x, this.y)
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

    eat(food) {
            if (dist(this.x, this.y, food.x, food.y) < 20) {
            //console.log('eating')
            if (this.health += food.nutrition > this.maxHealth){
                this.health = this.maxHealth
            } else{
                this.health += food.nutrition
            }
            food.x = food.y = null
        }
    }
}