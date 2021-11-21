width = 200;
height = 400;
activeShape = 0;


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
/*
    rotation0 : [],
    rotation1 : [],
    rotation2 : [],
    rotation3 : [],
*/
Irotations = [
    [[0, 0, 1, 0], [0, 0, 1, 0], [0, 0, 1, 0], [0, 0, 1, 0]],
    [[0, 0, 0, 0], [0, 0, 0, 0], [1, 1, 1, 1], [0, 0, 0, 0]],
    [[0, 1, 0, 0], [0, 1, 0, 0], [0, 1, 0, 0], [0, 1, 0, 0]],
    [[0, 0, 0, 0], [1, 1, 1, 1], [0, 0, 0, 0], [0, 0, 0, 0]],
];

IlimtesEnY = [height - 80, height - 60, height - 80, height - 40];

Cuadrotations = [
    [[1, 1] [1, 1]],
    [[1, 1] [1, 1]],
    [[1, 1] [1, 1]],
    [[1, 1] [1, 1]],
];

CuadlimtesEnY = [height - 40, height - 40, height - 40, height - 40];

Srotations = [
    [[0, 1, 1], [1, 1, 0], [0, 0, 0]],
    [[1, 0, 0], [1, 1, 0], [0, 1, 0]],
    [[0, 1, 1], [1, 1, 0], [0, 0, 0]],
    [[1, 0, 0], [1, 1, 0], [0, 1, 0]],
];

SlimitesEnY = [height - 20, height - 40, height - 20, height - 40];

Zrotations = [
    [[1, 1, 0], [0, 1, 1], [0, 0, 0]],
    [[0, 1, 0], [1, 1, 0], [1, 0, 0]],
    [[1, 1, 0], [0, 1, 1], [0, 0, 0]],
    [[0, 1, 0], [1, 1, 0], [1, 0, 0]],
];

ZlimitesEnY = [height - 40, height - 60, height - 40, height - 60];

Trotations = [
    [[0, 1, 0], [1, 1, 1], [0, 0, 0]],
    [[0, 1, 0], [0, 1, 1], [0, 1, 0]],
    [[0, 0, 0], [1, 1, 1], [0, 1, 0]],
    [[0, 1, 0], [1, 1, 0], [0, 1, 0]],
];

TlimitesEnY = [height - 20, height - 40, height - 40, height - 40];



function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function newTetromino() {
    random = getRandomInt(0, 6);
    activeShape = random;
    switch (activeShape) {
        case 0:
            L1.draw();
            break;
        case 1:
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


