// TODO: Organizar el "vigilador" del tablero.
// TODO: Organizar como se van a dejar marcadas las fichas en el tablero una vez caigan
// TODO: Resetear los valores de posYInicial y posXInicial en la ActiveShape una vez que caigan y se actualice el tablero

let height = 400;
let width = 200;

tableroControl = [
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
  ]

activeShape = 0;
timer = 0;
posXInicial = 100;
posYInicial = 0;
movimiento = 0 

// FOR MY FUTURE SELF:
// La idea es que con cada pieza se cambie el valor de la posicion [i][j] de la matriz tablero de acuerdo a la ubicacion de la pieza
// Cada [i][j] puede ser expresado por i = posEnY / 20 y j = posEnX / 20
// Luego con un if se puede evaluar si en la matriz tablero ya hay un 1, de ser así cambia una varible control que hace salir de la función
// Y si esta variable está "cambiada" luego hay un llamado a una función para que se "dvuelva" el movimiento
// Caso especial: Si esta variable fue cambiada porque no se puede mover la pieza hacia abajo, en ese caso, se devuelve y llama a la función endTetromino()
// En la función newTetromino debe haber una "evaluacion" si se puede o no poner la pieza, en caso negativo, game over.
// En la función endTetromino, debe haber una "evaluacion" si la última fila de la matriz tablero es una fila de únicamente 1's.
// De ser así, la elimina, baja todas las anteriores y suma 1 a la variable puntaje.

