class NeuralNetwork {
    constructor(...neurons) {
        this.neurons = neurons
        this.numberOfLayers = neurons.length
        this.weights = []
        this.biases = []
        for (let i=0; i < this.numberOfLayers - 1; i++){
            let weightMatrix = new Matrix(neurons[i], neurons[i+1])
            weightMatrix.fillRandom()
            this.weights.push(weightMatrix)
        }

        for (let i=0; i<this.numberOfLayers-1; i++){
            let biasMatix = new Matrix(1, neurons[i+1])
        }
    }

    forwardPass(input){
        
    }
}

function sigmoid(z) {
    return 1(1+ Math.exp(-z))
}

function sigmoid_prime(z) {
    return sigmoid(z) * (1 - sigmoid(z))
}