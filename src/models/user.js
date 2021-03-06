'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: {
      type: DataTypes.STRING,
      validate: {isEmail: true}
    },
    password: DataTypes.STRING
  }, {});
  return User;
};