function updateTablero() {
  if (activeShape % 7 == 0) {
    if (movimiento == 1) {
      if (L1.rotation % 4 == 0) {
        let i = L1.posEnY / 20;
        let j = L1.posEnX / 20;
        for (let iFor = L1.posEnY / 20, iMat = 0; iFor < i + 3; iFor++, iMat++) {
          for (let jFor = L1.posEnX / 20, jMat = 0; jFor < j + 3; jFor++, jMat++) {
            tableroControl[iFor][jFor] = L1.rotation0[iMat][jMat];
          }
        }
      }
      else if (L1.rotation % 4 == 1) {
        let i = L1.posEnY / 20;
        let j = L1.posEnX / 20;
        for (let iFor = L1.posEnY / 20, iMat = 0; iFor < i + 3; iFor++, iMat++) {
          for (let jFor = L1.posEnX / 20, jMat = 0; jFor < j + 3; jFor++, jMat++) {
            tableroControl[iFor][jFor] = L1.rotation1[iMat][jMat];
          }
        }
      }
      else if (L1.rotation % 4 == 2) {
        let i = L1.posEnY / 20;
        let j = L1.posEnX / 20;
        for (let iFor = L1.posEnY / 20, iMat = 0; iFor < i + 3; iFor++, iMat++) {
          for (let jFor = L1.posEnX / 20, jMat = 0; jFor < j + 3; jFor++, jMat++) {
            tableroControl[iFor][jFor] = L1.rotation2[iMat][jMat];
          }
        }
      }
      else if (L1.rotation % 4 == 3) {
        let i = L1.posEnY / 20;
        let j = L1.posEnX / 20;
        for (let iFor = L1.posEnY / 20, iMat = 0; iFor < i + 3; iFor++, iMat++) {
          for (let jFor = L1.posEnX / 20, jMat = 0; jFor < j + 3; jFor++, jMat++) {
            tableroControl[iFor][jFor] = L1.rotation3[iMat][jMat];
          }
        }
      }
    }
    else if (movimiento == 2) {
      if (L1.rotation % 4 == 0) {

      }
      else if (L1.rotation % 4 == 1) {

      }
      else if (L1.rotation % 4 == 2) {

      }
      else if (L1.rotation % 4 == 3) {
        
      }
    }
    else if (movimiento == 3) {
      if (L1.rotation % 4 == 0) {

      }
      else if (L1.rotation % 4 == 1) {

      }
      else if (L1.rotation % 4 == 2) {

      }
      else if (L1.rotation % 4 == 3) {
        
      }
    }
    else if (movimiento == 4) {
      if (L1.rotation % 4 == 0) {

      }
      else if (L1.rotation % 4 == 1) {

      }
      else if (L1.rotation % 4 == 2) {

      }
      else if (L1.rotation % 4 == 3) {
        
      }
    }
    else if (movimiento == 5) {
      if (L1.rotation % 4 == 0) {

      }
      else if (L1.rotation % 4 == 1) {

      }
      else if (L1.rotation % 4 == 2) {

      }
      else if (L1.rotation % 4 == 3) {
        
      }
    }
    else if (movimiento == 6) {
      if (L1.rotation % 4 == 0) {

      }
      else if (L1.rotation % 4 == 1) {

      }
      else if (L1.rotation % 4 == 2) {

      }
      else if (L1.rotation % 4 == 3) {
        
      }
    }

  }
  else if (activeShape % 7 == 1) {
    if (movimiento == 1) {
      if (L2.rotation % 4 == 0) {

      }
      else if (L2.rotation % 4 == 1) {

      }
      else if (L2.rotation % 4 == 2) {

      }
      else if (L2.rotation % 4 == 3) {
        
      }
    }
    else if (movimiento == 2) {
      if (L2.rotation % 4 == 0) {

      }
      else if (L2.rotation % 4 == 1) {

      }
      else if (L2.rotation % 4 == 2) {

      }
      else if (L2.rotation % 4 == 3) {
        
      }
    }
    else if (movimiento == 3) {
      if (L2.rotation % 4 == 0) {

      }
      else if (L2.rotation % 4 == 1) {

      }
      else if (L2.rotation % 4 == 2) {

      }
      else if (L2.rotation % 4 == 3) {
        
      }
    }
    else if (movimiento == 4) {
      if (L2.rotation % 4 == 0) {

      }
      else if (L2.rotation % 4 == 1) {

      }
      else if (L2.rotation % 4 == 2) {

      }
      else if (L2.rotation % 4 == 3) {
        
      }
    }
    else if (movimiento == 5) {
      if (L2.rotation % 4 == 0) {

      }
      else if (L2.rotation % 4 == 1) {

      }
      else if (L2.rotation % 4 == 2) {

      }
      else if (L2.rotation % 4 == 3) {
        
      }
    }
    else if (movimiento == 6) {
      if (L2.rotation % 4 == 0) {

      }
      else if (L2.rotation % 4 == 1) {

      }
      else if (L2.rotation % 4 == 2) {

      }
      else if (L2.rotation % 4 == 3) {
        
      }
    }
  }
  else if (activeShape % 7 == 2) {
    if (movimiento == 1) {
      if (I.rotation % 4 == 0) {

      }
      else if (I.rotation % 4 == 1) {

      }
      else if (I.rotation % 4 == 2) {

      }
      else if (I.rotation % 4 == 3) {
        
      }
    }
    else if (movimiento == 2) {
      if (I.rotation % 4 == 0) {

      }
      else if (I.rotation % 4 == 1) {

      }
      else if (I.rotation % 4 == 2) {

      }
      else if (I.rotation % 4 == 3) {
        
      }
    }
    else if (movimiento == 3) {
      if (I.rotation % 4 == 0) {

      }
      else if (I.rotation % 4 == 1) {

      }
      else if (I.rotation % 4 == 2) {

      }
      else if (I.rotation % 4 == 3) {
        
      }
    }
    else if (movimiento == 4) {
      if (I.rotation % 4 == 0) {

      }
      else if (I.rotation % 4 == 1) {

      }
      else if (I.rotation % 4 == 2) {

      }
      else if (I.rotation % 4 == 3) {
        
      }
    }
    else if (movimiento == 5) {
      if (I.rotation % 4 == 0) {

      }
      else if (I.rotation % 4 == 1) {

      }
      else if (I.rotation % 4 == 2) {

      }
      else if (I.rotation % 4 == 3) {
        
      }
    }
    else if (movimiento == 6) {
      if (I.rotation % 4 == 0) {

      }
      else if (I.rotation % 4 == 1) {

      }
      else if (I.rotation % 4 == 2) {

      }
      else if (I.rotation % 4 == 3) {
        
      }
    }
  }
  else if (activeShape % 7 == 3) {
    if (movimiento == 1) {
      if (Cuad.rotation % 4 == 0) {

      }
      else if (Cuad.rotation % 4 == 1) {

      }
      else if (Cuad.rotation % 4 == 2) {

      }
      else if (Cuad.rotation % 4 == 3) {
        
      }
    }
    else if (movimiento == 2) {
      if (Cuad.rotation % 4 == 0) {

      }
      else if (Cuad.rotation % 4 == 1) {

      }
      else if (Cuad.rotation % 4 == 2) {

      }
      else if (Cuad.rotation % 4 == 3) {
        
      }
    }
    else if (movimiento == 3) {
      if (Cuad.rotation % 4 == 0) {

      }
      else if (Cuad.rotation % 4 == 1) {

      }
      else if (Cuad.rotation % 4 == 2) {

      }
      else if (Cuad.rotation % 4 == 3) {
        
      }
    }
    else if (movimiento == 4) {
      if (Cuad.rotation % 4 == 0) {

      }
      else if (Cuad.rotation % 4 == 1) {

      }
      else if (Cuad.rotation % 4 == 2) {

      }
      else if (Cuad.rotation % 4 == 3) {
        
      }
    }
    else if (movimiento == 5) {
      if (Cuad.rotation % 4 == 0) {

      }
      else if (Cuad.rotation % 4 == 1) {

      }
      else if (Cuad.rotation % 4 == 2) {

      }
      else if (Cuad.rotation % 4 == 3) {
        
      }
    }
    else if (movimiento == 6) {
      if (Cuad.rotation % 4 == 0) {

      }
      else if (Cuad.rotation % 4 == 1) {

      }
      else if (Cuad.rotation % 4 == 2) {

      }
      else if (Cuad.rotation % 4 == 3) {
        
      }
    }
  }
  else if (activeShape % 7 == 4) {
    if (movimiento == 1) {
      if (S.rotation % 4 == 0) {

      }
      else if (S.rotation % 4 == 1) {

      }
      else if (S.rotation % 4 == 2) {

      }
      else if (S.rotation % 4 == 3) {
        
      }
    }
    else if (movimiento == 2) {
      if (S.rotation % 4 == 0) {

      }
      else if (S.rotation % 4 == 1) {

      }
      else if (S.rotation % 4 == 2) {

      }
      else if (S.rotation % 4 == 3) {
        
      }
    }
    else if (movimiento == 3) {
      if (S.rotation % 4 == 0) {

      }
      else if (S.rotation % 4 == 1) {

      }
      else if (S.rotation % 4 == 2) {

      }
      else if (S.rotation % 4 == 3) {
        
      }
    }
    else if (movimiento == 4) {
      if (S.rotation % 4 == 0) {

      }
      else if (S.rotation % 4 == 1) {

      }
      else if (S.rotation % 4 == 2) {

      }
      else if (S.rotation % 4 == 3) {
        
      }
    }
    else if (movimiento == 5) {
      if (S.rotation % 4 == 0) {

      }
      else if (S.rotation % 4 == 1) {

      }
      else if (S.rotation % 4 == 2) {

      }
      else if (S.rotation % 4 == 3) {
        
      }
    }
    else if (movimiento == 6) {
      if (S.rotation % 4 == 0) {

      }
      else if (S.rotation % 4 == 1) {

      }
      else if (S.rotation % 4 == 2) {

      }
      else if (S.rotation % 4 == 3) {
        
      }
    }
  }
  else if (activeShape % 7 == 5) {
    if (movimiento == 1) {
      if (Z.rotation % 4 == 0) {

      }
      else if (Z.rotation % 4 == 1) {

      }
      else if (Z.rotation % 4 == 2) {

      }
      else if (Z.rotation % 4 == 3) {
        
      }
    }
    else if (movimiento == 2) {
      if (Z.rotation % 4 == 0) {

      }
      else if (Z.rotation % 4 == 1) {

      }
      else if (Z.rotation % 4 == 2) {

      }
      else if (Z.rotation % 4 == 3) {
        
      }
    }
    else if (movimiento == 3) {
      if (Z.rotation % 4 == 0) {

      }
      else if (Z.rotation % 4 == 1) {

      }
      else if (Z.rotation % 4 == 2) {

      }
      else if (Z.rotation % 4 == 3) {
        
      }
    }
    else if (movimiento == 4) {
      if (Z.rotation % 4 == 0) {

      }
      else if (Z.rotation % 4 == 1) {

      }
      else if (Z.rotation % 4 == 2) {

      }
      else if (Z.rotation % 4 == 3) {
        
      }
    }
    else if (movimiento == 5) {
      if (Z.rotation % 4 == 0) {

      }
      else if (Z.rotation % 4 == 1) {

      }
      else if (Z.rotation % 4 == 2) {

      }
      else if (Z.rotation % 4 == 3) {
        
      }
    }
    else if (movimiento == 6) {
      if (Z.rotation % 4 == 0) {

      }
      else if (Z.rotation % 4 == 1) {

      }
      else if (Z.rotation % 4 == 2) {

      }
      else if (Z.rotation % 4 == 3) {
        
      }
    }
  }
  else if (activeShape % 7 == 6) {
    if (movimiento == 1) {
      if (T.rotation % 4 == 0) {

      }
      else if (T.rotation % 4 == 1) {

      }
      else if (T.rotation % 4 == 2) {

      }
      else if (T.rotation % 4 == 3) {
        
      }
    }
    else if (movimiento == 2) {
      if (T.rotation % 4 == 0) {

      }
      else if (T.rotation % 4 == 1) {

      }
      else if (T.rotation % 4 == 2) {

      }
      else if (T.rotation % 4 == 3) {
        
      }
    }
    else if (movimiento == 3) {
      if (T.rotation % 4 == 0) {

      }
      else if (T.rotation % 4 == 1) {

      }
      else if (T.rotation % 4 == 2) {

      }
      else if (T.rotation % 4 == 3) {
        
      }
    }
    else if (movimiento == 4) {
      if (T.rotation % 4 == 0) {

      }
      else if (T.rotation % 4 == 1) {

      }
      else if (T.rotation % 4 == 2) {

      }
      else if (T.rotation % 4 == 3) {
        
      }
    }
    else if (movimiento == 5) {
      if (T.rotation % 4 == 0) {

      }
      else if (T.rotation % 4 == 1) {

      }
      else if (T.rotation % 4 == 2) {

      }
      else if (T.rotation % 4 == 3) {
        
      }
    }
    else if (movimiento == 6) {
      if (T.rotation % 4 == 0) {

      }
      else if (T.rotation % 4 == 1) {

      }
      else if (T.rotation % 4 == 2) {

      }
      else if (T.rotation % 4 == 3) {
        
      }
    }
  }
}


