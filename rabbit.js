class Rabbit extends Animal {
    constructor(){
        super()
        this.emoji = '🐰'
        this.size = 20
        this.speed = 10
        this.nutrition = (this.health/100)*5 + 5
    }
}