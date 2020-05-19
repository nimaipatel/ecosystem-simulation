class Matrix {
    constructor(rows, cols) {
        this.rows = rows
        this.cols = cols
        this.elements = []
        for (let i = 0; i < this.rows; i++) {
            this.elements.push(Array(this.cols).fill(0))
        }
    }

    copy() {
        let duplicate = new Matrix(this.rows, this.cols)
        for (i = 0; i < this.rows; i++) {
            for (j = 0; j < this.cols; j++) {
                m.elements[i][j] = this.elements[i][j]
            }
        }
        return duplicate
    }

    fillRandom(){
        for(let i=0; i<this.rows; i++){
            for(let j=0; j<this.cols; j++){
                this.elements[i][j] = Math.random()
            }
        }
    }

    transpose(){
        let transpose = new Matrix(this.cols, this.rows)
        for (let i = 0; i< this.cols; i++){
            for(let j=0; j< this.rows; j++){
                transpose.elements[i][j] = this.elements[j][i]
            }
        }
        return transpose
    }

    static arrayToMatrix(array, rows, cols) {

        if (!rows) rows = array.length
        if (!cols) cols = 1

        let matrix = new Matrix(rows, cols)

        if (rows === array.length && cols === 1) {
            array.forEach((element, index) => {
                matrix.elements[index][0] = array[index]
            })
        } else {
            if (rows * cols !== array.length) {
                throw console.error("Please enter dimensions that match with array");
            } else {
                let index = 0
                for (let i = 0; i < rows; i++) {
                    for (let j = 0; j < cols; j++) {
                        matrix.elements[i][j] += array[index]
                        index++
                    }
                }
            }
        }

        return matrix
    }

    matrixToArray() {
        //flattens matrix into 1-D array
        let array = []
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                array.push(this.elements[i][j])
            }
        }
        return array
    }

    flatten(){
        return Matrix.arrayToMatrix(this.matrixToArray())
    }

    reshape(rows, cols){
        //flatten to an array, could probably be done cleaner but im lazy lolz
        let array = this.matrixToArray()
        return Matrix.arrayToMatrix(array, rows, cols)
    }

}

let m = Matrix.arrayToMatrix([1,2,3,4,5,6], 2,3)
console.log(m.elements)
t = m.transpose()
console.log(t.elements)

