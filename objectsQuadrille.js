/*
DOCUMENTO JAVASCRIPT DE FUNCIONES Y VARIABLES DEL JUEGO DE TETRIS USANDO LA LIBRERÍA P5.QUADILLE.JS
JUAN ANTONIO RODRÍGUEZ RUBIO
UN - 2021 - 2022
GITHUB: https://github.com/jrodriguezru/Tetris
*/
// Declaración de variables globales usadas.
let filas = 20;
let columnas = 10;
let square = 20;
let board, quadrille, canvas;
let value;
let tetrominos = [
    [[1, 0, 0], [1, 0, 0], [1, 1, 0]],
    [[0, 0, 1], [0, 0, 1], [0, 1, 1]],
    [[0, 0, 1, 0], [0, 0, 1, 0], [0, 0, 1, 0], [0, 0, 1, 0]],
    [[1, 1], [1, 1]],
    [[0, 1, 1], [1, 1, 0], [0, 0, 0]],
    [[1, 1, 0], [0, 1, 1], [0, 0, 0]],
    [[0, 1, 0], [1, 1, 1], [0, 0, 0]],
];
let sizes = [3, 3, 4, 2, 3, 3, 3]
let canMoveDownV, canMoveLeftV, canMoveRightV, canRotateV;
let freeSpaceLeft, freeSpaceRight, freeSpaceDown;
let linesCompleted = [];
let linesCleared = 0;
let darkMode = 0;
let nivel = 1;
let setActive = 0;
let colorSet = 1;
let pause = 0;
let timer = 0;
let onHold = -1;
let onHoldChanging;
let cu1, cu2, cu3;
let timerNivel = 40;
let score = 0;
let previousQLinesCleared = 0;

// Variable que toma el valor del modo preferido por el usuario. El modo configurado en el SO.
// False = El usuario prefiere modo Claro
// True = El usuario prefiere modo oscuro
let matched = window.matchMedia('(prefers-color-scheme: dark)').matches;

// Creación del Tetromino activo
function active(value) {
    return createQuadrille(matrix(value));
}

// Creación de la matriz del Tetromino activo con el color seleccionado con los Color Picker
function matrix(value) {
    let colorM;
    // Seleccionar el color del Tetromino activo de acuerdo con el Color Picker
    switch(value) {
        case 0:
            if (colorSet == 0) {
                colorM = colorPickerUC.color();
            }
            else if (colorSet == 1) {
                colorM = colorPickerL1.color();
            }
            break;
        case 1:
            if (colorSet == 0) {
                colorM = colorPickerUC.color();
            }
            else if (colorSet == 1) {
                colorM = colorPickerL2.color();
            }
            break;
        case 2:
            if (colorSet == 0) {
                colorM = colorPickerUC.color();
            }
            else if (colorSet == 1) {
                colorM = colorPickerI.color();
            }
            break;
        case 3:
            if (colorSet == 0) {
                colorM = colorPickerUC.color();
            }
            else if (colorSet == 1) {
                colorM = colorPickerCuad.color();
            }
            break;
        case 4:
            if (colorSet == 0) {
                colorM = colorPickerUC.color();
            }
            else if (colorSet == 1) {
                colorM = colorPickerS.color();
            }
            break;
        case 5:
            if (colorSet == 0) {
                colorM = colorPickerUC.color();
            }
            else if (colorSet == 1) {
                colorM = colorPickerZ.color();
            }
            break;
        case 6:
            if (colorSet == 0) {
                colorM = colorPickerUC.color();
            }
            else if (colorSet == 1) {
                colorM = colorPickerT.color();
            }
            break;
    }

    // Creación de la matriz del Tetromino activo con el color correspondiente
    let finalMatrix = [];
    
    for (let i = 0; i < sizes[value]; i++) {   
        finalMatrix.push([]);     
        for (let j = 0; j < sizes[value]; j++) {
            finalMatrix[i].push(0);
        }
    }
    for (let i = 0; i < sizes[value]; i++) {        
        for (let j = 0; j < sizes[value]; j++) {
            if (tetrominos[value][i][j] == 1) {
                finalMatrix[i][j] = colorM;
            } 
            else {
                finalMatrix[i][j] = 0;
            } 
        }
    }
    return finalMatrix;
} 

