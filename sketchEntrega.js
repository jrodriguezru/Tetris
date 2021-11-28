function setup() {
    if (color == 1) {
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
    }
    createCanvas(200, 400);

}

function draw() {
    background(230);
    tablero();
    timer += 1;
    if (timer == 1) {
        newTetromino();
    }
    drawActiveTetromino();
    autoMoveDown();
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