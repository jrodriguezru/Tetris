// TODO: Incluir en las matrices de información de cada ficha, los límites de cada lado dependiendo la rotación de la ficha.
// TODO: Investigar si hay alguna forma que los dibujos tengan colisión
// TODO: Investigar si hay una función random() en Javascript
// TODO: Investigar si puedo generar nuevas figuas de forma "ilimitada"
// TODO: Agregar la caida fuerte de las piezas con "space"

// Posición en X, Posición en Y, Estado de Rotación, limiteXR0, limiteYR0, limiteXR1, limiteYR1, limiteXR2, limiteYR2, limiteXR3, limiteYR3, limiteXDR0, limiteYDR0, limiteXDR1, limiteYDR1, limiteXDR2, limiteYDR2, limiteXDR3, limiteYDR3.
let infoDeL1 = [20, 20, 0, 340, 0, ];
let infoDeL2 = [40, 100, 0];
let infoDeI = [60, 220, 0];
let infoDeCuadrado = [100, 20, 0];
let infoDeS = [100, 120, 0];
let infoDeZ = [100, 180, 0];
let infoDeT = [220, 120, 0];

let height = 400;
let width = 280;

function setup() {
  createCanvas(width, height);
}

function draw() {
  background(230);

  tablero();  
  fichaL1();
  fichaL2();
  fichaI();
  fichaCuadrado();
  fichaS();
  fichaZ();
  fichaT();

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

}

function fichaL1() {
  strokeWeight(2);
  stroke(0, 255);
  fill(255, 140, 0);
  if (infoDeL1[2] % 4 == 0) {
    rect(infoDeL1[0], infoDeL1[1], 20, 20);
    rect(infoDeL1[0], infoDeL1[1] + 20, 20, 20);
    rect(infoDeL1[0], infoDeL1[1] + 40, 20, 20);
    rect(infoDeL1[0] + 20, infoDeL1[1] + 40, 20, 20);
  }
  else if (infoDeL1[2] % 4 == 1) {
    rect(infoDeL1[0] + 40, infoDeL1[1], 20, 20);
    rect(infoDeL1[0] + 20, infoDeL1[1], 20, 20);
    rect(infoDeL1[0], infoDeL1[1], 20, 20);
    rect(infoDeL1[0], infoDeL1[1] + 20, 20, 20);
  }
  else if (infoDeL1[2] % 4 == 2) {
    rect(infoDeL1[0] + 20, infoDeL1[1], 20, 20);
    rect(infoDeL1[0] + 40, infoDeL1[1], 20, 20);
    rect(infoDeL1[0] + 40, infoDeL1[1] + 20, 20, 20);
    rect(infoDeL1[0] + 40, infoDeL1[1] + 40, 20, 20);
  }
  else if (infoDeL1[2] % 4 == 3) {
    rect(infoDeL1[0] + 40, infoDeL1[1] + 20, 20, 20);
    rect(infoDeL1[0] + 40, infoDeL1[1] + 40, 20, 20);
    rect(infoDeL1[0] + 20, infoDeL1[1] + 40, 20, 20);
    rect(infoDeL1[0], infoDeL1[1] + 40, 20, 20);
  }
}

function fichaL2() {
  strokeWeight(2);
  stroke(0, 255);
  fill(38, 0, 231);
  if (infoDeL2[2] % 4 == 0) {
    rect(infoDeL2[0] + 20, infoDeL2[1], 20, 20);
    rect(infoDeL2[0] + 20, infoDeL2[1] + 20, 20, 20);
    rect(infoDeL2[0] + 20, infoDeL2[1] + 40, 20, 20);
    rect(infoDeL2[0], infoDeL2[1] + 40, 20, 20);
  }
  else if (infoDeL2[2] % 4 == 1) {
    rect(infoDeL2[0] + 20, infoDeL2[1] + 40, 20, 20);
    rect(infoDeL2[0], infoDeL2[1] + 40, 20, 20);
    rect(infoDeL2[0] - 20, infoDeL2[1] + 40, 20, 20);
    rect(infoDeL2[0] - 20, infoDeL2[1] + 20, 20, 20);
  }
  else if (infoDeL2[2] % 4 == 2) {
    rect(infoDeL2[0] - 20, infoDeL2[1], 20, 20);
    rect(infoDeL2[0], infoDeL2[1], 20, 20);
    rect(infoDeL2[0] - 20, infoDeL2[1] + 20, 20, 20);
    rect(infoDeL2[0] - 20, infoDeL2[1] + 40, 20, 20);
  }
  else if (infoDeL2[2] % 4 == 3) {
    rect(infoDeL2[0] - 20, infoDeL2[1], 20, 20);
    rect(infoDeL2[0], infoDeL2[1], 20, 20);
    rect(infoDeL2[0] + 20, infoDeL2[1], 20, 20);
    rect(infoDeL2[0] + 20, infoDeL2[1] + 20, 20, 20);
  }
}

