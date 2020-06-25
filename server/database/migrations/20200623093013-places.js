const up = (queryInterface, Sequelize) => queryInterface.createTable('Places', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  title: {
    type: Sequelize.STRING
  },
  forRent: {
    type: Sequelize.BOOLEAN
  },
  forSale: {
    type: Sequelize.BOOLEAN
  },
  furnished: {
    type: Sequelize.BOOLEAN
  },
  address: {
    type: Sequelize.STRING
  },
  coordinates: {
    type: Sequelize.STRING
  },
  floors: {
    type: Sequelize.INTEGER
  },
  bedrooms: {
    type: Sequelize.INTEGER
  },
  type: {
    type: Sequelize.STRING
  },
  plot_size: {
    type: Sequelize.STRING
  },
  price: {
    type: Sequelize.STRING
  },
  createdAt: {
    allowNull: false,
    type: Sequelize.DATE
  },
  updatedAt: {
    allowNull: false,
    type: Sequelize.DATE
  }
});

const down = (queryInterface) => queryInterface.dropTable('Places');

export { up, down };