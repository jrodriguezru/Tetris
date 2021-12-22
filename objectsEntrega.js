let width = 200;
let height = 400;
let activeShape = 0;
let timer = 0;
let color = 1;
let pause = 0;
let movimiento = 0;
let canMoveLeft = 1;
let canMoveRight = 1;
let canMoveDown = 1;
let canMoveLeftOut = 1;
let canMoveRightOut = 1;
let canRotate = 1;
let blankRow = [];

let tableroControl = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];  

class Tetromino {
    constructor(rotations, limitesEnY, color, size) {
        this.rotations = rotations;
        this.rotation = 0;
        this.posEnX = 100;
        this.posEnY = 0;
        this.size = size;
        this.color = color;
        this.limiteY0 = limitesEnY[0];
        this.limiteY1 = limitesEnY[1];
        this.limiteY2 = limitesEnY[2];
        this.limiteY3 = limitesEnY[3];
    }

    updateTablero() {
        let validacionOutside = 0;
        let validacionInside = 0;
        let actualRotationOutside = this.rotation % 4;
        canMoveLeftOut == 1;
        canMoveDown == 1;
        canMoveRightOut == 1;
        canRotate == 1;
        for (let i = this.size - 1; i >= 0; i--) {
            validacionInside = 0;
            for (let j = 0; j < 3; j ++) {
                validacionInside = validacionInside + this.rotations[actualRotationOutside][i][j];
            }
            if(validacionInside == 0) {
                validacionOutside++;
            }
        }
        switch(movimiento) {
            case 1:
                let iOut1 = this.posEnY / 20;
                let jOut1 = this.posEnX / 20;
                let left = 0;
                let right = 0;
                let blank = 0;
                for (let i = iOut1, iMat = 0; i < iOut1 + this.size - validacionOutside; i++, iMat++) {
                    if (tableroControl[i][0] == 1) {
                        left++;
                    }
                    if (tableroControl[i][9] == 1) {
                        right++;
                    }
                    for (let j = jOut1, jMat = 0; j < jOut1 + this.size; j++, jMat++) {
                        let actualRotation = this.rotation % 4;
                        tableroControl[i][j] = this.rotations[actualRotation][iMat][jMat];
                    }
                }
                blankRow = [];
                let actualRotation = this.rotation % 4;
                for (let i = 0; i < this.size; i ++) {
                    for (let j = 0; j < this.size; j ++) {
                        if (this.rotations[actualRotation][j][i] == 0) {
                            blank ++;
                        }
                    }
                    if (blank == this.size) {
                        blankRow.push(1);
                    }
                    else {
                        blankRow.push(0);
                    }
                    blank = 0;
                }
                if (left != 0) {
                    canMoveLeft = 0;
                }
                else {
                    canMoveLeft = 1;
                }
                if (right != 0) {
                    canMoveRight = 0;
                }
                else {
                    canMoveRight = 1;
                }
                break;
            case 2:
            case 5:
            case 6:
                let iOut2 = this.posEnY / 20;
                let jOut2 = this.posEnX / 20;
                for (let i = iOut2, iMat = 0; i < iOut2 + this.size - validacionOutside; i++, iMat++) {
                    for (let j = jOut2, jMat = 0; j < jOut2 + this.size; j++, jMat++) {
                        let activeRotation = this.rotation % 4;
                        if (this.rotations[activeRotation][iMat][jMat] == 1) {
                            tableroControl[i][j] = 0;
                        }
                    }
                }
                break;
            case 3:
            case 4:
                let iOut3 = this.posEnY / 20;
                let jOut3 = this.posEnX / 20;
                for (let i = iOut3, iMat = 0; i < iOut3 + this.size - validacionOutside; i++, iMat++) {
                    for (let j = jOut3, jMat = 0; j < jOut3 + this.size; j++, jMat++) {
                        let activeRotation = this.rotation % 4;
                        if (this.rotations[activeRotation][iMat][jMat] == 1) {
                            tableroControl[i][j] = 0;
                        }
                    }
                }
                break;
        }
        // TODO: Reconstruir los for para no revisar los espacios que ya ocupa la figura. Este es un bug actual
        for (let i = 0; i < 3; i++) {
            let activeRotatiion = this.rotation % 4;
            let iOut = this.posEnY / 20;
            let jOut = this.posEnX / 20;
            switch (i) {
                case 0: //moveDown
                    let down = 1;
                    if (iOut == 20){
                        break;
                    }
                    for (let iIn = iOut + 1, iMat = 0; iIn < iOut + this.size - validacionOutside; iIn++, iMat++){
                        for (let jIn = jOut, jMat = 0; jIn < jOut + this.size; jIn++, jMat++){
                            if (this.rotations[activeRotatiion][iMat][jMat] == 1) {
                                if (tableroControl[iIn][jIn] == 1)
                                    down = 0;
                            }
                        }
                    }
                    if (down == 0) {
                        canMoveDown = 0;
                    }
                    break;
                case 1: //moveLeft
                    let left = 1;
                    if (jOut == 20) {
                        break;
                    }
                    for (let iIn = iOut, iMat = 0; iIn < iOut + this.size - validacionOutside; iIn++, iMat++){
                        for (let jIn = jOut + 1, jMat = 0; jIn < jOut + this.size; jIn++, jMat++){
                            if (this.rotations[activeRotatiion][iMat][jMat] == 1) {
                                if (tableroControl[iIn][jIn] == 1)
                                    left = 0;
                            }
                        }
                    }
                    if (left == 0) {
                        canMoveLeftOut = 0;
                    }
                    break;
                case 2: //moveRight
                    let right = 1;
                    if (jOut == 0) {
                        break;
                    }
                    for (let iIn = iOut, iMat = 0; iIn < iOut + this.size - validacionOutside; iIn++, iMat++){
                        for (let jIn = jOut - 1, jMat = 0; jIn < jOut + this.size; jIn++, jMat++){
                            if (this.rotations[activeRotatiion][iMat][jMat] == 1) {
                                if (tableroControl[iIn][jIn] == 1)
                                    right = 0;
                            }
                        }
                    }
                    if (right == 0) {
                        canMoveRightOut = 0;
                    }
                    break;
                case 3: //rotate
                    let rotate = 1;
                    let activeRotatiionR = (this.rotation + 1) % 4; 
                    for (let iIn = iOut, iMat = 0; iIn < iOut + this.size - validacionOutside; iIn++, iMat++){
                        for (let jIn = jOut, jMat = 0; jIn < jOut + this.size; jIn++, jMat++){
                            if (this.rotations[activeRotatiionR][iMat][jMat] == 1) {
                                if (tableroControl[iIn][jIn] == 1)
                                    rotate = 0;
                            }
                        }
                    }
                    if (rotate == 0) {
                        canRotate = 0;
                    }
                    break;
            }
        }
    }

