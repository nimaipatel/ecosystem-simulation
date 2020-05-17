class Animal {
    constructor() {
        this.x = random(0, width)
        this.y = random(0, height)
        this.health = random(0, 100)
        console.log(this.health)
    }

    show() {
        fill(255)
        rect(this.x, this.y, this.size, this.size)
        fill(100)
        text('1', this.x, this.y)
    }

    moveManual() {
        if (keyIsDown(UP_ARROW)){
            //console.log('up')
            this.y -= this.speed
        }else if (keyIsDown(DOWN_ARROW)){
            //console.log('down')
            this.y += this.speed
        }else if (keyIsDown(RIGHT_ARROW)){
            //console.log('Working')
            this.x += this.speed
        }else if (keyIsDown(LEFT_ARROW)){
            //console.log('Working')
            this.x -= this.speed
        }
    }
}