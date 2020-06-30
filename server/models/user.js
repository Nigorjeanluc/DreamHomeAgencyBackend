const userDefinition = (sequelize, DataTypes) => {
    const user = sequelize.define('User', {
        fullname: {
            type: DataTypes.STRING
          },
          email: {
            type: DataTypes.STRING,
            unique: true
          },
          username: {
            type: DataTypes.STRING
          },
          gender: {
            type: DataTypes.STRING
          },
          profileImg: {
            type: DataTypes.STRING
          },
          coverImg: {
            type: DataTypes.STRING
          },
          phoneNumber: {
            type: DataTypes.STRING
          },
          password: {
            type: DataTypes.STRING
          },
          role: {
            type: DataTypes.STRING,
          },
          isVerified: {
            type: DataTypes.BOOLEAN
          },
          createdAt: {
            type: DataTypes.DATE
          },
          updatedAt: {
            type: DataTypes.DATE
          }
      }, {});
};

export default userDefinition;