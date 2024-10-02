'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Captcha extends Model {
    static associate(models) {}
  }
  Captcha.init(
    {
      captcha: {
        allowNull: false,
        type: DataTypes.STRING
      }
    },
    {
      sequelize,
      modelName: 'Captcha',
      tableName: 'Captchas',
      underscored: true
    }
  )
  return Captcha
}
