class Food {
    constructor(){
        this.nutriton = random(0, 100)
        this.x = random(0, width)
        this.y = random(0, height)
    }

    show(){
        fill(255)
        rect(this.x, this.y, 10,10)
    }
}