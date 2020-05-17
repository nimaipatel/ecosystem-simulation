class Food {
    constructor(){
        //tweak nutrition 
        this.nutrition = randomGaussian(5,2)
        this.x = random(5, width-5)
        this.y = random(5, height-5)
    }

    show(){
        fill('green')
        rect(this.x, this.y, 10,10)
    }
}