    draw() {
        strokeWeight(2);
        stroke(0, 255);
        movimiento = 1;
        fill(this.color);
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
        this.updateTablero();
    }
    rotate() {
        if (canRotate == 1) {
            if (canMoveLeft == 0) {
                for (let i = 0; i < this.size; i++) {
                    if (blankRow[i] == 1) {
                        this.moveRight();
                    }
                    if (blankRow[i] == 0) {
                        break;
                    }
                }
            }
            if (canMoveRight == 0) {
                for (let i = this.size; i >= 0; i--) {
                    if (blankRow[i] == 1) {
                        this.moveLeft();
                    }
                    if (blankRow[i] == 0) {
                        break;
                    }
                }
            }
            movimiento = 2;
            this.updateTablero();
            this.rotation += 1;
        }
    }
    moveLeft() {
        if(canMoveLeft == 1 && canMoveLeftOut == 1) {
            movimiento = 3;
            this.updateTablero();
            this.posEnX -= 20;
        }   
    }
    moveRight() {
        if (canMoveRight == 1 && canMoveRightOut == 1) {
            movimiento = 4;
            this.updateTablero();
            this.posEnX += 20;
        }
    }
    moveDown() {
        if (canMoveDown == 1) {
            movimiento = 5;
            this.updateTablero();
            this.posEnY +=20;
        }
        
    }
    fallDown() {
        movimiento = 6;
        this.updateTablero();
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
                this.posEnY = this.limiteY3;
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
    for (let i = 0; i < width / 20; i++) {
        for (let j = 0; j < height / 20; j++){
          if (tableroControl[j][i] == 1){
            strokeWeight(2);
            stroke(0, 255);
            fill(0, 255);
            rect(i * 20, j * 20, 20, 20);
          } 
        }
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

let IlimitesEnY = [height - 80, height - 60, height - 80, height - 40];

let CuadradoRotations = [
    [[1, 1], [1, 1]],
    [[1, 1], [1, 1]],
    [[1, 1], [1, 1]],
    [[1, 1], [1, 1]],
]

let CuadlimitesEnY = [height - 40, height - 40, height - 40, height - 40];

let Srotations = [
    [[0, 1, 1], [1, 1, 0], [0, 0, 0]],
    [[1, 0, 0], [1, 1, 0], [0, 1, 0]],
    [[0, 1, 1], [1, 1, 0], [0, 0, 0]],
    [[1, 0, 0], [1, 1, 0], [0, 1, 0]],
];

let SlimitesEnY = [height - 40, height - 40, height - 40, height - 40];

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

let TlimitesEnY = [height - 40, height - 60, height - 60, height - 60];

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function newTetromino() {
    random = getRandomInt(0, 7);
    activeShape = random;
    switch(color) {
        case 0:
            switch (activeShape) {
                case 0:
                    L1 = new Tetromino(L1rotations, L1limitesEnY, colorPickerUC.color(), 3);
                    L1.draw();
                    break;
                case 1:
                    L2 = new Tetromino(L2rotations, L2limitesEnY, colorPickerUC.color(), 3);
                    L2.draw();
                    break;
                case 2:
                    I = new Tetromino(Irotations, IlimitesEnY, colorPickerUC.color(), 4);
                    I.draw();
                    break;
                case 3:
                    Cuad = new Tetromino(CuadradoRotations, CuadlimitesEnY, colorPickerUC.color(), 2);
                    Cuad.draw();
                    break;
                case 4:
                    S = new Tetromino(Srotations, SlimitesEnY, colorPickerUC.color(), 3);
                    S.draw();
                    break;
                case 5:
                    Z = new Tetromino(Zrotations, ZlimitesEnY, colorPickerUC.color(), 3);
                    Z.draw();
                    break;
                case 6:
                    T = new Tetromino(Trotations, TlimitesEnY, colorPickerUC.color(), 3);
                    T.draw();
                    break;
            }
            break;
        case 1:
            switch (activeShape) {
                case 0:
                    L1 = new Tetromino(L1rotations, L1limitesEnY, colorPickerL1.color(), 3);
                    L1.draw();
                    break;
                case 1:
                    L2 = new Tetromino(L2rotations, L2limitesEnY, colorPickerL2.color(), 3);
                    L2.draw();
                    break;
                case 2:
                    I = new Tetromino(Irotations, IlimitesEnY, colorPickerI.color(), 4);
                    I.draw();
                    break;
                case 3:
                    Cuad = new Tetromino(CuadradoRotations, CuadlimitesEnY, colorPickerCuad.color(), 2);
                    Cuad.draw();
                    break;
                case 4:
                    S = new Tetromino(Srotations, SlimitesEnY, colorPickerS.color(), 3);
                    S.draw();
                    break;
                case 5:
                    Z = new Tetromino(Zrotations, ZlimitesEnY, colorPickerZ.color(), 3);
                    Z.draw();
                    break;
                case 6:
                    T = new Tetromino(Trotations, TlimitesEnY, colorPickerT.color(), 3);
                    T.draw();
                    break;
            }
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
    if (finishTetromino() == true) {
        endTetromino();
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
            switch(T.rotation % 4) {
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

function pauseAction() {
    pause++;
}

function ucChange() {
    if (color == 1) {
        color = 0;
    }
    else if (color == 0) {
        color = 1
    }
}

function newGame() {
    let entrada = confirm("Se reiniciará la página creando un nuevo juego. Sin embargo, se eliminarán todas las personalizaciones que se hayan realizado. ¿Continuar?");
    if (entrada) {
        location.reload();
    }
}

function BGcolor() {
    if (color == 0) {
        return colorPickerUCBG.color();
    }
    else if (color == 1) {
        return colorPickerBG.color();
    }
}