// Función que termina el Tetromino activo
function finishTetromino() {
    let clone = quadrille.clone();
    // Elimina las filas inferiores y las columnas laterales vacías
    for (let i = 0, j = sizes[value] - 1; i < freeSpaceDown; i++, j--) {
        clone.delete(j);
    }
    if (freeSpaceLeft != 0) {
        for (let j = 0; j < freeSpaceLeft; j++) {
            for (let i = 0; i < sizes[value]; i++) {
                clone._memory2D[i].splice(0, 1);
            }
        }
    }
    if (freeSpaceRight != 0) {
        for (let j = sizes[value] - 1 - freeSpaceLeft, l = 0; l < freeSpaceRight; j--, l++) {
            for (let i = 0; i < sizes[value]; i++) {
                clone._memory2D[i].splice(j, 1);
            }
        }
    }
    // "Pegar" el Tetromino a terminar en el tablero
    board = Quadrille.OR(board, clone, row, col + freeSpaceLeft);
    lineClearedManagement();
    newTetromino();
}

// Validación colisiones hacia abajo
function canMoveDown() {
    canMoveDownV = 1
    if (row == filas - sizes[value] + freeSpaceDown) {
        canMoveDownV = 0
        return false;
    } 
    else {
        let clone = quadrille.clone();
        let boardClone = board.clone();
        boardClone = Quadrille.AND(boardClone, clone, row + 1, col);
        for (let i = 0; i < filas; i++) {
            for (let j = 0; j < columnas; j++) {
                if (boardClone._memory2D[i][j] != 0) {
                    canMoveDownV = 0;
                }
            }
        }

        if (canMoveDownV == 0) {
            return false;
        }
        else {
            return true;
        }
    }
}

// Validación colisiones hacia la derecha
function canMoveRight() {
    canMoveRightV = 1
    let clone = quadrille.clone();
    let boardClone = board.clone();
    boardClone = Quadrille.AND(boardClone, clone, row, col + 1);
    for (let i = 0; i < filas; i++) {
        for (let j = 0; j < columnas; j++) {
            if (boardClone._memory2D[i][j] != 0) {
                canMoveRightV = 0;
            }
        }
    }
    if (canMoveRightV == 0) {
        return false;
    }
    else {
        return true;
    }
}

// Validación colisiones hacia la izquierda
function canMoveLeft() {
    canMoveLeftV = 1
    let clone = quadrille.clone();
    let boardClone = board.clone();
    boardClone = Quadrille.AND(boardClone, clone, row, col - 1);
    for (let i = 0; i < filas; i++) {
        for (let j = 0; j < columnas; j++) {
            if (boardClone._memory2D[i][j] != 0) {
                canMoveLeftV = 0;
            }
        }
    }
    if (canMoveLeftV == 0) {
        return false;
    }
    else {
        return true;
    }
}

// Validación colisiones al rotar
function canRotate() {
    canRotateV = 1
    let clone = quadrille.clone();
    let boardClone = board.clone();
    clone.rotate();
    boardClone = Quadrille.AND(boardClone, clone, row, col);
    for (let i = 0; i < filas; i++) {
        for (let j = 0; j < columnas; j++) {
            if (boardClone._memory2D[i][j] != 0) {
                canRotateV = 0;
            }
        }
    }
    if (canRotateV == 0) {
        return false;
    }
    else {
        return true;
    }
}

// Analiza las filas inferiores vacías, y las columnas laterales vacías
function freeSpace() {
    freeSpaceLeft = 0;
    freeSpaceRight = 0; 
    freeSpaceDown = 0;

    let left = 0
    for (let i = 0; i < sizes[value]; i++) {
        left = 0;
        for (let j = 0; j < sizes[value]; j++) {
            if (quadrille._memory2D[j][i] == 0) {
                left += 1;
            }
        }
        if (left == sizes[value]) {
            freeSpaceLeft += 1;
        }
        else {
            break;
        }
    }

    let right = 0
    for (let i = sizes[value] - 1; i >= 0; i--) {
        right = 0;
        for (let j = 0; j < sizes[value]; j++) {
            if (quadrille._memory2D[j][i] == 0) {
                right += 1;
            }
        }
        if (right == sizes[value]) {
            freeSpaceRight += 1;
        }
        else {
            break;
        }
    }
    
    let down = 0
    for (let j = sizes[value] - 1; j >= 0; j--) {
        down = 0;
        for (let i = 0; i < sizes[value]; i++) {
            if (quadrille._memory2D[j][i] == 0) {
                down += 1;
            }
        }
        if (down == sizes[value]) {
            freeSpaceDown += 1;
        }
        else {
            break;
        }
    }
}

// Retorna un entero entre min y max
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

// De acuerdo a la variable matched, inicializa la visualización en el modo preferido por el usuario, el modo configurado en el SO.
function darkModeInitialization() {
    if (matched) {
        darkMode = 1;
    }
    else {
        darkMode = 0;
    }
}

