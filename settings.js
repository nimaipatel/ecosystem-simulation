let startButton = document.getElementById('start')
let stopButton = document.getElementById('stop')

let foxesInput = document.getElementById('foxes')
let rabbitsInput = document.getElementById('rabbits')
let foodsInput = document.getElementById('foods')

let collapsibe = document.querySelector('.collapsible')
let more_settings = document.querySelector('.more-settings')

collapsibe.addEventListener("click", () => {
    if (more_settings.style.display === 'none') {
        more_settings.style.display = 'grid'
    } else {
        more_settings.style.display = 'none'
    }
})

startButton.addEventListener("click", () => {
    initialize()
})

stopButton.addEventListener("click", () => {
    foxes = []
    rabbits = []
    foods = []
    foxesInput.value = 0
    rabbitsInput.value = 0
    foodsInput.value = 0
    initialize()
    foxesInput.value = ''
    rabbitsInput.value = ''
    foodsInput.value = ''
})



