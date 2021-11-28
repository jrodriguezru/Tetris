let button;
let ppause, colorPickerL1, colorPickerL2, colorPickerI, colorPickerCuad, colorPickerS;
let colorPickerZ, colorPickerT, colorPickerBG, pL1, pL2, pI, pCuad, pS, pZ, pT, pBG, note;
let colorPickerUC, pUC, ucSelector, psUC, colorPickerUCBG, pcpUCBG;
function setup() {
    button = createButton('Jugar/Pausar Juego');
    button.mousePressed(pauseAction);
    button.class('pausebttn');
    ppause = createP("Juego en Pausa");
    ppause.class("ppause");
    ucSelector = createCheckbox("", true);
    ucSelector.changed(ucChange);
    ucSelector.class('ucSelec');
    psUC = createP('¿Color diferente para todos los tetrominos?');
    psUC.class('psUC');
    colorPickerL1 = createColorPicker('#ff8c00');
    colorPickerL1.class('colorPicker');
    colorPickerL1.id('cpL1');
    colorPickerL2 = createColorPicker('#2600e7');
    colorPickerL2.class('colorPicker');
    colorPickerL2.id('cpL2');
    colorPickerI = createColorPicker('#00ffff');
    colorPickerI.class('colorPicker');
    colorPickerI.id('cpI');
    colorPickerCuad = createColorPicker('#ffff00');
    colorPickerCuad.class('colorPicker');
    colorPickerCuad.id('cpCuad');
    colorPickerS = createColorPicker('#00ff00');
    colorPickerS.class('colorPicker');
    colorPickerS.id('cpS');
    colorPickerZ = createColorPicker('#ff0000');
    colorPickerZ.class('colorPicker');
    colorPickerZ.id('cpZ');
    colorPickerT = createColorPicker('#c832fa');
    colorPickerT.class('colorPicker');
    colorPickerT.id('cpT');
    colorPickerBG = createColorPicker('#e6e6e6');
    colorPickerBG.class('colorPicker');
    colorPickerBG.id('cpbg');
    pL1 = createP("Color para el tetromino con forma de L");
    pL1.class('pcp');
    pL1.id('pcpL1');
    pL2 = createP("Color para el tetromino con forma de L invertida");
    pL2.class('pcp');
    pL2.id('pcpL2');
    pI = createP("Color para el tetromino con forma de I");
    pI.class('pcp');
    pI.id('pcpI');
    pCuad = createP("Color para el tetromino con forma de Cuadrado");
    pCuad.class('pcp');
    pCuad.id('pcpCuad');
    pS = createP("Color para el tetromino con forma de S");
    pS.class('pcp');
    pS.id('pcpS');
    pZ = createP("Color para el tetromino con forma de Z");
    pZ.class('pcp');
    pZ.id('pcpZ');
    pT = createP("Color para el tetromino con forma de T");
    pT.class('pcp');
    pT.id('pcpT');
    pBG = createP('Color para el fondo del tablero de juego');
    pBG.class('pcp');
    pBG.id('pcpbg');
    note = createP('El cambio de colores en los tetrominos tomará efecto <br> en la creación del siguiente tetromino.');
    note.class('notep');
    colorPickerUC = createColorPicker("#ffffff");
    colorPickerUC.class('colorPicker');
    colorPickerUC.id('cpUC');
    colorPickerUCBG = createColorPicker('#e6e6e6');
    colorPickerUCBG.class('colorPicker');
    colorPickerUCBG.id('cpUCBG');
    pUC = createP("Color único para los tetrominos")
    pUC.class('pcp');
    pUC.id('pcpUC');
    pUCBG = createP("Color para el fondo del tablero de juego")
    pUCBG.class('pcp');
    pUCBG.id('pcpUCBG');
    
    createCanvas(200, 400);

}

function draw() {
    if (color == 0) {
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
    }
    else if (color == 1) {
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
    background(230);
    tablero();
    if (pause % 2 == 0) {
        ppause.show();
    }
    else if (pause % 2 == 1) {
        ppause.hide();
        timer += 1;
        if (timer == 1) {
            newTetromino();
        }
        drawActiveTetromino();
        autoMoveDown();
    }
}


function keyPressed() {
    switch(activeShape) {
        case 0:
            if (keyCode == UP_ARROW) {
                L1.rotate();
                console.log("L1 changed rotation");
            }
            else if (keyCode == RIGHT_ARROW) {
                L1.moveRight();
            }
            else if (keyCode == LEFT_ARROW) {
                L1.moveLeft();
            }
            else if (keyCode == DOWN_ARROW) {
                L1.moveDown();
            }
            else if (key == " ") {
                L1.fallDown();
            }
            break;
        case 1:
            if (keyCode == UP_ARROW) {
                L2.rotate();
            }
            else if (keyCode == RIGHT_ARROW) {
                L2.moveRight();
            }
            else if (keyCode == LEFT_ARROW) {
                L2.moveLeft();
            }
            else if (keyCode == DOWN_ARROW) {
                L2.moveDown();
            }
            else if (key == " ") {
                L2.fallDown();
            }
            break;
        case 2:
            if (keyCode == UP_ARROW) {
                I.rotate();
            }
            else if (keyCode == RIGHT_ARROW) {
                I.moveRight();
            }
            else if (keyCode == LEFT_ARROW) {
                I.moveLeft();
            }
            else if (keyCode == DOWN_ARROW) {
                I.moveDown();
            }
            else if (key == " ") {
                I.fallDown();
            }
            break;
        case 3:
            if (keyCode == UP_ARROW) {
                Cuad.rotate();
            }
            else if (keyCode == RIGHT_ARROW) {
                Cuad.moveRight();
            }
            else if (keyCode == LEFT_ARROW) {
                Cuad.moveLeft();
            }
            else if (keyCode == DOWN_ARROW) {
                Cuad.moveDown();
            }
            else if (key == " ") {
                Cuad.fallDown();
            }
            break;
        case 4:
            if (keyCode == UP_ARROW) {
                S.rotate();
            }
            else if (keyCode == RIGHT_ARROW) {
                S.moveRight();
            }
            else if (keyCode == LEFT_ARROW) {
                S.moveLeft();
            }
            else if (keyCode == DOWN_ARROW) {
                S.moveDown();
            }
            else if (key == " ") {
                S.fallDown();
            }
            break;
        case 5:
            if (keyCode == UP_ARROW) {
                Z.rotate();
            }
            else if (keyCode == RIGHT_ARROW) {
                Z.moveRight();
            }
            else if (keyCode == LEFT_ARROW) {
                Z.moveLeft();
            }
            else if (keyCode == DOWN_ARROW) {
                Z.moveDown();
            }
            else if (key == " ") {
                Z.fallDown();
            }
            break;
        case 6:
            if (keyCode == UP_ARROW) {
                T.rotate();
            }
            else if (keyCode == RIGHT_ARROW) {
                T.moveRight();
            }
            else if (keyCode == LEFT_ARROW) {
                T.moveLeft();
            }
            else if (keyCode == DOWN_ARROW) {
                T.moveDown();
            }
            else if (key == " ") {
                T.fallDown();
            }
            break;
    }
}