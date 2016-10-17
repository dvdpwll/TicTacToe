'use strict';

const appVar = require('./app');

const signUp = (data) => $.ajax({
    url: appVar.app.api + 'sign-up/',
    method: 'POST',
    //data: data,
    data,
  });

const logIn = (data) => $.ajax({
    url: appVar.app.api + 'sign-in/',
    method: 'POST',
    data,
  });

const changePassword = (data) => $.ajax({
  url: appVar.app.api + 'change-password/' + appVar.app.user.id,
  method: 'PATCH',
  headers: {
    Authorization: 'Token token=' + appVar.app.user.token,
  },
  data,
});

const signOut = () => $.ajax({
  url: appVar.app.api + 'sign-out/' + appVar.app.user.id,
  method: 'DELETE',
  headers: {
    Authorization: 'Token token=' + appVar.app.user.token,
  },
});

const newGame = (data) => $.ajax({
  url: appVar.app.api + 'games/',
  method: 'POST',
  headers: {
    Authorization: 'Token token=' + appVar.app.user.token,
  },
  data,
});

const updateTheGame = (data) => $.ajax({
  url: appVar.app.api + 'games/' + appVar.app.game.id,
  method: 'PATCH',
  headers: {
    Authorization: 'Token token=' + appVar.app.user.token,
  },
  data,
});

const loadGame = (data) => $.ajax({
  url: appVar.app.api + 'games/' + data,
  method: 'GET',
  headers: {
    Authorization: 'Token token=' + appVar.app.user.token,
  },
});

const seeAllGames = () => $.ajax({
  url: appVar.app.api + 'games/',
  method: 'GET',
  headers: {
    Authorization: 'Token token=' + appVar.app.user.token,
  },
});

module.exports = {
  signUp,
  logIn,
  changePassword,
  signOut,
  newGame,
  updateTheGame,
  appVar,
  loadGame,
  seeAllGames,
};
