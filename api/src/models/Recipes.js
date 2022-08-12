const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('recipes', {
    id:{
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    summary:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    healthScore:{
      type: DataTypes.INTEGER,
    },
    steps:{
      type: DataTypes.ARRAY(DataTypes.JSONB),
    },
    image: {
      type: DataTypes.STRING,
      defaultValue: 'https://www.sinrumbofijo.com/wp-content/uploads/2016/05/default-placeholder.png',
    },
    },
    {
      timestamps: false
    }
  )
};
