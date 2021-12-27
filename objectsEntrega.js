// TODO: Bug random ficha se detuvo en medio del mapa.
// TODO: Line cleared, tambiém mostrar esta variable en el game over.
// TODO: Background

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
let onHold = -1;
let onHoldChanging;
let setActive = 0;
let cu1, cu2, cu3;

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
        
        
        for (let i = this.size - 1; i >= 0; i--) {
            validacionInside = 0;
            for (let j = 0; j < 3; j ++) {
                validacionInside = validacionInside + this.rotations[actualRotationOutside][i][j];
            }
            if(validacionInside == 0) {
                validacionOutside++;
            }
            else if (validacionInside != 0) {
                break;
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
                        if (this.rotations[actualRotation][iMat][jMat] == 1) {
                            tableroControl[i][j] = this.rotations[actualRotation][iMat][jMat];
                        }
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
                canRotate == 1;
                canMoveDown == 1;
                let controlRotation = 0;
                let controlMoveDown = 0;
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
                if (movimiento == 2) {
                    controlRotation = 2;
                    controlMoveDown = 1;
                }
                else if (movimiento == 5 || movimiento == 6) {
                    controlRotation = 1;
                    controlMoveDown = 2;
                }
                let down = 1;
                if (iOut2 != 20){
                    for (let iIn = iOut2 + controlMoveDown, iMat = 0; iIn < iOut2 + this.size - validacionOutside + controlMoveDown && iIn < 20; iIn++, iMat++){
                        for (let jIn = jOut2, jMat = 0; jIn < jOut2 + this.size; jIn++, jMat++){
                            if (this.rotations[actualRotationOutside][iMat][jMat] == 1) {
                                if (tableroControl[iIn][jIn] == 1)
                                    down = 0;
                            }
                        }
                    }
                }
                if (down == 0) {
                    canMoveDown = 0;
                }
                let limiteInferior = 0;
                switch (this.rotation % 4) {
                    case 0:
                        limiteInferior = this.limiteY0;
                        break;
                    case 1:
                        limiteInferior = this.limiteY1;
                        break;
                    case 2:
                        limiteInferior = this.limiteY2;
                        break;
                    case 3:
                        limiteInferior = this.limiteY3;
                        break;
                    default:
                        limiteInferior = height;
                        break;
                }
                if (this.posEnY == limiteInferior - 20 || this.posEnY > limiteInferior - 20) {
                    canMoveDown = 0;
                }
                let rotate = 1;
                    let activeRotatiionR = (this.rotation + controlRotation) % 4; 
                    for (let iIn = iOut2, iMat = 0; iIn < iOut2 + this.size - validacionOutside; iIn++, iMat++){
                        for (let jIn = jOut2, jMat = 0; jIn < jOut2 + this.size; jIn++, jMat++){
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
            case 3:
            case 4:
                canMoveLeftOut == 1;
                canMoveRightOut == 1;
                let controlRight = 0;
                let controlLeft = 0;
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
                if (movimiento == 3){
                    controlLeft = 2;
                    controlRight = 1;
                }
                else if (movimiento == 4) {
                    controlLeft = 1;
                    controlRight = 2;
                }
                let leftC = 1;
                if (jOut3 != 20) {
                    for (let iIn = iOut3, iMat = 0; iIn < iOut3 + this.size - validacionOutside; iIn++, iMat++){
                        for (let jIn = jOut3 - controlLeft, jMat = 0; jIn < jOut3 + this.size; jIn++, jMat++){
                            if (this.rotations[actualRotationOutside][iMat][jMat] == 1) {
                                if (tableroControl[iIn][jIn] == 1)
                                    leftC = 0;
                            }
                        }
                    }
                    if (leftC == 0) {
                        canMoveLeftOut = 0;
                    }
                }
                let rightC = 1;
                if (jOut3 != 0) {
                    for (let iIn = iOut3, iMat = 0; iIn < iOut3 + this.size - validacionOutside; iIn++, iMat++){
                        for (let jIn = jOut3 + controlRight, jMat = 0; jIn < jOut3 + this.size; jIn++, jMat++){
                            if (this.rotations[actualRotationOutside][iMat][jMat] == 1) {
                                if (tableroControl[iIn][jIn] == 1)
                                    rightC = 0;
                            }
                        }
                    }
                }
                if (rightC == 0) {
                    canMoveRightOut = 0;
                }
                break;
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
        while (canMoveDown == 1){
            this.moveDown();
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
            fill(100, 255);
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

let L2limitesEnY = [height - 60, height - 60, height - 60, height - 40];

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
    canMoveDown = 1;
    canMoveLeftOut = 1;
    canMoveLeftOut = 1;
    canMoveRight = 1;
    canMoveRightOut = 1;
    canRotate = 1;
    random = getRandomInt(0, 7);
    activeShape = cu1;
    cu1 = cu2;
    cu2 = cu3;
    cu3 = random;
    if (validacionTablero()) {
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
    else {
        gameOver();
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
    if (canMoveDown == 0) {
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

function onHoldChange() {
    movimiento = 5;
    switch(activeShape) {
        case 0:
            L1.updateTablero();
            break;
        case 1:
            L2.updateTablero();
            break;
        case 2:
            I.updateTablero();
            break;
        case 3:
            Cuad.updateTablero();
            break;
        case 4:
            S.updateTablero();
            break;
        case 5:
            Z.updateTablero();
            break;
        case 6:
            T.updateTablero();
            break;
            
    }
    if (onHold != -1) {
        onHoldChanging = activeShape;
        activeShape = onHold;
        switch(color) {
            case 0:
                switch (onHold) {
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
                switch (onHold) {
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
        onHold = onHoldChanging;
    }
    else {
        onHold = activeShape;
        newTetromino();
    }
}


// FAlSE = GAME OVER
function validacionTablero() {
    let validacionGameOver = 0;
    for(let j = 3; j < 9; j++){
        if(tableroControl[1][j] == 1){
            validacionGameOver = 1;
        }
    }
    if (validacionGameOver == 1) {
        return false;
    }
    else {
        return true;
    }
}

function gameOver() {
    let entrada = confirm("Game Over.\nPara volver a jugar debe recargar la página, creando un nuevo juego.\nCon esto, se eliminarán también todas las personalizaciones que se hayan realizado. ¿Continuar?");
    if (entrada) {
        location.reload();
    }
}

function settings() {
    setActive = 1;
}

function regresar() {
    setActive = 0;
}

function instructions() {
    setActive = 2;
}

function startGame() {
    let random = 0;
    for (let i = 0; i < 3; i++) {
        random = getRandomInt(0, 7);
        switch(i) {
            case 0:
                cu1 = random;
                break;
            case 1:
                cu2 = random;
                break;
            case 2:
                cu3 = random;
                break;
        }
    }
    newTetromino();
}

function drawOnHold() {
    canvasLeft.fill(colorPickerOH.color());
    switch(onHold) {
        case 0:
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {
                    if (L1rotations[0][j][i] == 1) {
                        canvasLeft.rect(20 + (i*20), 20 + (j*20), 20, 20);
                    }
                }
            }
            break;
        case 1:
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {
                    if (L2rotations[0][j][i] == 1) {
                        canvasLeft.rect(20 + (i*20), 20 + (j*20), 20, 20);
                    }
                }
            }
            break;
        case 2:
            for (let i = 0; i < 4; i++) {
                for (let j = 0; j < 4; j++) {
                    if (Irotations[0][j][i] == 1) {
                        canvasLeft.rect((j*20), (i*20), 20, 20);
                    }
                }
            }
            break;
        case 3:
            for (let i = 0; i < 2; i++) {
                for (let j = 0; j < 2; j++) {
                    if (CuadradoRotations[0][j][i] == 1) {
                        canvasLeft.rect(20 + (i*20), 20 + (j*20), 20, 20);
                    }
                }
            }
            break;
        case 4:
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {
                    if (Srotations[0][j][i] == 1) {
                        canvasLeft.rect(20 + (i*20), 20 + (j*20), 20, 20);
                    }
                }
            }
            break;
        case 5:
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {
                    if (Zrotations[0][j][i] == 1) {
                        canvasLeft.rect(20 + (i*20), 20 + (j*20), 20, 20);
                    }
                }
            }
            break;
        case 6:
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {
                    if (Trotations[0][j][i] == 1) {
                        canvasLeft.rect(20 + (i*20), 20 + (j*20), 20, 20);
                    }
                }
            }
            break;
    }
}

function drawLinesComingUp() {
    for (let i = 0; i < 2; i++) {
        canvasRight.line(0, (i + 1) * 100, 100, (i + 1) * 100);
    }
}

function drawComingUp() {
    for (let c = 0; c < 3; c++) {
        canvasRight.fill(colorPickerCU.color());
        switch(c) {
            case 0:
                switch(cu1) {
                    case 0:
                        for (let i = 0; i < 3; i++) {
                            for (let j = 0; j < 3; j++) {
                                if (L1rotations[0][j][i] == 1) {
                                    canvasRight.rect(20 + (i*20), 20 + (j*20), 20, 20);
                                }
                            }
                        }
                        break;
                    case 1:
                        for (let i = 0; i < 3; i++) {
                            for (let j = 0; j < 3; j++) {
                                if (L2rotations[0][j][i] == 1) {
                                    canvasRight.rect(20 + (i*20), 20 + (j*20), 20, 20);
                                }
                            }
                        }
                        break;
                    case 2:
                        for (let i = 0; i < 4; i++) {
                            for (let j = 0; j < 4; j++) {
                                if (Irotations[0][j][i] == 1) {
                                    canvasRight.rect((i*20), (j*20), 20, 20);
                                }
                            }
                        }
                        break;
                    case 3:
                        for (let i = 0; i < 2; i++) {
                            for (let j = 0; j < 2; j++) {
                                if (CuadradoRotations[0][j][i] == 1) {
                                    canvasRight.rect(20 + (i*20), 20 + (j*20), 20, 20);
                                }
                            }
                        }
                        break;
                    case 4:
                        for (let i = 0; i < 3; i++) {
                            for (let j = 0; j < 3; j++) {
                                if (Srotations[0][j][i] == 1) {
                                    canvasRight.rect(20 + (i*20), 20 + (j*20), 20, 20);
                                }
                            }
                        }
                        break;
                    case 5:
                        for (let i = 0; i < 3; i++) {
                            for (let j = 0; j < 3; j++) {
                                if (Zrotations[0][j][i] == 1) {
                                    canvasRight.rect(20 + (i*20), 20 + (j*20), 20, 20);
                                }
                            }
                        }
                        break;
                    case 6:
                        for (let i = 0; i < 3; i++) {
                            for (let j = 0; j < 3; j++) {
                                if (Trotations[0][j][i] == 1) {
                                    canvasRight.rect(20 + (i*20), 20 + (j*20), 20, 20);
                                }
                            }
                        }
                        break;
                }
                break;
            case 1:
                switch(cu2) {
                    case 0:
                        for (let i = 0; i < 3; i++) {
                            for (let j = 0; j < 3; j++) {
                                if (L1rotations[0][j][i] == 1) {
                                    canvasRight.rect(20 + (i*20), (20*6) + (j*20), 20, 20);
                                }
                            }
                        }
                        break;
                    case 1:
                        for (let i = 0; i < 3; i++) {
                            for (let j = 0; j < 3; j++) {
                                if (L2rotations[0][j][i] == 1) {
                                    canvasRight.rect(20 + (i*20), (20*6) + (j*20), 20, 20);
                                }
                            }
                        }
                        break;
                    case 2:
                        for (let i = 0; i < 4; i++) {
                            for (let j = 0; j < 4; j++) {
                                if (Irotations[0][j][i] == 1) {
                                    canvasRight.rect((i*20), (20*5) + (j*20), 20, 20);
                                }
                            }
                        }
                        break;
                    case 3:
                        for (let i = 0; i < 2; i++) {
                            for (let j = 0; j < 2; j++) {
                                if (CuadradoRotations[0][j][i] == 1) {
                                    canvasRight.rect(20 + (i*20), (20*6) + (j*20), 20, 20);
                                }
                            }
                        }
                        break;
                    case 4:
                        for (let i = 0; i < 3; i++) {
                            for (let j = 0; j < 3; j++) {
                                if (Srotations[0][j][i] == 1) {
                                    canvasRight.rect(20 + (i*20), (20*6) + (j*20), 20, 20);
                                }
                            }
                        }
                        break;
                    case 5:
                        for (let i = 0; i < 3; i++) {
                            for (let j = 0; j < 3; j++) {
                                if (Zrotations[0][j][i] == 1) {
                                    canvasRight.rect(20 + (i*20), (20*6) + (j*20), 20, 20);
                                }
                            }
                        }
                        break;
                    case 6:
                        for (let i = 0; i < 3; i++) {
                            for (let j = 0; j < 3; j++) {
                                if (Trotations[0][j][i] == 1) {
                                    canvasRight.rect(20 + (i*20), (20*6) + (j*20), 20, 20);
                                }
                            }
                        }
                        break;
                }
                break;
            case 2:
                switch(cu3) {
                    case 0:
                        for (let i = 0; i < 3; i++) {
                            for (let j = 0; j < 3; j++) {
                                if (L1rotations[0][j][i] == 1) {
                                    canvasRight.rect(20 + (i*20), (20*11) + (j*20), 20, 20);
                                }
                            }
                        }
                        break;
                    case 1:
                        for (let i = 0; i < 3; i++) {
                            for (let j = 0; j < 3; j++) {
                                if (L2rotations[0][j][i] == 1) {
                                    canvasRight.rect(20 + (i*20), (20*11) + (j*20), 20, 20);
                                }
                            }
                        }
                        break;
                    case 2:
                        for (let i = 0; i < 4; i++) {
                            for (let j = 0; j < 4; j++) {
                                if (Irotations[0][j][i] == 1) {
                                    canvasRight.rect((i*20), (20*10) + (j*20), 20, 20);
                                }
                            }
                        }
                        break;
                    case 3:
                        for (let i = 0; i < 2; i++) {
                            for (let j = 0; j < 2; j++) {
                                if (CuadradoRotations[0][j][i] == 1) {
                                    canvasRight.rect(20 + (i*20), (20*11) + (j*20), 20, 20);
                                }
                            }
                        }
                        break;
                    case 4:
                        for (let i = 0; i < 3; i++) {
                            for (let j = 0; j < 3; j++) {
                                if (Srotations[0][j][i] == 1) {
                                    canvasRight.rect(20 + (i*20), (20*11) + (j*20), 20, 20);
                                }
                            }
                        }
                        break;
                    case 5:
                        for (let i = 0; i < 3; i++) {
                            for (let j = 0; j < 3; j++) {
                                if (Zrotations[0][j][i] == 1) {
                                    canvasRight.rect(20 + (i*20), (20*11) + (j*20), 20, 20);
                                }
                            }
                        }
                        break;
                    case 6:
                        for (let i = 0; i < 3; i++) {
                            for (let j = 0; j < 3; j++) {
                                if (Trotations[0][j][i] == 1) {
                                    canvasRight.rect(20 + (i*20), (20*11) + (j*20), 20, 20);
                                }
                            }
                        }
                        break;
                }
                break
        }
    }
}