//let infoDeL1 = [];

let L1 = {
    posEnX : 100,
    posEnY : 0,
    rotation : 0,
    limiteXR0 : 0,
    limiteY0 : height - 60,
    limiteXR1 : 0,
    limiteY1 : height - 40,
    limiteXR2 : 20,
    limiteY2 : height - 60,
    limiteXR3 : 0,
    limiteY3 : height - 60,
    limiteXI0 : width - 40,
    limiteXI1 : width - 60,
    limiteXI2 : width - 60,
    limiteXI3 : width - 60,
    rotation0 : [[1, 0, 0], [1, 0, 0], [1, 1, 0]],
    rotation1 : [[1, 1, 1], [1, 0, 0], [0, 0, 0]],
    rotation2 : [[0, 1, 1], [0, 0, 1], [0, 0, 1]],
    rotation3 : [[0, 0, 0], [0, 0, 1], [1, 1, 1]],
    draw : function (){
      strokeWeight(2);
      stroke(0, 255);
      fill(255, 140, 0);
      movimiento = 1;
      if (this.rotation % 4 == 0) {
          rect(this.posEnX, this.posEnY, 20, 20);
          rect(this.posEnX, this.posEnY + 20, 20, 20);
          rect(this.posEnX, this.posEnY + 40, 20, 20);
          rect(this.posEnX + 20, this.posEnY + 40, 20, 20);
      }
      else if (this.rotation % 4 == 1) {
          rect(this.posEnX + 40, this.posEnY, 20, 20);
          rect(this.posEnX + 20, this.posEnY, 20, 20);
          rect(this.posEnX, this.posEnY, 20, 20);
          rect(this.posEnX, this.posEnY + 20, 20, 20);
      }
      else if (this.rotation % 4 == 2) {
          rect(this.posEnX + 20, this.posEnY, 20, 20);
          rect(this.posEnX + 40, this.posEnY, 20, 20);
          rect(this.posEnX + 40, this.posEnY + 20, 20, 20);
          rect(this.posEnX + 40, this.posEnY + 40, 20, 20);
      }
      else if (this.rotation % 4 == 3) {
          rect(this.posEnX + 40, this.posEnY + 20, 20, 20);
          rect(this.posEnX + 40, this.posEnY + 40, 20, 20);
          rect(this.posEnX + 20, this.posEnY + 40, 20, 20);
          rect(this.posEnX, this.posEnY + 40, 20, 20);
      }
    },
    rotate : function () {
      movimiento = 2;  
      this.rotation += 1;
    },
    moveLeft : function () {
      movimiento = 3;  
      if (this.rotation % 4 == 0) {
            if (this.posEnX > this.limiteXR0) {
              this.posEnX -= 20;
            }
        }
        else if (this.rotation % 4 == 1) {
            if (this.posEnX > this.limiteXR1) {
              this.posEnX -= 20;
            }
        }
        else if (this.rotation % 4 == 2) {
            if (this.posEnX > this.limiteXR2) {
              this.posEnX -= 20;
            }
        }
        else if (this.rotation % 4 == 3) {
            if (this.posEnX > this.limiteXR3) {
              this.posEnX -= 20;
            }
        }
    },
    moveRight : function () {
      movimiento = 4;
      if (this.rotation % 4 == 0) {
            if (this.posEnX < this.limiteXI0) {
              this.posEnX += 20;
            }
        }
        else if (this.rotation % 4 == 1) {
            if (this.posEnX < this.limiteXI1) {
              this.posEnX += 20;
            }
        }
        else if (this.rotation % 4 == 2) {
            if (this.posEnX < this.limiteXI2) {
              this.posEnX += 20;
            }
        }
        else if (this.rotation % 4 == 3) {
            if (this.posEnX < this.limiteXI3) {
              this.posEnX += 20;
            }
        }
    },
    moveDown : function () {
      movimiento = 5;  
      if (this.rotation % 4 == 0) {
            if (this.posEnY < this.limiteY0) {
              this.posEnY += 20;
            }
        }
        else if (this.rotation % 4 == 1) {
            if (this.posEnY < this.limiteY1) {
              this.posEnY += 20;
            }
        }
        else if (this.rotation % 4 == 2) {
            if (this.posEnY < this.limiteY2) {
              this.posEnY += 20;
            }
        }
        else if (this.rotation % 4 == 3) {
            if (this.posEnY < this.limiteY3) {
              this.posEnY += 20;
            }
        }
    },
    fallDown : function () {
      movimiento = 6;
      if (this.rotation % 4 == 0) {
          this.posEnY = this.limiteY0;
      }
      else if (this.rotation % 4 == 1) {
          this.posEnY = this.limiteY1;
      }
      else if (this.rotation % 4 == 2) {
          this.posEnY = this.limiteY2;
      }
      else if (this.rotation % 4 == 3) {
          this.posEnY = this.limiteY3;
      }
    },
};

//let infoDeL2 = [];