// Función que cambia el modo si el usuario (o el SO) cambia el modo configurado en el SO.
function darkModeChange() {
    let matchedOld = matched;
    matched = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (matchedOld != matched) {
        darkModeInitialization();
        dmSelector.hide();
        dmSelector = createCheckbox("", matched);
        dmSelector.changed(dmChange);
    }
}

// Función que cambia el modo al cambiarlo en los ajustes
function dmChange() {
    if (darkMode == 1) {
        darkMode = 0;
    }
    else if (darkMode == 0) {
        darkMode = 1
    }
}

// Función que cambia los elementos en visualización a los ajustes
function settings() {
    setActive = 1;
    if (pause % 2 != 0) {
        pause++
    }
}

// Función que cambia los elemntos en visualización al juego
function regresar() {
    setActive = 0;
}

// Función que cambia los elemntos en visualización a las instrucciones
function instructions() {
    setActive = 2;
    if (pause % 2 != 0) {
        pause++
    }
}

// Función que se ejecuta al perder el juego, da el puntaje y la cantidad de líneas limpiadas y luego, recarga la página
function gameOver() {
    pause += 1;
    let entrada = confirm("Game Over.\nLimpió un total de: " + linesCleared + " línea(s).\nObtuvo un puntaje de " + score + " puntos.\nPara volver a jugar debe recargar la página, creando un nuevo juego.\nCon esto, se eliminarán también todas las personalizaciones que se hayan realizado. ¿Continuar?");
    if (entrada) {
        location.reload();
    }
}

// Función que pausa el juego
function pauseAction() {
    pause++;
}

// Función que cambia si el usuario quiere todos los tetrominos con un único color, o no
// Color = 0 -> Todos con color único
// Color = 1 -> Todos con color distinto
function ucChange() {
    if (colorSet == 1) {
        colorSet = 0;
    }
    else if (colorSet == 0) {
        colorSet = 1
    }
}

// Función que recarga la página al hacer click en el botón de nuevo juego
function newGame() {
    let entrada = confirm("Se reiniciará la página creando un nuevo juego. Sin embargo, se eliminarán todas las personalizaciones que se hayan realizado. ¿Continuar?");
    if (entrada) {
        location.reload();
    }
}

// Función que retorna el color del fondo del tablero seleccionado en el Color Picker dependiendo el estado de la variable color
function BGcolor() {
    if (colorSet == 0) {
        return colorPickerUCBG.color();
    }
    else if (colorSet == 1) {
        return colorPickerBG.color();
    }
}

// Dibuja las dos líneas que se ven en la fila de Tetrominos siguientes
function drawLinesComingUp() {
    for (let i = 0; i < 2; i++) {
        canvasRight.line(0, (i + 1) * 100, 100, (i + 1) * 100);
    }
}

// Función que dibuja los tetrominos siguientes
function drawComingUp() {
    for (let c = 0; c < 3; c++) {
        canvasRight.fill(colorPickerCU.color());
        switch(c) {
            case 0:
                for (let i = 0; i < sizes[cu1]; i++) {
                    for (let j = 0; j < sizes[cu1]; j++) {
                        if (tetrominos[cu1][j][i] == 1) {
                            if (cu1 == 2) {
                                canvasRight.rect((i*20), (j*20), 20, 20);
                            }
                            else {
                                canvasRight.rect(20 + (i*20), 20 + (j*20), 20, 20);
                            }
                            
                        }
                    }
                }
                break;
            case 1:
                for (let i = 0; i < sizes[cu2]; i++) {
                    for (let j = 0; j < sizes[cu2]; j++) {
                        if (tetrominos[cu2][j][i] == 1) {
                            if (cu2 == 2) {
                                canvasRight.rect((i*20), (20*5) + (j*20), 20, 20);
                            }
                            else {
                                canvasRight.rect(20 + (i*20), (20*6) + (j*20), 20, 20);
                            }
                            
                        }
                    }
                }
                break;
            case 2:
                for (let i = 0; i < sizes[cu3]; i++) {
                    for (let j = 0; j < sizes[cu3]; j++) {
                        if (tetrominos[cu3][j][i] == 1) {
                            if (cu3 == 2) {
                                canvasRight.rect((i*20), (20*10) + (j*20), 20, 20);
                            }
                            else {
                                canvasRight.rect(20 + (i*20), (20*11) + (j*20), 20, 20);
                            }
                            
                        }
                    }
                }
                break
        }
    }
}

