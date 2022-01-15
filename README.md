# Tetris
Tetris project for POO - UN - 2021 - 2022

## What is it used?
We use in this proyect the following:
- Javascript programming language
- p5.js Library. (Information can be found at www.p5js.org)
- p5.quadrille.js Library (information can be found at https://objetos.github.io/p5.quadrille.js/)

## What does it have?
The final project have only 2 html pages.
- The fist one (index.html) is the fully working game without using the p5.quadrille.js library.
- The second one (quadrille.html) is also the fully working game, but using the p5.quadrille.js library.
However in this repository other html pages can be found. Those were used for developing purposes and should not be taken into further consideration.

## What can you do in the working pages?
The main idea of the project, the game, is fully functional; so you can play.
Apart from playing, you can also customize the look and feel of the game. Each page have the following customization options:
- Checkbox for you to choose whether you want all tetrominos to have the same color or not.
- Color Pickers for you to choose what color each (or all) tetrominos will use and to change the color of the background of the playing areas.
- Checkbox for you to choose whether or not you want dark mode applied or not. (When the page is opened, it applies the same mode of the desktop and also changes if the desktop's mode is changed.)

## Anything else worth mentioning?
Yes. 
There is also instructions of how to play the game in each page, as well as the lines cleared counter and the level counter.

## How does it work?
In each of the pages, the Tetromino moves using the arrow keys of the Keyboard, as well as some other special keys:
- Down key: moves the Active Tetromino one block down.
- Left key: moves the Active Tetromino one block to the left.
- Right key: moves the Active Tetromino one block to the right.
- Up key: rotates the Active Tetromino 90º clockwise.
- Spacebar key: It pushes the Active Tetromino to the bottom of the board. 
- Shift key: It changes the Active Tetromino with the one in the hold space.

## Some additional notes:
In this game, there is some differences with the "normal" game. For instance:
- Traditional score is not calculated, only level and lines cleared are calculated and displayed.
- Movement at the end of the Tetromino's life is not supported. I.e. rotating the tetromino at the final row after passing one block, or moving it left/right.