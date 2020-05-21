let startButton = document.getElementById('start')
let stopButton = document.getElementById('stop')

let foxesInput = document.getElementById('foxes')
let rabbitsInput = document.getElementById('rabbits')
let foodsInput = document.getElementById('foods')

// foxesInput.addEventListener("input", () =>{
//     if()
// })

startButton.addEventListener("click", () =>{
    initialize()
    //console.log("ran initializer")
})

stopButton.addEventListener("click", () =>{
    foxes = []
    rabbits = []
    foods = []
    foxesInput.value = 0
    rabbitsInput.value = 0
    foodsInput.value = 0
    initialize()
    //console.log(running)
})



