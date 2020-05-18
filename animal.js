class Animal {
    constructor() {
        this.x = random(5, width-5)
        this.y = random(5, height-5)
        //tweak health 
        this.health = randomGaussian(80, 5)
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
            if (this.health += food.nutrition > 100){
                this.health = 100
            } else{
                this.health += food.nutrition
            }
            food.x = food.y = null
            console.error(this.health)
        }
    }
}