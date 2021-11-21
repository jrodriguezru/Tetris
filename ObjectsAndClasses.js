let width = 200;
let height = 400;
let activeShape = 0;
let timer = 0;


class Tetromino {
    constructor(rotations, limitesEnY, color1, color2, color3, size) {
        this.rotations = rotations;
        this.rotation = 0;
        this.posEnX = 100;
        this.posEnY = 0;
        this.size = size;
        this.color1 = color1;
        this.color2 = color2;
        this.color3 = color3;
        this.limiteY0 = limitesEnY[0];
        this.limiteY1 = limitesEnY[1];
        this.limiteY2 = limitesEnY[2];
        this.limiteY3 = limitesEnY[3];
    }

    draw() {
        strokeWeight(2);
        stroke(0, 255);
        fill(this.color1, this.color2, this.color3);
        for (let i = 0; i < this.size; i++) {
            for (let j = 0; j < this.size; j++) {
                switch(this.rotation % 4) {
                    case 0:
                        if (this.rotations[0][j][i] == 1) {
                            rect(this.posEnX + (i*20), this.posEnY + (j*20), 20, 20);
                        }
                        break;
                    case 1:
                        if (this.rotations[1][j][i] == 1) {
                            rect(this.posEnX + (i*20), this.posEnY + (j*20), 20, 20);
                        }
                        break;
                    case 2:
                        if (this.rotations[2][j][i] == 1) {
                            rect(this.posEnX + (i*20), this.posEnY + (j*20), 20, 20);
                        }
                        break;
                    case 3:
                        if (this.rotations[3][j][i] == 1) {
                            rect(this.posEnX + (i*20), this.posEnY + (j*20), 20, 20);
                        }
                    break;
                }
            }
        }
    }
    rotate() {
        this.rotation += 1;
    }
    moveLeft() {
        this.posEnX -= 20;   
    }
    moveRight() {
        this.posEnX += 20;
    }
    moveDown() {
        this.posEnY +=20;
    }
    fallDown() {
        switch (this.rotation % 4) {
            case 0:
                this.posEnY = this.limiteY0;
                break;
            case 1:
                this.posEnY = this.limiteY1;
                break;
            case 2:
                this.posEnY = this.limiteY2;
                break;
            case 3:
                this.posEnY = this.limteeY3;
                break;
        }
    }
}

function tablero() {
    stroke(0, 100);
    strokeWeight(1);
    for (let i = 0; i <= width; i += 20) {
      line(i, 0, i, height);
    }
    for (let i = 0; i <= height; i += 20) {
      line(0, i, width, i);
    }
}

let L1rotations = [
    [[1, 0, 0], [1, 0, 0], [1, 1, 0]],
    [[1, 1, 1], [1, 0, 0], [0, 0, 0]],
    [[0, 1, 1], [0, 0, 1], [0, 0, 1]],
    [[0, 0, 0], [0, 0, 1], [1, 1, 1]],
];

let L1limitesEnY = [height - 60, height - 40, height - 60, height - 60];

let L2rotations = [
    [[0, 0, 1], [0, 0, 1], [0, 1, 1]],
    [[0, 0, 0], [1, 0, 0], [1, 1, 1]],
    [[1, 1, 0], [1, 0, 0], [1, 0, 0]],
    [[1, 1, 1], [0, 0, 1], [0, 0, 0]],
];

let L2limitesEnY = [height - 60, height, 60, height - 60, height - 40];

let Irotations = [
    [[0, 0, 1, 0], [0, 0, 1, 0], [0, 0, 1, 0], [0, 0, 1, 0]],
    [[0, 0, 0, 0], [0, 0, 0, 0], [1, 1, 1, 1], [0, 0, 0, 0]],
    [[0, 1, 0, 0], [0, 1, 0, 0], [0, 1, 0, 0], [0, 1, 0, 0]],
    [[0, 0, 0, 0], [1, 1, 1, 1], [0, 0, 0, 0], [0, 0, 0, 0]],
];

let IlimtesEnY = [height - 80, height - 60, height - 80, height - 40];

let Cuadrotations = [
    [[1, 1] [1, 1]],
    [[1, 1] [1, 1]],
    [[1, 1] [1, 1]],
    [[1, 1] [1, 1]],
];

let CuadlimtesEnY = [height - 40, height - 40, height - 40, height - 40];

let Srotations = [
    [[0, 1, 1], [1, 1, 0], [0, 0, 0]],
    [[1, 0, 0], [1, 1, 0], [0, 1, 0]],
    [[0, 1, 1], [1, 1, 0], [0, 0, 0]],
    [[1, 0, 0], [1, 1, 0], [0, 1, 0]],
];

let SlimitesEnY = [height - 20, height - 40, height - 20, height - 40];

let Zrotations = [
    [[1, 1, 0], [0, 1, 1], [0, 0, 0]],
    [[0, 1, 0], [1, 1, 0], [1, 0, 0]],
    [[1, 1, 0], [0, 1, 1], [0, 0, 0]],
    [[0, 1, 0], [1, 1, 0], [1, 0, 0]],
];

let ZlimitesEnY = [height - 40, height - 60, height - 40, height - 60];