let L2 = {
    posEnX : 100,
    posEnY : 0,
    rotation : 0,
    limiteXR0 : 0,
    limiteY0 : height - 60,
    limiteXR1 : 20,
    limiteY1 : height - 60,
    limiteXR2 : 20,
    limiteY2 : height - 60,
    limiteXR3 : 20,
    limiteY3 : height - 40,
    limiteXI0 : width - 40,
    limiteXI1 : width - 40,
    limiteXI2 : width - 20,
    limiteXI3 : width - 40,
    rotation0 : [[0, 0, 1], [0, 0, 1], [0, 1, 1]],
    rotation1 : [[0, 1, 1], [0, 0, 1], [0, 0, 1]],
    rotation2 : [[1, 1, 0], [1, 0, 0], [1, 0, 0]],
    rotation3 : [[1, 1, 1], [0, 0, 1], [0, 0, 0]],
    draw : function (){
        strokeWeight(2);
        stroke(0, 255);
        fill(38, 0, 231);
        movimiento = 1;
        if (this.rotation % 4 == 0) {
            rect(this.posEnX + 20, this.posEnY, 20, 20);
            rect(this.posEnX + 20, this.posEnY + 20, 20, 20);
            rect(this.posEnX + 20, this.posEnY + 40, 20, 20);
            rect(this.posEnX, this.posEnY + 40, 20, 20);
        }
        else if (this.rotation % 4 == 1) {
            rect(this.posEnX + 20, this.posEnY + 40, 20, 20);
            rect(this.posEnX, this.posEnY + 40, 20, 20);
            rect(this.posEnX - 20, this.posEnY + 40, 20, 20);
            rect(this.posEnX - 20, this.posEnY + 20, 20, 20);
        }
        else if (this.rotation % 4 == 2) {
            rect(this.posEnX - 20, this.posEnY, 20, 20);
            rect(this.posEnX, this.posEnY, 20, 20);
            rect(this.posEnX - 20, this.posEnY + 20, 20, 20);
            rect(this.posEnX - 20, this.posEnY + 40, 20, 20);
        }
        else if (this.rotation % 4 == 3) {
            rect(this.posEnX - 20, this.posEnY, 20, 20);
            rect(this.posEnX, this.posEnY, 20, 20);
            rect(this.posEnX + 20, this.posEnY, 20, 20);
            rect(this.posEnX + 20, this.posEnY + 20, 20, 20);
        }
    },
    rotate : function () {
      movimiento = 2;  
      this.rotation += 1;
    },
    moveLeft : function () {
      movimiento = 3;  
      if (this.rotation % 4 == 0) {
            if (this.posEnX > this.limiteXR0) {
              this.posEnX -= 20;
            }
        }
        else if (this.rotation % 4 == 1) {
            if (this.posEnX > this.limiteXR1) {
              this.posEnX -= 20;
            }
        }
        else if (this.rotation % 4 == 2) {
            if (this.posEnX > this.limiteXR2) {
              this.posEnX -= 20;
            }
        }
        else if (this.rotation % 4 == 3) {
            if (this.posEnX > this.limiteXR3) {
              this.posEnX -= 20;
            }
        }
    },
    moveRight : function () {
      movimiento = 4;
      if (this.rotation % 4 == 0) {
            if (this.posEnX < this.limiteXI0) {
              this.posEnX += 20;
            }
        }
        else if (this.rotation % 4 == 1) {
            if (this.posEnX < this.limiteXI1) {
              this.posEnX += 20;
            }
        }
        else if (this.rotation % 4 == 2) {
            if (this.posEnX < this.limiteXI2) {
              this.posEnX += 20;
            }
        }
        else if (this.rotation % 4 == 3) {
            if (this.posEnX < this.limiteXI3) {
              this.posEnX += 20;
            }
        }
    },
    moveDown : function () {
      movimiento = 5;  
      if (this.rotation % 4 == 0) {
            if (this.posEnY < this.limiteY0) {
              this.posEnY += 20;
            }
        }
        else if (this.rotation % 4 == 1) {
            if (this.posEnY < this.limiteY1) {
              this.posEnY += 20;
            }
        }
        else if (this.rotation % 4 == 2) {
            if (this.posEnY < this.limiteY2) {
              this.posEnY += 20;
            }
        }
        else if (this.rotation % 4 == 3) {
            if (this.posEnY < this.limiteY3) {
              this.posEnY += 20;
            }
        }
    },
    fallDown : function () {
      movimiento = 6;  
      if (this.rotation % 4 == 0) {
            this.posEnY = this.limiteY0;
        }
        else if (this.rotation % 4 == 1) {
            this.posEnY = this.limiteY1;
        }
        else if (this.rotation % 4 == 2) {
            this.posEnY = this.limiteY2;
        }
        else if (this.rotation % 4 == 3) {
            this.posEnY = this.limiteY3;
        }
    },
}; 

//let infoDeI = [];

let I = {
    posEnX : 100,
    posEnY : 0,
    rotation : 0,
    limiteXR0 : 0,
    limiteY0 : height - 80,
    limiteXR1 : 40,
    limiteY1 : height - 60,
    limiteXR2 : 20,
    limiteY2 : height - 80,
    limiteXR3 : 40,
    limiteY3 : height - 60,
    limiteXI0 : width - 20,
    limiteXI1 : width - 40,
    limiteXI2 : width,
    limiteXI3 : width - 20,
    rotation0 : [[0, 0, 1, 0], [0, 0, 1, 0], [0, 0, 1, 0], [0, 0, 1, 0]],
    rotation1 : [[0, 0, 0, 0], [0, 0, 0, 0], [1, 1, 1, 1], [0, 0, 0, 0]],
    rotation2 : [[0, 1, 0, 0], [0, 1, 0, 0], [0, 1, 0, 0], [0, 1, 0, 0]],
    rotation3 : [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]],
    draw : function (){
        strokeWeight(2);
        stroke(0, 255);
        fill(0, 255, 255);
        movimiento = 1;
        if (this.rotation % 4 == 0) {
            rect(this.posEnX, this.posEnY, 20, 20);
            rect(this.posEnX, this.posEnY + 20, 20, 20);
            rect(this.posEnX, this.posEnY + 40, 20, 20);
            rect(this.posEnX, this.posEnY + 60, 20, 20);
        }
        else if (this.rotation % 4 == 1) {
            rect(this.posEnX, this.posEnY + 40, 20, 20);
            rect(this.posEnX - 20, this.posEnY + 40, 20, 20);
            rect(this.posEnX - 40, this.posEnY + 40, 20, 20);
            rect(this.posEnX + 20, this.posEnY + 40, 20, 20);
        }
        else if (this.rotation % 4 == 2) {
            rect(this.posEnX - 20, this.posEnY, 20, 20);
            rect(this.posEnX - 20, this.posEnY + 20, 20, 20);
            rect(this.posEnX - 20, this.posEnY + 40, 20, 20);
            rect(this.posEnX - 20, this.posEnY + 60, 20, 20);
        }
        else if (this.rotation % 4 == 3) {
            rect(this.posEnX, this.posEnY + 20, 20, 20);
            rect(this.posEnX - 20, this.posEnY + 20, 20, 20);
            rect(this.posEnX - 40, this.posEnY + 20, 20, 20);
            rect(this.posEnX + 20, this.posEnY + 20, 20, 20);
        }
    },
    rotate : function () {
      movimiento = 2;  
      this.rotation += 1;
    },
    moveLeft : function () {
      movimiento = 3;  
      if (this.rotation % 4 == 0) {
            if (this.posEnX > this.limiteXR0) {
              this.posEnX -= 20;
            }
        }
        else if (this.rotation % 4 == 1) {
            if (this.posEnX > this.limiteXR1) {
              this.posEnX -= 20;
            }
        }
        else if (this.rotation % 4 == 2) {
            if (this.posEnX > this.limiteXR2) {
              this.posEnX -= 20;
            }
        }
        else if (this.rotation % 4 == 3) {
            if (this.posEnX > this.limiteXR3) {
              this.posEnX -= 20;
            }
        }
    },
    moveRight : function () {
      movimiento = 4;
      if (this.rotation % 4 == 0) {
            if (this.posEnX < this.limiteXI0) {
              this.posEnX += 20;
            }
        }
        else if (this.rotation % 4 == 1) {
            if (this.posEnX < this.limiteXI1) {
              this.posEnX += 20;
            }
        }
        else if (this.rotation % 4 == 2) {
            if (this.posEnX < this.limiteXI2) {
              this.posEnX += 20;
            }
        }
        else if (this.rotation % 4 == 3) {
            if (this.posEnX < this.limiteXI3) {
              this.posEnX += 20;
            }
        }
    },
    moveDown : function () {
      movimiento = 5;  
      if (this.rotation % 4 == 0) {
            if (this.posEnY < this.limiteY0) {
              this.posEnY += 20;
            }
        }
        else if (this.rotation % 4 == 1) {
            if (this.posEnY < this.limiteY1) {
              this.posEnY += 20;
            }
        }
        else if (this.rotation % 4 == 2) {
            if (this.posEnY < this.limiteY2) {
              this.posEnY += 20;
            }
        }
        else if (this.rotation % 4 == 3) {
            if (this.posEnY < this.limiteY3) {
              this.posEnY += 20;
            }
        }
    },
    fallDown : function () {
      movimiento = 6;  
      if (this.rotation % 4 == 0) {
            this.posEnY = this.limiteY0;
        }
        else if (this.rotation % 4 == 1) {
            this.posEnY = this.limiteY1;
        }
        else if (this.rotation % 4 == 2) {
            this.posEnY = this.limiteY2;
        }
        else if (this.rotation % 4 == 3) {
            this.posEnY = this.limiteY3;
        }
    },
};

