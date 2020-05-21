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

    fillRandom() {
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                this.elements[i][j] = Math.random()
            }
        }
    }

    transpose() {
        let transpose = new Matrix(this.cols, this.rows)
        for (let i = 0; i < this.cols; i++) {
            for (let j = 0; j < this.rows; j++) {
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

    flatten() {
        return Matrix.arrayToMatrix(this.matrixToArray())
    }

    reshape(rows, cols) {
        //flatten to an array, could probably be done cleaner but im lazy lolz
        let array = this.matrixToArray()
        return Matrix.arrayToMatrix(array, rows, cols)
    }

    add(other) {
        if (this.cols !== this.cols || this.rows !== this.cols) {
            throw Error("Shapes of matrices that you are trying to add don't match")
        } else {
            for (let i = 0; i < this.rows; i++) {
                for (let j = 0; j < this.rows; j++) {
                    this.elements[i][j] += other.elements[i][j]
                }
            }

        }
    }

    static multiply(m1, m2) {
        if (m1.cols !== m2.rows) {
            throw Error("Columns of first matrix must match rows of second matrix")
        } else {
            let prod = new Matrix(m1.rows, m2.cols)
            for (let i = 0; i < m1.rows; i++) {
                for (let j = 0; j < m2.cols; j++) {
                    prod.elements[i][j] = 0
                    for (let k = 0; k < m1.cols; k++) {
                        prod.elements[i][j] += m1.elements[i][k] * m2.elements[k][j]
                    }
                }
            }
            return prod
        }
    }

}

