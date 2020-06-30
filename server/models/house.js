const houseDefinition = (sequelize, DataTypes) => {
    const house = sequelize.define('House', {
      provinceId: { type: DataTypes.INTEGER },
      districtId: { type: DataTypes.INTEGER },
      name: { type: DataTypes.STRING },
      createdAt: { type: DataTypes.DATE },
      updatedAt: { type: DataTypes.DATE }
    }, {});
  
    // house.associate = (models) => {
    //   house.belongsTo(models.Province, {
    //     foreignKey: 'provinceId',
    //     as: 'province',
    //     onDelete: 'CASCADE',
    //   });
    //   house.belongsTo(models.District, {
    //     foreignKey: 'districtId',
    //     as: 'district',
    //     onDelete: 'CASCADE',
    //   });
    //   house.hasMany(models.User, {
    //     foreignKey: 'houseId',
    //     as: 'users',
    //     onDelete: 'CASCADE',
    //   });
    //   house.hasMany(models.Task, {
    //     foreignKey: 'houseId',
    //     as: 'tasks',
    //     onDelete: 'CASCADE',
    //   });
    // };
    return house;
  };
  
  export default houseDefinition;