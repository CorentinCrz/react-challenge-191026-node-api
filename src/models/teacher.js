'use strict';
module.exports = (sequelize, DataTypes) => {
  const Teacher = sequelize.define('Teacher', {
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING
  }, {});
  return Teacher;
};