// Función que dibuja el Tetromino en espera en el canvas de En Espera
function drawOnHold() {
    canvasLeft.fill(colorPickerOH.color());
    for (let i = 0; i < sizes[onHold]; i++) {
        for (let j = 0; j < sizes[onHold]; j++) {
            if (tetrominos[onHold][j][i] == 1) {
                if (onHold == 2) {
                    canvasLeft.rect((j*20), (i*20), 20, 20);
                }
                else {
                    canvasLeft.rect(20 + (i*20), 20 + (j*20), 20, 20);
                }
                
            }
        }
    }
}

// Función que se ejecuta al iniciar el juego
function startGame() {
    let randomV = 0;
    for (let i = 0; i < 3; i++) {
        randomV = getRandomInt(0, 7);
        switch(i) {
            case 0:
                cu1 = randomV;
                break;
            case 1:
                cu2 = randomV;
                break;
            case 2:
                cu3 = randomV;
                break;
        }
    }
    newTetromino();
}

// Crea el siguiente Tetromino activo
function newTetromino() {
    if (validacionTablero()) {
        // Cambia los Tetrominos siguientes
        randomV = getRandomInt(0, 7);
        value = cu1;
        cu1 = cu2;
        cu2 = cu3;
        cu3 = randomV;
        // Crea el siguiente Tetromino
        quadrille = active(value);
        row = 0;
        col = columnas / 2;
        freeSpace();
    }
    else {
        gameOver();
    }
    
}

// Función que cambia el Tetromino activo con el Tetromino en espera
// Si no hay Tetromino en espera, guarda el activo y crea el siguiente en la cola de Siguientes
function onHoldChange() {
    // Si hay Tetromino en espera....
    if (onHold != -1) {
        onHoldChanging = value;
        value = onHold;
        quadrille = active(onHold);
        row = 0;
        col = columnas / 2;
        onHold = onHoldChanging;
    }
    // Si no hay Tetromino en espera...
    else {
        onHold = value;
        newTetromino();
    }
}

// Función que baja automáticamente el Tetromino al cabo de cierto tiempo. "Gravedad"
function autoMoveDown() {
    if (timer % timerNivel == 0) {
        if (row < filas - sizes[value] + freeSpaceDown && canMoveDown()) {
            row += 1;
        }
    }
}

// Función que al subir el nivel, reduce el tiempo que el juego espera para bajar automáticamente el Tetromino activo
function levelUp() {
    nivel++;
    if (timerNivel > 5) {
        timerNivel = timerNivel - 5;
    }
}

// Valida si se puede crear un nuevo Tetromino sin colisionar con ninguno otro en el tablero
// FAlSE = GAME OVER
function validacionTablero() {
    let validacionGameOver = 0;
    let boardClone = board.clone();
    for(let j = 3; j < 9; j++){
        if(boardClone._memory2D[1][j] != 0){
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

// Lines Cleared...

// Función que analiza si dada una línea i, la línea está llena.
// True = Línea completadaa
// False = Al menos un bloque está vacío
function lineCompleted(i) {
    let control = 0;
    let boardClone = board.clone();
    for (let j = 0; j < 10; j++) {
        if (boardClone._memory2D[i][j] != 0) {
            control += 1;
        }
    }
    if (control == 10) {
        return true;
    }
    else {
        return false;
    }
}

// Función que elimina las líneas completadas y aumenta el contador de líneas completadas y el contador del nivel
function lineCleared() {
    for (let i = 0; i < linesCompleted.length; i++) {
        board.delete(linesCompleted[i]);
        board.insert(0);
        linesCleared++;
        if (linesCleared % 10 == 0 && linesCleared != 0) {
            levelUp();
        }
    }
}

// Función que maneja las lineas del tablero. Llama la función que analiza si la línea está completada y de ser así llama la funcion que la elimina
function lineClearedManagement() {
    linesCompleted = [];
    for (let i = 0; i < 20; i++) {
        if (lineCompleted(i)) {
            linesCompleted.push(i);
        }
    }
    if (linesCompleted.length != 0) {
        lineCleared();
        scoreManagment();
    }
}

// Cambia la página activa a la página que no usa la librería p5.Quadrille.js
function change() {
    window.location.replace("index.html")
}

// Función que maneja el puntaje del juego
// 100 puntos por eliminar una línea
// 800 puntos por eliminar un Tetris (4 líneas en un movimiento)
// 1200 puntos por eliminar un Tetris inmediatamente después de haber eliminado otro Tetris
function scoreManagment() {
    let increaseScore = 0
    if (linesCompleted.length == 4 && previousQLinesCleared != 4) {
        increaseScore = 800;
    }
    else if (linesCompleted.length == 4 && previousQLinesCleared == 4) {
        increaseScore = 1200;
    }
    else {
        increaseScore = 100;
    }
    score += increaseScore;
    previousQLinesCleared = linesCompleted.length;
}