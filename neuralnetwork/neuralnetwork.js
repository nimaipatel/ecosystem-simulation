class NeuralNetwork {
    constructor(...neurons) {
        this.neurons = neurons
        this.numberOfLayers = neurons.length
        this.weights = []
        this.biases = []
        for (let i=0; i < this.numberOfLayers - 1; i++){
            let weightMatrix = new Matrix(neurons[i+1], neurons[i])
            weightMatrix.fillRandom()
            this.weights.push(weightMatrix)
        }
        //for(let i=0; i < this.numberOfLayers)

        // this.weigths_21 = new Matrix(this.hiddenNeurons, this.inputNeurons)
        // this.weigths_32 = new Matrix(this.outputNeurons, this.hiddenNeurons)
        // this.biases_2 = new Matrix(this.hiddenNeurons, 1)
        // this.biases_3 = new Matrix(this.outputNeurons, 1)

        // this.weigths_21.fillRandom()
        // this.weigths_32.fillRandom()
        // this.biases_2.fillRandom()
        // this.biases_3.fillRandom()

        console.log(this)
    }

    forwardPass(input){
        
    }
}

let m = new Matrix(2,3)