const { Sequelize } = require("sequelize");
const OrderModel = require("../models/order");
const UserModel = require("../models/user");
const ProductModel = require("../models/product");

const sequelize = new Sequelize("SenecaDB", "dparmar2424", "tAQKydr4JwV2", {
  host: "ep-wispy-star-33962533-pooler.us-east-2.aws.neon.tech",
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: true,
    },
  },
  logging: false,
});

const Order = OrderModel(sequelize);
const User = UserModel(sequelize);
const Product = ProductModel(sequelize);

User.hasMany(Order);
Order.belongsTo(User);

Product.hasMany(Order);
Order.belongsTo(Product);

sequelize.sync();

module.exports = {
  Order,
  User,
  Product,
};
