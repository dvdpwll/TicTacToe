'use strict';
const api = require('./api');
const ui = require('./ui');

//variables
let xImg = '<img class="played" src="./assets/pokeX.gif">';//change this if you change the img file for x.
let oImg = '<img class="played" src="./assets/pokeO.gif">';//change this if you change the img file for o.
let pokemonX = 'Bulbasaur';
let pokemonO = 'Charmander';
let turn = 0;//x's are even, o's are odd
let boardArray = ["", "", "", "", "", "", "", "", ""];
let gameOver = false;

//user sign up
const onSignUp = function () {
  //console.log('sign up');
  $('#sign-up-modal').modal('show');
  $('#sign-up-submit').on('click',function(){
    //console.log('submit pressed');
    //get text fields
    let email = $('#sign-up-email').val();
    let password = $('#sign-up-password').val();
    let password_confirmation = $('#sign-up-confirm-password').val();

    //put information into data object
    let data = {
      "credentials": {
        "email": email,
        "password": password,
        "password_confirmation": password_confirmation
      }
    };

    //send data to api
    api.signUp(data)
      .done(ui.success)
      .fail(ui.failure);

    //close modal
    $('#sign-up-modal').modal('hide');
  });
};

//user log in
const onLogIn = function () {
  //console.log('logged in');
  $('#log-in-modal').modal('show');
  $('#log-in-submit').on('click',function(){
    //console.log('log in pressed');
    //get text fields
    let email = $('#log-in-email').val();
    let password = $('#log-in-password').val();
    // console.log(email);
    // console.log(password);

    //put information into data object
    let data = {
      "credentials": {
        "email": email,
        "password": password,
      }
    };

    //send data to api
    api.logIn(data)
      .done(ui.signInSuccess)
      .fail(ui.failure);

      $('.dropdown-toggle').show();
      $('#sign-up').hide();
      $('#log-in').hide();

    //close modal
    $('#log-in-modal').modal('hide');
  });
};

//user changes password
const onChangePassword = function () {
  //console.log('logged in');
  $('#change-password-modal').modal('show');
  $('#change-password-submit').on('click',function(){
    //console.log('change password pressed');
    //get text fields
    let oldPassword = $('#current-password').val();
    let NewPassword = $('#new-password').val();
    // console.log(oldPassword);
    // console.log(NewPassword);

    let data = {
      "passwords": {
        "old": oldPassword,
        "new": NewPassword,
      }
    };
    //console.log(data);

    //send data to api
    api.changePassword(data)
      .done(ui.success)
      .fail(ui.failure);

    //close modal
    $('#change-password-modal').modal('hide');
  });
};

//display who wins
const onWinner = function (char) {
  //console.log('logged in');
  if (char === 'x') {
    char = pokemonX;
  }
  else if (char === 'o') {
    char = pokemonO;
  }
  let string = char + ' is the winner!';
  $('#display-winner-modal').modal('show');
  $('#winner-body').prepend("<p>" + string + "</p>");
  gameOver = true;
  $('.square').data('closed', 1);

  $('#display-winner-ok').on('click',function(){
    //close modal
    $('#display-winner-modal').modal('hide');
  });
};

//display tie
const onTie = function () {
  //console.log('logged in');
  let string = "Cats Game!";
  $('#display-winner-modal').modal('show');
  $('#winner-body').prepend("<p>" + string + "</p>");
  gameOver = true;
  $('.square').data('closed', 1);

  $('#display-winner-ok').on('click',function(){
    //close modal
    $('#display-winner-modal').modal('hide');
  });
};

//user log out
const onLogOut = function () {
  //console.log('logged out');
  api.signOut()
    .done(ui.signOutSuccess)
    .fail(ui.failure);

    $('.dropdown-toggle').hide();
    $('#sign-up').show();
    $('#log-in').show();
};

//user new game
const onNewGame = function () {
  //console.log('New Game');
  //let userID = api.appVar.app.user.id;
  let data = {};
  $('.square').data('closed', 0);
  //console.log($('.square').data('closed'));

  api.newGame(data)
    .done(ui.createGameSuccess)
    .fail(ui.failure);
};

//send moves to server
const updateGame = function (i, v, o) {
  let data = {
    "game": {
      "cell": {
        "index": i,
        "value": v
      },
      "over": o
    }
  };

  api.updateTheGame(data)
    .done(ui.success)
    .fail(ui.failure);
};

//make changes to screen from what we loaded form server
const displayLoad = (data) => {
  api.appVar.app.load = data.game;
  api.appVar.app.game = data.game;

  let arrayLoad = [];
  arrayLoad = api.appVar.app.game.cells;

  $('.square').each(function(){
    //console.log(this);
    //console.log(arrayLoad.length);
    for (let i = 0; i < arrayLoad.length; i++) {
      //console.log('eeeee');
      let arrIndex = $(this).data('square');
      if (i === $(this).data('square')) {
        //console.log('aaaaa');
        if (arrayLoad[$(this).data('square')] === 'x') {
          $(this).data('closed', 1);
          $(this).prepend(xImg);
          boardArray[arrIndex] = 'x';
          turn++;
        }
        else if (arrayLoad[$(this).data('square')] === 'o') {
          $(this).data('closed', 2);
          $(this).prepend(oImg);
          boardArray[arrIndex] = 'o';
          turn++;
        }
        else if (arrayLoad[$(this).data('square')] === '') {
          $(this).data('closed', 0);
        }
      }
    }
    delete api.appVar.app.load;
  });
};