function fichaI() {
  strokeWeight(2);
  stroke(0, 255);
  fill(0, 255, 255);
  if (infoDeI[2] % 4 == 0) {
    rect(infoDeI[0], infoDeI[1], 20, 20);
    rect(infoDeI[0], infoDeI[1] + 20, 20, 20);
    rect(infoDeI[0], infoDeI[1] + 40, 20, 20);
    rect(infoDeI[0], infoDeI[1] + 60, 20, 20);
  }
  else if (infoDeI[2] % 4 == 1) {
    rect(infoDeI[0], infoDeI[1] + 40, 20, 20);
    rect(infoDeI[0] - 20, infoDeI[1] + 40, 20, 20);
    rect(infoDeI[0] - 40, infoDeI[1] + 40, 20, 20);
    rect(infoDeI[0] + 20, infoDeI[1] + 40, 20, 20);
  }
  else if (infoDeI[2] % 4 == 2) {
    rect(infoDeI[0] - 20, infoDeI[1], 20, 20);
    rect(infoDeI[0] - 20, infoDeI[1] + 20, 20, 20);
    rect(infoDeI[0] - 20, infoDeI[1] + 40, 20, 20);
    rect(infoDeI[0] - 20, infoDeI[1] + 60, 20, 20);
  }
  else if (infoDeI[2] % 4 == 3) {
    rect(infoDeI[0], infoDeI[1] + 20, 20, 20);
    rect(infoDeI[0] - 20, infoDeI[1] + 20, 20, 20);
    rect(infoDeI[0] - 40, infoDeI[1] + 20, 20, 20);
    rect(infoDeI[0] + 20, infoDeI[1] + 20, 20, 20);
  }
}

function fichaCuadrado() {
  strokeWeight(2);
  stroke(0, 255);
  fill(255, 255, 0);
  if (infoDeCuadrado[2] % 4 == 0) {
    rect(infoDeCuadrado[0], infoDeCuadrado[1], 20, 20);
    rect(infoDeCuadrado[0], infoDeCuadrado[1] + 20, 20, 20);
    rect(infoDeCuadrado[0] + 20, infoDeCuadrado[1], 20, 20);
    rect(infoDeCuadrado[0] + 20, infoDeCuadrado[1] + 20, 20, 20);
  }
  else if (infoDeCuadrado[2] % 4 == 1) {
    rect(infoDeCuadrado[0], infoDeCuadrado[1], 20, 20);
    rect(infoDeCuadrado[0], infoDeCuadrado[1] + 20, 20, 20);
    rect(infoDeCuadrado[0] + 20, infoDeCuadrado[1], 20, 20);
    rect(infoDeCuadrado[0] + 20, infoDeCuadrado[1] + 20, 20, 20);
  }
  else if (infoDeCuadrado[2] % 4 == 2) {
    rect(infoDeCuadrado[0], infoDeCuadrado[1], 20, 20);
    rect(infoDeCuadrado[0], infoDeCuadrado[1] + 20, 20, 20);
    rect(infoDeCuadrado[0] + 20, infoDeCuadrado[1], 20, 20);
    rect(infoDeCuadrado[0] + 20, infoDeCuadrado[1] + 20, 20, 20);
  }
  else if (infoDeCuadrado[2] % 4 == 3) {
    rect(infoDeCuadrado[0], infoDeCuadrado[1], 20, 20);
    rect(infoDeCuadrado[0], infoDeCuadrado[1] + 20, 20, 20);
    rect(infoDeCuadrado[0] + 20, infoDeCuadrado[1], 20, 20);
    rect(infoDeCuadrado[0] + 20, infoDeCuadrado[1] + 20, 20, 20);
  }
}

function fichaS() {
  strokeWeight(2);
  stroke(0, 255);
  fill(0, 255, 0);
  if (infoDeS[2] % 4 == 0) {
    rect(infoDeS[0], infoDeS[1], 20, 20);
    rect(infoDeS[0] + 20, infoDeS[1], 20, 20);
    rect(infoDeS[0] + 20, infoDeS[1] - 20, 20, 20);
    rect(infoDeS[0] + 40, infoDeS[1] - 20, 20, 20);
  }
  else if (infoDeS[2] % 4 == 1) {
    rect(infoDeS[0], infoDeS[1], 20, 20);
    rect(infoDeS[0] + 20, infoDeS[1], 20, 20);
    rect(infoDeS[0], infoDeS[1] - 20, 20, 20);
    rect(infoDeS[0] + 20, infoDeS[1] + 20, 20, 20);
  }
  else if (infoDeS[2] % 4 == 2) {
    rect(infoDeS[0], infoDeS[1], 20, 20);
    rect(infoDeS[0] + 20, infoDeS[1], 20, 20);
    rect(infoDeS[0] + 20, infoDeS[1] - 20, 20, 20);
    rect(infoDeS[0] + 40, infoDeS[1] - 20, 20, 20);
  }
  else if (infoDeS[2] % 4 == 3) {
    rect(infoDeS[0], infoDeS[1], 20, 20);
    rect(infoDeS[0] + 20, infoDeS[1], 20, 20);
    rect(infoDeS[0], infoDeS[1] - 20, 20, 20);
    rect(infoDeS[0] + 20, infoDeS[1] + 20, 20, 20);
  }
}

