function setup() {
    createCanvas(width, height);
    newTetromino();
}
function draw() {
    background(230);
    tablero();
    timer += 1;
    autoMoveDown();
}



function keyPressed() {
    if (keyCode == CONTROL) {
        activeShape = activeShape;
    }
    else {
        if (activeShape % 7 == 0) {
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
        }     
        else if (activeShape % 7 == 1) {
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
        }     
        else if (activeShape % 7 == 2) {
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
        }     
        else if (activeShape % 7 == 3) {
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
        }     
        else if (activeShape % 7 == 4) {
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
        }    
        else if (activeShape % 7 == 5) {
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
        }     
        else if (activeShape % 7 == 6) {
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
        }
    }
}