class Tetromino {
    constructor(rotations, color1, color2, color3, size) {
        this.rotations = rotations;
        this.rotation = 0;
        this.posEnX = 100;
        this.posEnY = 0;
        this.size = size;
        this.color1 = color1;
        this.color2 = color2;
        this.color3 = color3;

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
}

/*
rotation0 : [],
rotation1 : [],
rotation2 : [],
rotation3 : [],
*/

width = 200;
height = 400;

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

Trotations = [
    [
        [0, 1, 0], [1, 1, 1], [0, 0, 0],
    ],
    [
        [0, 1, 0], [0, 1, 1], [0, 1, 0]
    ],
    [
        [0, 0, 0], [1, 1, 1], [0, 1, 0]
    ],
    [
        [0, 1, 0], [1, 1, 0], [0, 1, 0]
    ],
];


T = new Tetromino(Trotations, 0, 230 , 255, 3);