//let infoDeCuadrado = [];

let Cuad = {
    posEnX : 100,
    posEnY : 0,
    rotation : 0,
    limiteXR0 : 0,
    limiteY0 : height - 40,
    limiteXR1 : 0,
    limiteY1 : height - 40,
    limiteXR2 : 0,
    limiteY2 : height - 40,
    limiteXR3 : 0,
    limiteY3 : height - 40,
    limiteXI0 : width - 40,
    limiteXI1 : width - 40,
    limiteXI2 : width - 40,
    limiteXI3 : width - 40,
    rotation0 : [[1, 1] [1, 1]],
    rotation1 : [[1, 1] [1, 1]],
    rotation2 : [[1, 1] [1, 1]],
    rotation3 : [[1, 1] [1, 1]],
    draw : function (){
        strokeWeight(2);
        stroke(0, 255);
        fill(255, 255, 0);
        movimiento = 1;
        if (this.rotation % 4 == 0) {
          rect(this.posEnX, this.posEnY, 20, 20);
          rect(this.posEnX, this.posEnY + 20, 20, 20);
          rect(this.posEnX + 20, this.posEnY, 20, 20);
          rect(this.posEnX + 20, this.posEnY + 20, 20, 20);
        }
        else if (this.rotation % 4 == 1) {
          rect(this.posEnX, this.posEnY, 20, 20);
          rect(this.posEnX, this.posEnY + 20, 20, 20);
          rect(this.posEnX + 20, this.posEnY, 20, 20);
          rect(this.posEnX + 20, this.posEnY + 20, 20, 20);
        }
        else if (this.rotation % 4 == 2) {
          rect(this.posEnX, this.posEnY, 20, 20);
          rect(this.posEnX, this.posEnY + 20, 20, 20);
          rect(this.posEnX + 20, this.posEnY, 20, 20);
          rect(this.posEnX + 20, this.posEnY + 20, 20, 20);
        }
        else if (this.rotation % 4 == 3) {
          rect(this.posEnX, this.posEnY, 20, 20);
          rect(this.posEnX, this.posEnY + 20, 20, 20);
          rect(this.posEnX + 20, this.posEnY, 20, 20);
          rect(this.posEnX + 20, this.posEnY + 20, 20, 20);
        }
    },
    rotate : function () {
      movimiento = 2;  
      this.rotation += 1;
    },
    moveLeft : function () {
      movimiento = 3;  
      if (this.rotation % 4 == 0) {
            if (this.posEnX > this.limiteXR0) {
              this.posEnX -= 20;
            }
        }
        else if (this.rotation % 4 == 1) {
            if (this.posEnX > this.limiteXR1) {
              this.posEnX -= 20;
            }
        }
        else if (this.rotation % 4 == 2) {
            if (this.posEnX > this.limiteXR2) {
              this.posEnX -= 20;
            }
        }
        else if (this.rotation % 4 == 3) {
            if (this.posEnX > this.limiteXR3) {
              this.posEnX -= 20;
            }
        }
    },
    moveRight : function () {
      movimiento = 4;  
      if (this.rotation % 4 == 0) {
            if (this.posEnX < this.limiteXI0) {
              this.posEnX += 20;
            }
        }
        else if (this.rotation % 4 == 1) {
            if (this.posEnX < this.limiteXI1) {
              this.posEnX += 20;
            }
        }
        else if (this.rotation % 4 == 2) {
            if (this.posEnX < this.limiteXI2) {
              this.posEnX += 20;
            }
        }
        else if (this.rotation % 4 == 3) {
            if (this.posEnX < this.limiteXI3) {
              this.posEnX += 20;
            }
        }
    },
    moveDown : function () {
      movimiento = 5;  
      if (this.rotation % 4 == 0) {
            if (this.posEnY < this.limiteY0) {
              this.posEnY += 20;
            }
        }
        else if (this.rotation % 4 == 1) {
            if (this.posEnY < this.limiteY1) {
              this.posEnY += 20;
            }
        }
        else if (this.rotation % 4 == 2) {
            if (this.posEnY < this.limiteY2) {
              this.posEnY += 20;
            }
        }
        else if (this.rotation % 4 == 3) {
            if (this.posEnY < this.limiteY3) {
              this.posEnY += 20;
            }
        }
    },
    fallDown : function () {
      movimiento = 6;  
      if (this.rotation % 4 == 0) {
            this.posEnY = this.limiteY0;
        }
        else if (this.rotation % 4 == 1) {
            this.posEnY = this.limiteY1;
        }
        else if (this.rotation % 4 == 2) {
            this.posEnY = this.limiteY2;
        }
        else if (this.rotation % 4 == 3) {
            this.posEnY = this.limiteY3;
        }
    },
};