let Trotations = [
    [[0, 1, 0], [1, 1, 1], [0, 0, 0]],
    [[0, 1, 0], [0, 1, 1], [0, 1, 0]],
    [[0, 0, 0], [1, 1, 1], [0, 1, 0]],
    [[0, 1, 0], [1, 1, 0], [0, 1, 0]],
];

let TlimitesEnY = [height - 20, height - 40, height - 40, height - 40];



function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function newTetromino() {
    random = getRandomInt(0, 6);
    activeShape = random;
    switch (activeShape) {
        case 0:
            L1 = new Tetromino(L1rotations, L1limitesEnY, 255, 140, 0, 3);
            L1.draw();
            break;
        case 1:
            L2 = new Tetromino(L2rotations, L2limitesEnY, 38, 0, 231, 3);
            L2.draw();
            break;
        case 2:
            I = new Tetromino(Irotations, IlimitesEnY, 0, 255, 255, 4);
            I.draw();
            break;
        case 3:
            Cuad = new Tetromino(Cuadrotations, CuadlimitesEnY, 255, 255, 0, 2);
            Cuad.draw();
            break;
        case 4:
            S = new Tetromino(Srotations, SlimitesEnY, 0, 255, 0, 3);
            S.draw();
            break;
        case 5:
            Z = new Tetromino(Zrotations, ZlimitesEnY, 255, 0, 0, 3);
            Z.draw();
            break;
        case 6:
            T = new Tetromino(Trotations, TlimitesEnY, 200, 50, 250, 3);
            T.draw();
            break;
    }
}

function drawActiveTetromino() {
    switch (activeShape) {
        case 0: 
            L1.draw();
            break;
        case 1:
            L2.draw();
            break;
        case 2:
            I.draw();
            break;
        case 3:
            Cuad.draw();
            break;
        case 4:
            S.draw();
            break;
        case 5:
            Z.draw();
            break;
        case 6:
            T.draw();
            break;
    }
}

function autoMoveDown() {
    if (timer % 40 == 0) {
        switch (activeShape) {
            case 0:
                L1.moveDown();
                break;
            case 1:
                L2.moveDown();
                break;
            case 2:
                I.moveDown();
                break;
            case 3:
                Cuad.moveDown();
                break;
            case 4:
                S.moveDown();
                break;
            case 5:
                Z.moveDown();
                break;
            case 6:
                T.moveDown();
                break;
        }
        if (finishTetromino() == true) {
            endTetromino();
        }
    }
}

function finishTetromino() {
    switch(activeShape) {
        case 0:
            switch(L1.rotation % 4) {
                case 0:
                    return (L1.posEnY == L1.limiteY0);
                    break;
                case 1:
                    return (L1.posEnY == L1.limiteY1);
                    break;
                case 2:
                    return (L1.posEnY == L1.limiteY2);
                    break;
                case 3:
                    return (L1.posEnY == L1.limiteY3);
                    break;   
            }
            break;
        case 1:
            switch(L2.rotation % 4) {
                case 0:
                    return (L2.posEnY == L2.limiteY0);
                    break;
                case 1:
                    return (L2.posEnY == L2.limiteY1);
                    break;
                case 2:
                    return (L2.posEnY == L2.limiteY2);
                    break;
                case 3:
                    return (L2.posEnY == L2.limiteY3);
                    break;
            }
            break;
        case 2:
            switch(I.rotation % 4) {
                case 0:
                    return (I.posEnY == I.limiteY0);
                    break;
                case 1:
                    return (I.posEnY == I.limiteY1);
                    break;
                case 2:
                    return (I.posEnY == I.limiteY2);
                    break;
                case 3:
                    return (I.posEnY == I.limiteY3);
                    break;
            }
            break;
        case 3:
            switch(Cuad.rotation % 4) {
                case 0:
                    return (Cuad.posEnY == Cuad.limiteY0);
                    break;
                case 1:
                    return (Cuad.posEnY == Cuad.limiteY1);
                    break;
                case 2:
                    return (Cuad.posEnY == Cuad.limiteY2);
                    break;
                case 3:
                    return (Cuad.posEnY == Cuad.limiteY3);
                    break;
            }
            break;
        case 4:
            switch(S.rotation % 4) {
                case 0:
                    return (S.posEnY == S.limiteY0);
                    break;
                case 1:
                    return (S.posEnY == S.limiteY1);
                    break;
                case 2:
                    return (S.posEnY == S.limiteY2);
                    break;
                case 3:
                    return (S.posEnY == S.limiteY3);
                    break;
            }
            break;
        case 5: 
            switch(Z.rotation % 4) {
                case 0:
                    return (Z.posEnY == Z.limiteY0);
                    break;
                case 1:
                    return (Z.posEnY == Z.limiteY1);
                    break;
                case 2:
                    return (Z.posEnY == Z.limiteY2);
                    break;
                case 3:
                    return (Z.posEnY == Z.limiteY3);
                    break;
            }
            break;
        case 6:
            switch(T.rotations % 4) {
                case 0:
                    return (T.posEnY == T.limiteY0);
                    break;
                case 1:
                    return (T.posEnY == T.limiteY1);
                    break;
                case 2:
                    return (T.posEnY == T.limiteY2);
                    break;
                case 3:
                    return (T.posEnY == T.limiteY3);
                    break;
            }
            break;
    }
}

function endTetromino() {
    newTetromino();
}

