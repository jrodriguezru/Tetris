/*
DOCUMENTO JAVASCRIPT PRINCIPAL DEL JUEGO DE TETRIS USANDO LA LIBRERÍA P5.QUADILLE.JS
JUAN ANTONIO RODRÍGUEZ RUBIO
UN - 2021 - 2022
GITHUB: https://github.com/jrodriguezru/Tetris
*/
// Variables de la UI
let canvasLeft, canvasRight, button;
let ppause, colorPickerL1, colorPickerL2, colorPickerI, colorPickerCuad, colorPickerS;
let colorPickerZ, colorPickerT, colorPickerBG, pL1, pL2, pI, pCuad, pS, pZ, pT, pBG, note;
let colorPickerUC, pUC, ucSelector, psUC, colorPickerUCBG, pcpUCBG, dmSelector, dmP;
let newGameButton, colorPickerOH, colorPickerCU, pOH, pCU, instructionsP1, nivelP, nivelV;
let settingsButton, goBackButton, comingUp, onHoldP, titleP, footer, x, titleP2, instructionsButton;

function setup() {
    // Inicialización de la UI
    darkModeInitialization();
    button = createButton('Jugar/Pausar Juego');
    button.mousePressed(pauseAction);
    ppause = createP("Juego en Pausa");
    settingsButton = createButton('Ajustes')
    settingsButton.mousePressed(settings);
    newGameButton = createButton('Nuevo Juego');
    newGameButton.mousePressed(newGame);
    instructionsButton = createButton('¿Cómo se juega?')
    instructionsButton.mousePressed(instructions);
    titleP = createP('Ajustes');
    titleP.class('title');
    titleP2 = createP('Instrucciones')
    titleP2.class('title');
    ucSelector = createCheckbox("", true);
    ucSelector.changed(ucChange);
    psUC = createP('¿Color diferente para todos los tetrominos?');
    colorPickerL1 = createColorPicker('#ff8c00');
    colorPickerL2 = createColorPicker('#2600e7');
    colorPickerI = createColorPicker('#00ffff');
    colorPickerCuad = createColorPicker('#ffff00');
    colorPickerS = createColorPicker('#00ff00');
    colorPickerZ = createColorPicker('#ff0000');
    colorPickerT = createColorPicker('#c832fa');
    colorPickerBG = createColorPicker('#e6e6e6');
    colorPickerOH = createColorPicker('#FFFFFF');
    colorPickerCU = createColorPicker('#FFFFFF');
    pL1 = createP("Color para el tetromino con forma de L");
    pL2 = createP("Color para el tetromino con forma de J");
    pI = createP("Color para el tetromino con forma de I");
    pCuad = createP("Color para el tetromino con forma de Cuadrado");
    pS = createP("Color para el tetromino con forma de S");
    pZ = createP("Color para el tetromino con forma de Z");
    pT = createP("Color para el tetromino con forma de T");
    pBG = createP('Color para el fondo del tablero de juego');
    pOH = createP('Color para la ficha en espera');
    pCU = createP('Color para las fichas siguientes');
    note = createP('El cambio de colores en los tetrominos tomará efecto <br> en la creación del siguiente tetromino.');
    colorPickerUC = createColorPicker("#ffffff");
    colorPickerUCBG = createColorPicker('#e6e6e6');
    pUC = createP("Color único para los tetrominos")
    pUCBG = createP("Color para el fondo del tablero de juego")
    goBackButton = createButton('Regresar')
    goBackButton.mousePressed(regresar);
    canvasLeft = createGraphics(100, 100);
    canvasRight = createGraphics(100, 300);
    comingUp = createP('Siguientes...')
    onHoldP = createP('En espera...')
    footer = createP('Usando p5.Quadrille.js<br>Juan Antonio Rodríguez Rubio<br>2021<br>UN');
    footer.class('footer');
    linesClearedP = createP('Lineas limpiadas: ')
    linesClearedV = createP(linesCleared);
    linesClearedV.class('lcv');
    nivelP = createP('Nivel: ')
    nivelV = createP(nivel);
    nivelV.class('lcv');
    if (darkMode == 0 ) {
        dmSelector = createCheckbox("", false);
    }
    else if (darkMode == 1) {
        dmSelector = createCheckbox("", true);
    }
    dmP = createP('Modo Oscuro');
    dmSelector.changed(dmChange);
    instructionsP1 = createP('Éstas son las teclas que se usan para jugar:<br> - Flecha Abajo: Baja el tetromino un cuadrado <br> - Flecha Derecha/Izquierda: Mueve el tetromino un cuadrado a la<br>derecha o a la izqueirda. <br> - Flecha arriba: Rota 90º el tetromino en dirección de las manecillas del<br>reloj. <br> - Shift: Cambia el tetromino en espera. <br> - Espacio: Hace que el tetromino caiga por el tablero. <br>')
    canvas = createCanvas(columnas * square, filas * square);
    board = createQuadrille(columnas, filas);
    multiButton = createButton('Sin Quadrille');
    multiButton.mousePressed(change);
    scorep1 = createP('Puntaje:');
    scorep2 = createP(score);
    scorep2.class('lcv');
}