//let infoDeS = [];

let S = {
    posEnX : 100,
    posEnY : 0,
    rotation : 0,
    limiteXR0 : 0,
    limiteY0 : height - 20,
    limiteXR1 : 0,
    limiteY1 : height - 40,
    limiteXR2 : 0,
    limiteY2 : height - 20,
    limiteXR3 : 0,
    limiteY3 : height - 40,
    limiteXI0 : width - 60,
    limiteXI1 : width - 40,
    limiteXI2 : width - 60,
    limiteXI3 : width - 40,
    rotation0 : [[0, 1, 1], [1, 1, 0], [0, 0, 0]],
    rotation1 : [[1, 0, 0], [1, 1, 0], [0, 1, 0]],
    rotation2 : [[0, 1, 1], [1, 1, 0], [0, 0, 0]],
    rotation3 : [[1, 0, 0], [1, 1, 0], [0, 1, 0]],
    draw : function (){
        strokeWeight(2);
        stroke(0, 255);
        fill(0, 255, 0);
        movimiento = 1;
        if (this.rotation % 4 == 0) {
          rect(this.posEnX, this.posEnY, 20, 20);
          rect(this.posEnX + 20, this.posEnY, 20, 20);
          rect(this.posEnX + 20, this.posEnY - 20, 20, 20);
          rect(this.posEnX + 40, this.posEnY - 20, 20, 20);
        }
        else if (this.rotation % 4 == 1) {
          rect(this.posEnX, this.posEnY, 20, 20);
          rect(this.posEnX + 20, this.posEnY, 20, 20);
          rect(this.posEnX, this.posEnY - 20, 20, 20);
          rect(this.posEnX + 20, this.posEnY + 20, 20, 20);
        }
        else if (this.rotation % 4 == 2) {
          rect(this.posEnX, this.posEnY, 20, 20);
          rect(this.posEnX + 20, this.posEnY, 20, 20);
          rect(this.posEnX + 20, this.posEnY - 20, 20, 20);
          rect(this.posEnX + 40, this.posEnY - 20, 20, 20);
        }
        else if (this.rotation % 4 == 3) {
          rect(this.posEnX, this.posEnY, 20, 20);
          rect(this.posEnX + 20, this.posEnY, 20, 20);
          rect(this.posEnX, this.posEnY - 20, 20, 20);
          rect(this.posEnX + 20, this.posEnY + 20, 20, 20);
        }
    },
    rotate : function () {
      movimiento = 2;  
      this.rotation += 1;
    },
    moveLeft : function () {
      movimiento = 3;  
      if (this.rotation % 4 == 0) {
            if (this.posEnX > this.limiteXR0) {
              this.posEnX -= 20;
            }
        }
        else if (this.rotation % 4 == 1) {
            if (this.posEnX > this.limiteXR1) {
              this.posEnX -= 20;
            }
        }
        else if (this.rotation % 4 == 2) {
            if (this.posEnX > this.limiteXR2) {
              this.posEnX -= 20;
            }
        }
        else if (this.rotation % 4 == 3) {
            if (this.posEnX > this.limiteXR3) {
              this.posEnX -= 20;
            }
        }
    },
    moveRight : function () {
      movimiento = 4;
      if (this.rotation % 4 == 0) {
            if (this.posEnX < this.limiteXI0) {
              this.posEnX += 20;
            }
        }
        else if (this.rotation % 4 == 1) {
            if (this.posEnX < this.limiteXI1) {
              this.posEnX += 20;
            }
        }
        else if (this.rotation % 4 == 2) {
            if (this.posEnX < this.limiteXI2) {
              this.posEnX += 20;
            }
        }
        else if (this.rotation % 4 == 3) {
            if (this.posEnX < this.limiteXI3) {
              this.posEnX += 20;
            }
        }
    },
    moveDown : function () {
      movimiento = 5;  
      if (this.rotation % 4 == 0) {
            if (this.posEnY < this.limiteY0) {
              this.posEnY += 20;
            }
        }
        else if (this.rotation % 4 == 1) {
            if (this.posEnY < this.limiteY1) {
              this.posEnY += 20;
            }
        }
        else if (this.rotation % 4 == 2) {
            if (this.posEnY < this.limiteY2) {
              this.posEnY += 20;
            }
        }
        else if (this.rotation % 4 == 3) {
            if (this.posEnY < this.limiteY3) {
              this.posEnY += 20;
            }
        }
    },
    fallDown : function () {
      movimiento = 6;  
      if (this.rotation % 4 == 0) {
            this.posEnY = this.limiteY0;
        }
        else if (this.rotation % 4 == 1) {
            this.posEnY = this.limiteY1;
        }
        else if (this.rotation % 4 == 2) {
            this.posEnY = this.limiteY2;
        }
        else if (this.rotation % 4 == 3) {
            this.posEnY = this.limiteY3;
        }
    },
};

//let infoDeZ = [];

