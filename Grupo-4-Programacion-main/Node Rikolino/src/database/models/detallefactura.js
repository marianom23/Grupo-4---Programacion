'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DetalleFactura extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      DetalleFactura.belongsTo(models.Factura, {
        foreignKey:'facturaId',
        as:'detallefacturas'
      });

      DetalleFactura.belongsTo(models.Producto, {
        foreignKey:'productoId',
        as:'detallefacturas'
      });
      
    }
  };
  DetalleFactura.init({
    cantidad: DataTypes.INTEGER,
    subtotal: DataTypes.DECIMAL,
    productoId: DataTypes.INTEGER,
    facturaId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'DetalleFactura',
  });
  return DetalleFactura;
};