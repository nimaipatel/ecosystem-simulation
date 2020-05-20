let startButton = document.getElementById('start')
let stopButton = document.getElementById('stop')

let foxesInput = document.getElementById('foxes')
let rabbitsInput = document.getElementById('rabbits')
let carrotsInput = document.getElementById('carrots')

startButton.addEventListener("click", () =>{
    running = true
    //console.log(running)
})

stopButton.addEventListener("click", () =>{
    running = false
    //console.log(running)
})

