'use strict';

const appVar = require('./app');

const signUp = (data) => $.ajax({
    url: appVar.app.api + '/sign-up',
    method: 'POST',
    //data: data,
    data,
  });

const logIn = (data) => $.ajax({
    url: appVar.app.api + '/sign-in',
    method: 'POST',
    //data: data,
    data,
  });

const changePassword = (data) => $.ajax({
  url: appVar.app.api + 'change-password/' + appVar.app.user.id,
  method: 'PATCH',
  headers: {
    Authorization: 'Token token=' + appVar.app.user.token,
  },
  //data: data,
  data,
});


module.exports = {
  signUp,
  logIn,
  changePassword,
};
