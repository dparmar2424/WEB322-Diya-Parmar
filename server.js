const express = require("express");
const bodyParser = require("body-parser");
const { Sequelize } = require("sequelize");
const { Order, User, Product } = require("./models");

const app = express();
const port = 3000;

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

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection to the database successful.");
  })
  .catch((err) => {
    console.error("Unable to connect to database:", err);
  });

sequelize.sync();

app.set("view engine", "ejs");

app.use(bodyParser.json());

const pageRoutes = require("./routes/page.routes");
const apiRoutes = require("./routes/api.routes");

const models = { Order, User, Product };

app.use("/", pageRoutes);
app.use("/api", apiRoutes(models));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
