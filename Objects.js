let height = 400;
let width = 280;

activeShape = 0;
timer = 0;
posXInicial = 140;
posYInicial = 0;

//let infoDeL1 = [];

let L1 = {
    posEnX : 140,
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
    draw : function (){
        strokeWeight(2);
        stroke(0, 255);
        fill(255, 140, 0);
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
        this.rotation += 1;
    },
    moveLeft : function () {
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
    posEnX : 140,
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
    draw : function (){
        strokeWeight(2);
        stroke(0, 255);
        fill(38, 0, 231);
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
        this.rotation += 1;
    },
    moveLeft : function () {
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
    posEnX : 140,
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
    draw : function (){
        strokeWeight(2);
        stroke(0, 255);
        fill(0, 255, 255);
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
        this.rotation += 1;
    },
    moveLeft : function () {
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
    posEnX : 140,
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
    draw : function (){
        strokeWeight(2);
        stroke(0, 255);
        fill(255, 255, 0);
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
        this.rotation += 1;
    },
    moveLeft : function () {
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
    posEnX : 140,
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
    draw : function (){
        strokeWeight(2);
        stroke(0, 255);
        fill(0, 255, 0);
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
        this.rotation += 1;
    },
    moveLeft : function () {
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
    posEnX : 140,
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
    draw : function (){
        strokeWeight(2);
        stroke(0, 255);
        fill(255, 0, 0);
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
        this.rotation += 1;
    },
    moveLeft : function () {
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
    posEnX : 140,
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
    draw : function (){
        strokeWeight(2);
        stroke(0, 255);
        fill(200, 50, 250);
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
        this.rotation += 1;
    },
    moveLeft : function () {
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
