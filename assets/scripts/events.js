'use strict';
const api = require('./api');
const ui = require('./ui');

const getFormFields = require('../../lib/get-form-fields');

const onSignUp = function (event) {
  let data = getFormFields(this);
  event.preventDefault();
  api.signUp(data)
    .done(ui.success)
    .fail(ui.failure);
};

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp);
};

module.exports = {
  addHandlers,
};
