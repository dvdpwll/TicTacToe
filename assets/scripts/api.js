'use strict';

const app = require('../app');

const signUp = (data) => $.ajax({
  url: app.api + '/sign-up',
  method: 'POST',
  data,
});



module.exports = {
  signUp,
};