function draw() {
        // Ubicación de los elementos de la UI de acuerdo al tamaño horizontal de la ventana
    x = (windowWidth - width) / 2;
    if (windowWidth < 440) {
        alert('Para que la página sea cargada sin errores se necesita un espacio mínimo de 440 px de ancho. Continuar con un espacio menor hará que la página se cargue de manera incorrecta. <br> Ajuste la ventana y recargue la página. ');
    }
    button.position(x - 130, 220);
    ppause.position(x - 120, 230);
    settingsButton.position(x + 208, 405);
    newGameButton.position(x + 208, 435);
    instructionsButton.position(x + 208, 465);
    titleP.position(x + 80, 43);
    titleP2.position(x + 60, 43);
    ucSelector.position(x - 100, 80);
    psUC.position(x - 70, 65);
    colorPickerL1.position(x - 100, 160);
    colorPickerL2.position(x - 100, 190);
    colorPickerI.position(x - 100, 220);
    colorPickerCuad.position(x - 100, 250);
    colorPickerS.position(x - 100, 280);
    colorPickerZ.position(x - 100, 310);
    colorPickerT.position(x - 100, 340);
    colorPickerOH.position(x - 100, 370);
    colorPickerCU.position(x - 100, 400);
    colorPickerBG.position(x - 100, 430);
    pL1.position(x - 40, 147);
    pL2.position(x - 40,177);
    pI.position(x - 40, 207);
    pCuad.position(x - 40, 237);
    pS.position(x - 40, 267);
    pZ.position(x - 40, 297);
    pT.position(x - 40, 327);
    pOH.position(x - 40, 357);
    pCU.position(x - 40, 387);
    pBG.position(x - 40, 417);
    note.position(x - 80, 97);
    colorPickerUC.position(x - 100, 160);
    colorPickerUCBG.position(x - 100, 190);
    pUC.position(x - 40, 147);
    pUCBG.position(x - 40, 177);
    goBackButton.position(x + 80, 480);
    canvas.position(x, 80);
    canvasLeft.position(x - 120, 100);
    canvasRight.position(x + 220, 100);
    comingUp.position(x + 230, 65);
    onHoldP.position(x - 110, 65);
    footer.position(x, 490);
    instructionsP1.position(x - 120, 80);
    linesClearedP.position(x - 125, 290);
    linesClearedV.position(x - 87, 310);
    dmSelector.position(x - 90, 460);
    dmP.position(x - 70, 445);
    nivelP.position(x - 85, 340);
    nivelV.position(x - 87, 360);
    multiButton.position(x - 110, 460);
    scorep1.position(x - 90, 390);
    scorep2.position(x - 87, 410);
    // Mostrar o esconder los elementos de la UI de acuerdo al espcio a mostrar
    // Si setActive = 0: Se muestra el juego
    // Si setActive = 1: Se muestran los ajustes
    // Si setActive = 2: Se muestran las instrucciones
    if (setActive == 1) {
        ucSelector.show();
        psUC.show();
        note.show();
        goBackButton.show();
        titleP.show();
        titleP2.hide();
        settingsButton.hide();
        canvas.hide();
        canvasLeft.hide();
        canvasRight.hide();
        comingUp.hide();
        onHoldP.hide();
        ppause.hide();
        button.hide();
        newGameButton.hide();
        instructionsButton.hide();
        instructionsP1.hide();
        linesClearedP.hide();
        linesClearedV.hide();
        nivelP.hide();
        nivelV.hide();
        colorPickerOH.show();
        colorPickerCU.show();
        pOH.show();
        pCU.show();
        dmSelector.show();
        dmP.show();
        multiButton.hide();
        scorep2.hide();
        scorep1.hide();
        if (colorSet == 0) {
            colorPickerL1.hide();
            colorPickerL2.hide();
            colorPickerI.hide();
            colorPickerCuad.hide();
            colorPickerS.hide();
            colorPickerZ.hide();
            colorPickerT.hide();
            colorPickerBG.hide();
            pL1.hide();
            pL2.hide();
            pI.hide();
            pCuad.hide();
            pS.hide();
            pZ.hide();
            pT.hide();
            pBG.hide();
            colorPickerUC.show();
            colorPickerUCBG.show();
            pUC.show();
            pUCBG.show();
            colorPickerOH.position(x - 100, 220);
            colorPickerCU.position(x - 100, 250);
            pOH.position(x - 40, 207);
            pCU.position(x - 40, 237);
        }
        else if (colorSet == 1) {
            colorPickerL1.show();
            colorPickerL2.show();
            colorPickerI.show();
            colorPickerCuad.show();
            colorPickerS.show();
            colorPickerZ.show();
            colorPickerT.show();
            colorPickerBG.show();
            pL1.show();
            pL2.show();
            pI.show();
            pCuad.show();
            pS.show();
            pZ.show();
            pT.show();
            pBG.show();
            colorPickerUC.hide();
            colorPickerUCBG.hide();
            pUC.hide();
            pUCBG.hide();
        }
    }
    else if (setActive == 0) {
        colorPickerL1.hide();
        colorPickerL2.hide();
        colorPickerI.hide();
        colorPickerCuad.hide();
        colorPickerS.hide();
        colorPickerZ.hide();
        colorPickerT.hide();
        colorPickerBG.hide();
        pL1.hide();
        pL2.hide();
        pI.hide();
        pCuad.hide();
        pS.hide();
        pZ.hide();
        pT.hide();
        pBG.hide();
        colorPickerUC.hide();
        colorPickerUCBG.hide();
        pUC.hide();
        pUCBG.hide();
        ucSelector.hide();
        psUC.hide();
        note.hide();
        titleP.hide();
        titleP2.hide();
        dmSelector.hide();
        dmP.hide();
        settingsButton.show();
        goBackButton.hide();
        canvas.show();
        canvasLeft.show();
        canvasRight.show();
        comingUp.show();
        onHoldP.show();
        ppause.show();
        button.show();
        newGameButton.show();
        instructionsButton.show();
        instructionsP1.hide();
        colorPickerOH.hide();
        colorPickerCU.hide();
        pOH.hide();
        pCU.hide();
        linesClearedP.show();
        linesClearedV.show();
        nivelP.show();
        nivelV.show();
        multiButton.show();
        scorep2.show();
        scorep1.show();
    }
    else if (setActive == 2) {
        colorPickerL1.hide();
        colorPickerL2.hide();
        colorPickerI.hide();
        colorPickerCuad.hide();
        colorPickerS.hide();
        colorPickerZ.hide();
        colorPickerT.hide();
        colorPickerBG.hide();
        pL1.hide();
        pL2.hide();
        pI.hide();
        pCuad.hide();
        pS.hide();
        pZ.hide();
        pT.hide();
        pBG.hide();
        colorPickerUC.hide();
        colorPickerUCBG.hide();
        pUC.hide();
        pUCBG.hide();
        ucSelector.hide();
        psUC.hide();
        note.hide();
        dmSelector.hide();
        dmP.hide();
        titleP.hide();
        titleP2.show();
        instructionsP1.show();
        settingsButton.hide();
        goBackButton.show();
        canvas.hide();
        canvasLeft.hide();
        canvasRight.hide();
        comingUp.hide();
        onHoldP.hide();
        ppause.hide();
        button.hide();
        newGameButton.hide();
        instructionsButton.hide();
        linesClearedP.hide();
        linesClearedV.hide();
        nivelP.hide();
        nivelV.hide();
        multiButton.hide();
        scorep2.hide();
        scorep1.hide();
    }
    // Manejo del modo oscuro/claro
    darkModeChange();
    if (darkMode == 0) {        // Modo claro
        // Imagen de fondo
        document.body.style.backgroundImage = "url('https://jrodriguezru.github.io/Tetris/background.JPG')";
        // Cambiar el color de la letra a negro
        let x = document.getElementsByTagName("P");
        for (let i = 0; i < x.length; i++) {
            x[i].style.color = "black";
        }
        let y = document.getElementsByTagName("H1");
        for (let i = 0; i < y.length; i++) {
            y[i].style.color = "black";
        }
    }
    else if (darkMode == 1) {        // Modo oscuro
        // Imagen de fondo
        document.body.style.backgroundImage = "url('https://jrodriguezru.github.io/Tetris/backgroundDM.JPG')";
        // Cambiar el color de la letra a blanco
        let x = document.getElementsByTagName("P");
        for (let i = 0; i < x.length; i++) {
            x[i].style.color = "white";
        }
        let y = document.getElementsByTagName("H1");
        for (let i = 0; i < y.length; i++) {
            y[i].style.color = "white";
        }
    }
    // Dibujar todo en los canvas
    canvas.background(BGcolor());
    canvasLeft.background(BGcolor());
    canvasRight.background(BGcolor());
    linesClearedV.html(linesCleared);
    nivelV.html(nivel);
    scorep2.html(score);
    drawLinesComingUp()
    drawQuadrille(board, {cellLength: square, outline: (0, 100), board: true});
    // Manejo de la pausa
    if (pause % 2 == 0 && setActive == 0) {
        ppause.show();
    }
    else if (pause % 2 == 1) {
        ppause.hide();
        timer += 1;
        if (timer == 1) {
            startGame();
        }
        drawOnHold();
        drawComingUp();
        autoMoveDown();
        drawQuadrille(quadrille, {row: row, col: col, cellLength: square, outline: (0, 100), board: true});
        if (row == filas - sizes[value] + freeSpaceDown || !canMoveDown()) {
            finishTetromino();
        }
    }
    
}

// Manejo de la entrada del usuario
function keyPressed() {
    if (keyCode == UP_ARROW) {
        if (canRotate()) {
            quadrille.rotate();
            freeSpace();
        }   
    }
    else if (keyCode == DOWN_ARROW) {
        if (row < filas - sizes[value] + freeSpaceDown && canMoveDown()) {
            row += 1;
        }
    }
    else if (keyCode == RIGHT_ARROW) {
        if (col < columnas - sizes[value] + freeSpaceRight && canMoveRight()) {
            col += 1
        }
        
    }
    else if (keyCode == LEFT_ARROW) {
        if (col > 0 - freeSpaceLeft && canMoveLeft()) {
            col -= 1
        }
    }
    else if (key == ' ') {
        while (canMoveDown()) {
            row += 1;
        }
    }
    else if (keyCode == SHIFT) {
        onHoldChange()
    }
}