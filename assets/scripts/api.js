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


module.exports = {
  signUp,
  logIn,
};
