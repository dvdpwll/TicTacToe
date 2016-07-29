#My tictactoe game
Tic-Tac-Toe, The Game

link to game:
https://dvdpwll.github.io/TicTacToe/

Technologies:
HTML, SCSS, JS, JQuery, and Ajax.
Game API by Antony Donovan

Development:
  trouble spots:
    -I changed the module.exports in the app.js file without realizing that I
    had put the app object inside of another object.
    -I had trouble with async, and figuring out how to get a function to wait for
    the server response. In retrospect the solution is super obvious.
    -I'm still uncomfortable with css, I'll need to improve on this more in the future.
  stratagy:
    -My stratagy was to console.log pretty much everything. I needed to make sure
    that the variable I'm using has the information that I wanted and I needed to make sure that
    wherever I sent the information was recieved correctly.
  planning:
    -My plan going into this project was to make a skeleton site first. Then code
    each of the account api requests, then work on game logic, then comunicating with
    the game api. After all of that I'll work on making the site visually appealing.

Things to change in the future:
  -move the buttons related to gameplay out of the dropdown and just have them on the nav bar.
  -and indicator that I need to click on new game to start a game (maybe instructions or board-cover).
  -add a start new game button to the win screen.
  -bux fixes related to clear board and new game.
  -make the mobile version look better.

Wireframs:
  Desktop: https://wireframe.cc/OCaGqW
  Mobile: https://wireframe.cc/LOOEW3

User Stories:
  - As a user I want to sign in b/c I want to keep track of my games.
  - As a user I want to load an ongoing game to keep track of multiple games.
  - As a user I want to change my password b/c of security.
  - As a user I want to play tictactoe b/c it is fun.
  - As an admin I want to use tokens to prevent others from messing up games.
