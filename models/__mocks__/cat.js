'use strict'
var SequelizeMock = require('sequelize-mock')
var dbMock = new SequelizeMock()

module.exports = function(sequelize, DataTypes){
  return dbMock.define('Cat', {
    name: 'Paws',
    age: 4,
    city: 'Feral City',
    about_me: 'String, please. Tail, check. Four paws, check. I am alive and kicking!',
    looking_for: 'No tail? No problem. Likes string, too. Less than four paws, whatever, we can hang. Alive and not dead.'
  })
}