let Z = {
    posEnX : 100,
    posEnY : 0,
    rotation : 0,
    limiteXR0 : 0,
    limiteY0 : height - 40,
    limiteXR1 : 0,
    limiteY1 : height - 60,
    limiteXR2 : 0,
    limiteY2 : height - 40,
    limiteXR3 : 0,
    limiteY3 : height - 60,
    limiteXI0 : width - 60,
    limiteXI1 : width - 40,
    limiteXI2 : width - 60,
    limiteXI3 : width - 40,
    rotation0 : [[1, 1, 0], [0, 1, 1], [0, 0, 0]],
    rotation1 : [[0, 1, 0], [1, 1, 0], [1, 0, 0]],
    rotation2 : [[1, 1, 0], [0, 1, 1], [0, 0, 0]],
    rotation3 : [[0, 1, 0], [1, 1, 0], [1, 0, 0]],
    draw : function (){
        strokeWeight(2);
        stroke(0, 255);
        fill(255, 0, 0);
        movimiento = 1;
        if (this.rotation % 4 == 0) {
          rect(this.posEnX, this.posEnY, 20, 20);
          rect(this.posEnX + 20, this.posEnY, 20, 20);
          rect(this.posEnX + 20, this.posEnY + 20, 20, 20);
          rect(this.posEnX + 40, this.posEnY + 20, 20, 20);
        }
        else if (this.rotation % 4 == 1) {
          rect(this.posEnX + 20, this.posEnY, 20, 20);
          rect(this.posEnX, this.posEnY + 20, 20, 20);
          rect(this.posEnX + 20, this.posEnY + 20, 20, 20);
          rect(this.posEnX, this.posEnY + 40, 20, 20);
        }
        else if (this.rotation % 4 == 2) {
          rect(this.posEnX, this.posEnY, 20, 20);
          rect(this.posEnX + 20, this.posEnY, 20, 20);
          rect(this.posEnX + 20, this.posEnY + 20, 20, 20);
          rect(this.posEnX + 40, this.posEnY + 20, 20, 20);
        }
        else if (this.rotation % 4 == 3) {
          rect(this.posEnX + 20, this.posEnY, 20, 20);
          rect(this.posEnX, this.posEnY + 20, 20, 20);
          rect(this.posEnX + 20, this.posEnY + 20, 20, 20);
          rect(this.posEnX, this.posEnY + 40, 20, 20);
        }
    },
    rotate : function () {
      movimiento = 2;  
      this.rotation += 1;
    },
    moveLeft : function () {
      movimiento = 3;  
      if (this.rotation % 4 == 0) {
            if (this.posEnX > this.limiteXR0) {
              this.posEnX -= 20;
            }
        }
        else if (this.rotation % 4 == 1) {
            if (this.posEnX > this.limiteXR1) {
              this.posEnX -= 20;
            }
        }
        else if (this.rotation % 4 == 2) {
            if (this.posEnX > this.limiteXR2) {
              this.posEnX -= 20;
            }
        }
        else if (this.rotation % 4 == 3) {
            if (this.posEnX > this.limiteXR3) {
              this.posEnX -= 20;
            }
        }
    },
    moveRight : function () {
      movimiento = 4;
      if (this.rotation % 4 == 0) {
            if (this.posEnX < this.limiteXI0) {
              this.posEnX += 20;
            }
        }
        else if (this.rotation % 4 == 1) {
            if (this.posEnX < this.limiteXI1) {
              this.posEnX += 20;
            }
        }
        else if (this.rotation % 4 == 2) {
            if (this.posEnX < this.limiteXI2) {
              this.posEnX += 20;
            }
        }
        else if (this.rotation % 4 == 3) {
            if (this.posEnX < this.limiteXI3) {
              this.posEnX += 20;
            }
        }
    },
    moveDown : function () {
      movimiento = 5;  
      if (this.rotation % 4 == 0) {
            if (this.posEnY < this.limiteY0) {
              this.posEnY += 20;
            }
        }
        else if (this.rotation % 4 == 1) {
            if (this.posEnY < this.limiteY1) {
              this.posEnY += 20;
            }
        }
        else if (this.rotation % 4 == 2) {
            if (this.posEnY < this.limiteY2) {
              this.posEnY += 20;
            }
        }
        else if (this.rotation % 4 == 3) {
            if (this.posEnY < this.limiteY3) {
              this.posEnY += 20;
            }
        }
    },
    fallDown : function () {
      movimiento = 6;  
      if (this.rotation % 4 == 0) {
            this.posEnY = this.limiteY0;
        }
        else if (this.rotation % 4 == 1) {
            this.posEnY = this.limiteY1;
        }
        else if (this.rotation % 4 == 2) {
            this.posEnY = this.limiteY2;
        }
        else if (this.rotation % 4 == 3) {
            this.posEnY = this.limiteY3;
        }
    },
};

//let infoDeT = [];

let T = {
    posEnX : 100,
    posEnY : 0,
    rotation : 0,
    limiteXR0 : 0,
    limiteY0 : height - 20,
    limiteXR1 : 20,
    limiteY1 : height - 40,
    limiteXR2 : 0,
    limiteY2 : height - 40,
    limiteXR3 : 0,
    limiteY3 : height - 40,
    limiteXI0 : width - 60,
    limiteXI1 : width - 60,
    limiteXI2 : width - 60,
    limiteXI3 : width - 40,
    rotation0 : [[0, 1, 0], [1, 1, 1], [0, 0, 0]],
    rotation1 : [[0, 1, 0], [0, 1, 1], [0, 1, 0]],
    rotation2 : [[0, 0, 0], [1, 1, 1], [0, 1, 0]],
    rotation3 : [[0, 1, 0], [1, 1, 0], [0, 1, 0]],
    draw : function (){
        strokeWeight(2);
        stroke(0, 255);
        fill(200, 50, 250);
        movimiento = 1;
        if (this.rotation % 4 == 0) {
          rect(this.posEnX, this.posEnY, 20, 20);
          rect(this.posEnX + 20, this.posEnY, 20, 20);
          rect(this.posEnX + 20, this.posEnY - 20, 20);
          rect(this.posEnX + 40, this.posEnY, 20, 20);
        }
        else if (this.rotation % 4 == 1) {
          rect(this.posEnX + 20, this.posEnY, 20, 20);
          rect(this.posEnX + 20, this.posEnY - 20, 20, 20);
          rect(this.posEnX + 40, this.posEnY, 20, 20);
          rect(this.posEnX + 20, this.posEnY + 20, 20, 20);
        }
        else if (this.rotation % 4 == 2) {
          rect(this.posEnX, this.posEnY, 20, 20);
          rect(this.posEnX + 20, this.posEnY, 20, 20);
          rect(this.posEnX + 20, this.posEnY + 20, 20, 20);
          rect(this.posEnX + 40, this.posEnY, 20, 20);
        }
        else if (this.rotation % 4 == 3) {
          rect(this.posEnX + 20, this.posEnY, 20, 20);
          rect(this.posEnX + 20, this.posEnY - 20, 20, 20);
          rect(this.posEnX, this.posEnY, 20, 20);
          rect(this.posEnX + 20, this.posEnY + 20, 20, 20);
        }
    },
    rotate : function () {
      movimiento = 2;  
      this.rotation += 1;
    },
    moveLeft : function () {
      movimiento = 3;  
      if (this.rotation % 4 == 0) {
            if (this.posEnX > this.limiteXR0) {
              this.posEnX -= 20;
            }
        }
        else if (this.rotation % 4 == 1) {
            if (this.posEnX > this.limiteXR1) {
              this.posEnX -= 20;
            }
        }
        else if (this.rotation % 4 == 2) {
            if (this.posEnX > this.limiteXR2) {
              this.posEnX -= 20;
            }
        }
        else if (this.rotation % 4 == 3) {
            if (this.posEnX > this.limiteXR3) {
              this.posEnX -= 20;
            }
        }
    },
    moveRight : function () {
      movimiento = 4;
      if (this.rotation % 4 == 0) {
            if (this.posEnX < this.limiteXI0) {
              this.posEnX += 20;
            }
        }
        else if (this.rotation % 4 == 1) {
            if (this.posEnX < this.limiteXI1) {
              this.posEnX += 20;
            }
        }
        else if (this.rotation % 4 == 2) {
            if (this.posEnX < this.limiteXI2) {
              this.posEnX += 20;
            }
        }
        else if (this.rotation % 4 == 3) {
            if (this.posEnX < this.limiteXI3) {
              this.posEnX += 20;
            }
        }
    },
    moveDown : function () {
      movimiento = 5;  
      if (this.rotation % 4 == 0) {
            if (this.posEnY < this.limiteY0) {
              this.posEnY += 20;
            }
        }
        else if (this.rotation % 4 == 1) {
            if (this.posEnY < this.limiteY1) {
              this.posEnY += 20;
            }
        }
        else if (this.rotation % 4 == 2) {
            if (this.posEnY < this.limiteY2) {
              this.posEnY += 20;
            }
        }
        else if (this.rotation % 4 == 3) {
            if (this.posEnY < this.limiteY3) {
              this.posEnY += 20;
            }
        }
    },
    fallDown : function () {
      movimiento = 6;  
      if (this.rotation % 4 == 0) {
            this.posEnY = this.limiteY0;
        }
        else if (this.rotation % 4 == 1) {
            this.posEnY = this.limiteY1;
        }
        else if (this.rotation % 4 == 2) {
            this.posEnY = this.limiteY2;
        }
        else if (this.rotation % 4 == 3) {
            this.posEnY = this.limiteY3;
        }
    },
};

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


