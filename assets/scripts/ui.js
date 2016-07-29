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


module.exports = {
  success,
  failure,
  signInSuccess,
  signOutSuccess,
  createGameSuccess,
};
