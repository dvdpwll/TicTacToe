'use strict';

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
