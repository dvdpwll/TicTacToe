'use strict';

let xImg = '<img class="played" src="./assets/X.png">';//change this if you change the img file for x.
let oImg = '<img class="played" src="./assets/O.png">';//change this if you change the img file for o.

const appVar = require('./app');

const success = (data) => {
  console.log(data);
};

const failure = (error) => {
  console.error(error);
};

const signInSuccess = (data) => {
  appVar.app.user = data.user;
  console.log(appVar);
};

const signOutSuccess = () => {
  delete appVar.app.user;
  console.log(appVar);
};

const createGameSuccess = (data) => {
  appVar.app.game = data.game;
  console.log(appVar);
};

const displayLoad = () => {
  let arrayLoad = [];
  arrayLoad = appVar.app.load.cells;

  $('.square').each(function(){
    console.log(this);
    //console.log(arrayLoad.length);
    for (let i = 0; i < arrayLoad.length; i++) {
      //console.log('eeeee');
      if (i === $(this).data('square')) {
        //console.log('aaaaa');
        if (arrayLoad[$(this).data('square')] === 'x') {
          $(this).data('closed', 1);
          $(this).prepend(xImg);
        }
        else if (arrayLoad[$(this).data('square')] === 'o') {
          $(this).data('closed', 2);
          $(this).prepend(oImg);
        }
        else if (arrayLoad[$(this).data('square')] === '') {
          $(this).data('closed', 0);
        }
      }
    }
  });
};

const loadSuccess = (data) => {
  appVar.app.load = data.game;
  //display the info from server
  console.log(data);
  displayLoad();
  //console.log(appVar);
};


module.exports = {
  success,
  failure,
  signInSuccess,
  signOutSuccess,
  createGameSuccess,
  loadSuccess
};
