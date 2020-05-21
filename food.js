class Food {
    constructor(){
        //tweak nutrition 
        this.emoji = '🥕'
        this.size = 13
        this.nutrition = randomGaussian(5,2)
        this.x = random(5, width-5)
        this.y = random(5, height-5)
    }

    show() {
        textSize(this.size)
        text(this.emoji, this.x, this.y)
    }
}