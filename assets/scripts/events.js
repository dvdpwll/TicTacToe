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
    console.log(data);

    //send data to api
    api.changePassword(data)
      .done(ui.success)
      .fail(ui.failure);

    //close modal
    $('#change-password-modal').modal('hide');
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
  $('.dropdown-toggle').hide();
};

/*
$('#loading').css("visibility", "visible");
$("p").toggle();
$('#loading').show();
$('.collapse').collapse()
*/


module.exports = {
  addHandlers,
};
