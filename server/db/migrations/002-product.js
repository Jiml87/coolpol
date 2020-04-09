
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Products', 'categoryId', Sequelize.INTEGER, {
      after: 'photoLg'
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Products')
  }
}
