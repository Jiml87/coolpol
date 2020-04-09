const Sequelize = require('sequelize')

class Project extends Sequelize.Model {
  static init (sequelize) {
    super.init({
      name: Sequelize.STRING,
      url: Sequelize.STRING,
      photoLg: Sequelize.JSONB
    }, {
      sequelize
    }
    )
  }
}

module.exports = Project