function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function newTetromino() {
  random = getRandomInt(0, 6);
  activeShape = random;
  if (random == 0) {
    L1.draw();
  }
  else if (random == 1) {
    L2.draw();
  }
  else if (random == 2) {
    I.draw();
  }
  else if (random == 3) {
    Cuad.draw();
  }
  else if (random == 4) {
    S.draw();
  }
  else if (random == 5) {
    Z.draw();
  }
  else if (random == 6) {
    T.draw();
  }
}

function drawActiveTetromino() {
  
  if (activeShape % 7 == 0) {
    L1.draw();
  }
  else if (activeShape % 7 == 1) {
    L2.draw();
  } 
  else if (activeShape % 7 == 2) {
    I.draw();
  } 
  else if (activeShape % 7 == 3) {
    Cuad.draw();
  } 
  else if (activeShape % 7 == 4) {
    S.draw();
  } 
  else if (activeShape % 7 == 5) {
    Z.draw();
  } 
  else if (activeShape % 7 == 6) {
    T.draw();
  } 
  if (finishTetromino() == true) {
    endTetromino();
  }
}

function autoMoveDown() {
  if (timer % 40 == 0) {
    if (activeShape % 7 == 0) {
        L1.moveDown();
    }
    else if (activeShape % 7 == 1) {
        L2.moveDown();
    }
    else if (activeShape % 7 == 2) {
        I.moveDown();
    }
    else if (activeShape % 7 == 3) {
        Cuad.moveDown();
    }
    else if (activeShape % 7 == 4) {
        S.moveDown();
    }
    else if (activeShape % 7 == 5) {
        Z.moveDown();
    }
    else if (activeShape % 7 == 6) {
        T.moveDown();
    }
  }
}

function finishTetromino() {
  if (activeShape % 7 == 0) {
    if (L1.rotation % 4 == 0) {
      return (L1.posEnY == L1.limiteY0);
    }
    else if (L1.rotation % 4 == 1) {
      return (L1.posEnY == L1.limiteY1);
    }
    else if (L1.rotation % 4 == 2) {
      return (L1.posEnY == L1.limiteY2);
    }
    else if (L1.rotation % 4 == 3) {
      return (L1.posEnY == L1.limiteY3);
    }
  }
  else if (activeShape % 7 == 1) {
    if (L2.rotation % 4 == 0) {
      return (L2.posEnY == L2.limiteY0);
    }
    else if (L2.rotation % 4 == 1) {
      return (L2.posEnY == L2.limiteY1);
    }
    else if (L2.rotation % 4 == 2) {
      return (L2.posEnY == L2.limiteY2);
    }
    else if (L2.rotation % 4 == 3) {
      return (L2.posEnY == L2.limiteY3);
    }
  }
  else if (activeShape % 7 == 2) {
    if (I.rotation % 4 == 0) {
      return (I.posEnY == I.limiteY0);
    }
    else if (I.rotation % 4 == 1) {
      return (I.posEnY == I.limiteY1);
    }
    else if (I.rotation % 4 == 2) {
      return (I.posEnY == I.limiteY2);
    }
    else if (I.rotation % 4 == 3) {
      return (I.posEnY == I.limiteY3);
    }
  }
  else if (activeShape % 7 == 3) {
    if (Cuad.rotation % 4 == 0) {
      return (Cuad.posEnY == Cuad.limiteY0);
    }
    else if (Cuad.rotation % 4 == 1) {
      return (Cuad.posEnY == Cuad.limiteY1);
    }
    else if (Cuad.rotation % 4 == 2) {
      return (Cuad.posEnY == Cuad.limiteY2);
    }
    else if (Cuad.rotation % 4 == 3) {
      return (Cuad.posEnY == Cuad.limiteY3);
    }
  }
  else if (activeShape % 7 == 4) {
    if (S.rotation % 4 == 0) {
      return (S.posEnY == S.limiteY0);
    }
    else if (S.rotation % 4 == 1) {
      return (S.posEnY == S.limiteY1);
    }
    else if (S.rotation % 4 == 2) {
      return (S.posEnY == S.limiteY2);
    }
    else if (S.rotation % 4 == 3) {
      return (S.posEnY == S.limiteY3);
    }
  }
  else if (activeShape % 7 == 5) {
    if (Z.rotation % 4 == 0) {
      return (Z.posEnY == Z.limiteY0);
    }
    else if (Z.rotation % 4 == 1) {
      return (Z.posEnY == Z.limiteY1);
    }
    else if (Z.rotation % 4 == 2) {
      return (Z.posEnY == Z.limiteY2);
    }
    else if (Z.rotation % 4 == 3) {
      return (Z.posEnY == Z.limiteY3);
    }
  }
  else if (activeShape % 7 == 6) {
    if (T.rotation % 4 == 0) {
      return (T.posEnY == T.limiteY0);
    }
    else if (T.rotation % 4 == 1) {
      return (T.posEnY == T.limiteY1);
    }
    else if (T.rotation % 4 == 2) {
      return (T.posEnY == T.limiteY2);
    }
    else if (T.rotation % 4 == 3) {
      return (T.posEnY == T.limiteY3);
    }
  }
}

// 10 horizontal
// 20 Vertical

function endTetromino() {
  if (activeShape % 7 == 0) {

  }
  else if (activeShape % 7 == 1) {

  }
  else if (activeShape % 7 == 2) {

  }
  else if (activeShape % 7 == 3) {

  }
  else if (activeShape % 7 == 4) {

  }
  else if (activeShape % 7 == 5) {
  
  }
  else if (activeShape % 7 == 6) {

  }
  newTetromino();

}