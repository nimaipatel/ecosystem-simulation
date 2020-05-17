class Rabbit extends Animal {
    constructor(){
        super()
        this.color = 'white'
        this.size = 10
        this.speed = 10
        this.nutrition = (this.health/100)*5 + 5
    }
}