//user loads games
const onLoadGame = function () {
  //console.log('logged in');
  $('#load-game-modal').modal('show');
  $('#load-game-submit').on('click',function(){
    //console.log('log in pressed');
    //get text fields
    let gameId = $('#load-game-id').val();
    //console.log(gameId);
    api.loadGame(gameId)
      .done(displayLoad)
      .fail(ui.failure);

    //close modal
    $('#load-game-modal').modal('hide');
  });
};

const displayAllGames = function (data) {
  console.log(data);
  console.log(data.games[10].id);
  //console.log(data);
  //console.log(data);
  $('#show-all-games-body').append("<p>Game #:    GameOver: </p>");
  for (let i = 0; i < data.games.length; i++) {
    $('#show-all-games-body').append("<p>" + data.games[i].id + " " +  data.games[i].over + "</p>");
  }
  //let string = 'jidfjisdfroijdfgsjiodrfg';


};

//user sees all games
const onSeeAllGames = function () {
  $('#show-all-games-modal').modal('show');
  //let data;
  api.seeAllGames()
    .done(displayAllGames)
    .fail(ui.failure);
};

//user clear board
const onClearBoard = function () {
  //console.log('Clear Board');
  //clear array
  for (let i = 0; i < boardArray.length; i++) {
    boardArray[i] = "";
  }
  //clear images
  $('.played').remove();
  turn = 0;
};

//gameplay ---------------------------------------!!!!!!!!!!

//check to see if a player has won.
const checkWinner = function (array, char, turns) {
  //check colums
  if (array[0] === char && array[3] === char && array[6] === char && turns) {
    //console.log(char + ' wins');
    onWinner(char);
  }
  else if (array[1] === char && array[4] === char && array[7] === char) {
    //console.log(char + ' wins');
    onWinner(char);
  }
  else if (array[2] === char && array[5] === char && array[8] === char) {
    //console.log(char + ' wins');
    onWinner(char);
  }
  //check rows
  else if (array[0] === char && array[1] === char && array[2] === char) {
    //console.log(char + ' wins');
    onWinner(char);
  }
  else if (array[3] === char && array[4] === char && array[5] === char) {
    //console.log(char + ' wins');
    onWinner(char);
  }
  else if (array[6] === char && array[7] === char && array[8] === char) {
    //console.log(char + ' wins');
    onWinner(char);
  }
  //check diagonals
  else if (array[0] === char && array[4] === char && array[8] === char) {
    //console.log(char + ' wins');
    onWinner(char);
  }
  else if (array[2] === char && array[4] === char && array[6] === char) {
    //console.log(char + ' wins');
    onWinner(char);
  }
  else if (turns > 8) {
    onTie();
  }
};

//after click put x or o
const onMove = function () {
  //console.log(turn);
  //check to see if square is empty
  if ( ($(this).html()) !== xImg && ($(this).html()) !== oImg && ($(this).data('closed')) === 0 ) {
    //get index of square
    let arrIndex = $(this).data('square');
    //console.log(arrIndex);

    if (turn%2 === 0) {
      //add img to tile
      $(this).prepend(xImg);
      turn++;
      //add move to boardArray
      boardArray[arrIndex] = 'x';
      checkWinner(boardArray, 'x', turn);
      updateGame(arrIndex, 'x', gameOver);
    }
    else if (turn%2 !== 0){
      //add img to tile
      $(this).prepend(oImg);
      turn++;
      //add move to boardArray
      boardArray[arrIndex] = 'o';
      checkWinner(boardArray, 'o', turn);
      updateGame(arrIndex, 'o', gameOver);
    }
  }
};


const addHandlers = () => {
  $('#sign-up').on('click', onSignUp);
  $('#log-in').on('click', onLogIn);
  $('#log-out').on('click', onLogOut);
  $('#change-password').on('click', onChangePassword);
  $('#new-game').on('click', onNewGame);
  $('#load-game').on('click', onLoadGame);
  $('#see-all-games').on('click', onSeeAllGames);
  $('#clear-board').on('click', onClearBoard);
  $('.dropdown-toggle').hide();
  $('#tileZero').on('click', onMove);
  $('#tileOne').on('click', onMove);
  $('#tileTwo').on('click', onMove);
  $('#tileThree').on('click', onMove);
  $('#tileFour').on('click', onMove);
  $('#tileFive').on('click', onMove);
  $('#tileSix').on('click', onMove);
  $('#tileSeven').on('click', onMove);
  $('#tileEight').on('click', onMove);
};

module.exports = {
  addHandlers,
};
