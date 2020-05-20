let startButton = document.getElementById('start')
let stopButton = document.getElementById('stop')

let foxesInput = document.getElementById('foxes')
let rabbitsInput = document.getElementById('rabbits')
let foodsInput = document.getElementById('foods')

foxesInput.value = 5

startButton.addEventListener("click", () =>{
    running = true
    //numberOfFoxes = foxesInput.value
    //numberOfRabbits = rabbitsInput.value
    loop()
})

stopButton.addEventListener("click", () =>{
    running = false
    //console.log(running)
})



