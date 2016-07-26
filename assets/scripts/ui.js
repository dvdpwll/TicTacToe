'use strict';

const app = require('./app');

const success = (data) => {
  console.log('yes');
  console.log(data);
};

const failure = (error) => {
  console.log('no');
  console.error(error);
};

module.exports = {
  success,
  failure,
};
