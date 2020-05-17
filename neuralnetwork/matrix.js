class Matrix {
    constructor(rows, cols){
        this.rows = rows
        this.cols = cols
        this.elements = []
        for(let i=0; i<this.rows; i++){
            this.elements.push(Array(this.cols).fill(0))
        }
    }

    elementWiseMultiply(secondMatrix){
         
        return newMatrix         
    }
}

let m = new Matrix(2,3)
console.log(m)