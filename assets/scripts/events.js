'use strict';
const api = require('./api');
const ui = require('./ui');

const getFormFields = require('../../lib/get-form-fields');

//user sign up
const onSignUp = function () {
  //console.log('sign up');
  $('#sign-up-modal').modal('show');
  $('#sign-up-submit').on('click',function(){
    //console.log('submit pressed');
    //get text fields
    let email = $('#sign-up-email').val();
    let password = $('#sign-up-password').val();
    let confirmPassword = $('#sign-up-confirm-password').val();
    console.log(email);
    console.log(password);
    console.log(confirmPassword);
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
    console.log(email);
    console.log(password);
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
    console.log(oldPassword);
    console.log(NewPassword);
    //close modal
    $('#change-password-modal').modal('hide');
  });
};

//user log out
const onLogOut = function () {
  console.log('logged out');
};

//user new game
const onNewGame = function () {
  console.log('New Game');
};

//user clear board
const onClearBoard = function () {
  console.log('Clear Board');
};

const addHandlers = () => {
  $('#sign-up').on('click', onSignUp);
  $('#log-in').on('click', onLogIn);
  $('#log-out').on('click', onLogOut);
  $('#change-password').on('click', onChangePassword);
  $('#new-game').on('click', onNewGame);
  $('#clear-board').on('click', onClearBoard);
};

module.exports = {
  addHandlers,
};