function fichaZ() {
  strokeWeight(2);
  stroke(0, 255);
  fill(255, 0, 0);
  if (infoDeZ[2] % 4 == 0) {
    rect(infoDeZ[0], infoDeZ[1], 20, 20);
    rect(infoDeZ[0] + 20, infoDeZ[1], 20, 20);
    rect(infoDeZ[0] + 20, infoDeZ[1] + 20, 20, 20);
    rect(infoDeZ[0] + 40, infoDeZ[1] + 20, 20, 20);
  }
  else if (infoDeZ[2] % 4 == 1) {
    rect(infoDeZ[0] + 20, infoDeZ[1], 20, 20);
    rect(infoDeZ[0], infoDeZ[1] + 20, 20, 20);
    rect(infoDeZ[0] + 20, infoDeZ[1] + 20, 20, 20);
    rect(infoDeZ[0], infoDeZ[1] + 40, 20, 20);
  }
  else if (infoDeZ[2] % 4 == 2) {
    rect(infoDeZ[0], infoDeZ[1], 20, 20);
    rect(infoDeZ[0] + 20, infoDeZ[1], 20, 20);
    rect(infoDeZ[0] + 20, infoDeZ[1] + 20, 20, 20);
    rect(infoDeZ[0] + 40, infoDeZ[1] + 20, 20, 20);
  }
  else if (infoDeZ[2] % 4 == 3) {
    rect(infoDeZ[0] + 20, infoDeZ[1], 20, 20);
    rect(infoDeZ[0], infoDeZ[1] + 20, 20, 20);
    rect(infoDeZ[0] + 20, infoDeZ[1] + 20, 20, 20);
    rect(infoDeZ[0], infoDeZ[1] + 40, 20, 20);
  }
}

function fichaT() {
  strokeWeight(2);
  stroke(0, 255);
  fill(200, 50, 250);
  if (infoDeT[2] % 4 == 0) {
    rect(infoDeT[0], infoDeT[1], 20, 20);
    rect(infoDeT[0] + 20, infoDeT[1], 20, 20);
    rect(infoDeT[0] + 20, infoDeT[1] - 20, 20);
    rect(infoDeT[0] + 40, infoDeT[1], 20, 20);
  }
  else if (infoDeT[2] % 4 == 1) {
    rect(infoDeT[0] + 20, infoDeT[1], 20, 20);
    rect(infoDeT[0] + 20, infoDeT[1] - 20, 20, 20);
    rect(infoDeT[0] + 40, infoDeT[1], 20, 20);
    rect(infoDeT[0] + 20, infoDeT[1] + 20, 20, 20);
  }
  else if (infoDeT[2] % 4 == 2) {
    rect(infoDeT[0], infoDeT[1], 20, 20);
    rect(infoDeT[0] + 20, infoDeT[1], 20, 20);
    rect(infoDeT[0] + 20, infoDeT[1] + 20, 20, 20);
    rect(infoDeT[0] + 40, infoDeT[1], 20, 20);
  }
  else if (infoDeT[2] % 4 == 3) {
    rect(infoDeT[0] + 20, infoDeT[1], 20, 20);
    rect(infoDeT[0] + 20, infoDeT[1] - 20, 20, 20);
    rect(infoDeT[0], infoDeT[1], 20, 20);
    rect(infoDeT[0] + 20, infoDeT[1] + 20, 20, 20);
  }
}

function keyPressed() {
  if (keyCode == DOWN_ARROW) {
    if (infoDeT[1] != 380) {
      infoDeT[1] += 20;
    }

  }
  if (keyCode == RIGHT_ARROW) {
    if (infoDeT[0] != 340) {
      infoDeT[0] += 20;
    }
  }
  if (keyCode == LEFT_ARROW) {
    if (infoDeT[0] != 0) {
      infoDeT[0] -= 20;
    }
  }
  if (keyCode == UP_ARROW) {
    infoDeZ[2] += 1;
  }
}