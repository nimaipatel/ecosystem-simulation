class Rabbit extends Animal {
    constructor(){
        super()
        this.emoji = '🐰'
        this.size = 13
        this.speed = 5
        this.nutrition = (this.health/100)*5 + 5
    }
}