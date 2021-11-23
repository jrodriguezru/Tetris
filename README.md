# Tetris
Tetris project for POO - UN - 2021

## What is it used?
In this project we had to use Javascript and the p5.js library. (Graphics Library)

## How is it organized?
The project is organized in 4 different HTML pages.
- Home page shows my first implementation of the Tetrominos, using matrices.
- Objects page shows technically the same as the Home page, however, here I re-created everything using only objects.
- Game without Classes page is where only Object implementation of the Tetromino is executed. (Actually on progress...)
- Game with Classes is technically the same as Game without Classes, however, here I used 1 Class and I re-did some functions using other ideas. However, it uses similar principles.

## So, what exactly is in each page?

### Home Page
This page only uses the sketch.js file to work. 
In this file, the Tetromino representation are made using giant matrices where a lot of information relating each type of Tetromino is stored.
This page shows the 7 Tetrominos in a board.
Although the 7 Tetrominos can be moved around, it can only be done to one at a time and this functionality is limited to only the T Tetromino, as I left it when I switched to Objects representation.
The movement of the Tetromino is limited to how they move around in the real game, so they can rotate, move down, move left and right, but they cannot move upwards.

### Objects Page
This page uses the ObjectsOld.js and sketchUsingObject.js files to work
In this file, the Tetrominos are shown exactly as shown in the Home page, however, here I used Object data types instead of matrices.
The 7 Tetrominos can be moved around, however, it is limited to only one at a time. Here, the "active Tetromino" is changed using the Control key of the keyboard.
The movement of the Tetrominos is limited to how they move around in the real game, so they can rotate, move down, move left and right, but they cannot move upwards.

### Game without Classes
This page uses the Objects.js and sketchGame.js files to work
This files are the longest of the whole project. Also, this is the most advanced page of the whole project.
This page, I used the same representation and Object usage with the Tetrominos
This page initially displays only one Tetromino but then it stores the last position on the board and when the Active Tetromino is changed, the last position is left on the board. (This functionality does not work as properly as I would like, beacuse when placing Tetrominos together, it deletes some of the blocks that were there before....)
The Active Tetromino moves as it does in the real game. (Maybe there is some collision problems on the bottom of the board and with some Tetrominos on the left and right sides of the board.)

### Game with Classes
This page uses ObjectsAndClasses.js and sketchUsingObjectsAndClasses.js files.
This page works similar to the Game without Classes page. However it uses a Class and some variables to create the Tetrominos.
This page displays only the Active Tetromino (I have not implemented the board control on this page yet.)
The active Tetromino moves as it does in the real game. However, here I was thinking to use a more centralized collision system, so it does not have collision on the left and right side of the board, only at the bottom.

## How does it work?
In all of the pages, the Tetromino moves using the arrow keys of the Keyboard, as well as some other special keys:
- Down key: moves the Active Tetromino one block down.
- Left key: moves the Active Tetromino one block to the left.
- Right key: moves the Active Tetromino one block to the right.
- Up key: rotates the Active Tetromino.
- Spacebar key: It pushes the Active Tetromino to the bottom of the board. 
- Control key: It changes the Active Tetromino (It only works in the Objects page.)