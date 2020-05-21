class NeuralNetwork {
    constructor(...neurons) {
        this.neurons = neurons
        this.numberOfLayers = neurons.length
        this.layers =[]
        this.weights = []
        this.biases = []

        //creating layers, which are just matrices with activations as their elements
        // for(let neuron of neurons){
        //     this.layers.push(new Matrix(neuron, 1))
        // }

        //creating weights matirces and adding them to weights array
        for (let i=0; i < this.numberOfLayers - 1; i++){
            let weightMatrix = new Matrix(neurons[i+1], neurons[i])
            weightMatrix.fillRandom()
            this.weights.push(weightMatrix)
        }
        
        //creating biases matirces and adding them to biases array
        for (let i=0; i<this.numberOfLayers-1; i++){
            let biasMatrix = new Matrix(neurons[i+1], 1)
            biasMatrix.fillRandom()
            this.biases.push(biasMatrix)
        }
    }

    forwardPass(input){
        input = Matrix.arrayToMatrix(input)
        for(let i=0; i<this.numberOfLayers -1; i++){
            input = Matrix.multiply(this.weights[i], input)
            input.add(this.biases[i])
        }
        return input
    }
}

function sigmoid(z) {
    return 1(1+ Math.exp(-z))
}

function sigmoid_prime(z) {
    return sigmoid(z) * (1 - sigmoid(z))
}