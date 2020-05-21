class Fox extends Animal {
    constructor() {
        super()
        this.emoji = '🦊'
        this.speed = 5
        this.speed = 9
    }

    remove(){
        let index = foxes.indexOf(this)
        foxes.splice(index, 1)
    }
}