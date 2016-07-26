'use strict';

const appVar = require('./app');

const signUp = (data) => $.ajax({
    url: appVar.app.api + '/sign-up',
    method: 'POST',
    //data: data,
    data,
  });


module.exports = {
  signUp,
};
