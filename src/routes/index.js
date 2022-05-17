const express = require('express');

const pessoas = require('./pessoasRoute');
const niveis = require('./niveisRoute');

module.exports = (app) => {
  app.use(express.json());
  app.use(pessoas);
  app.use(niveis);
};
