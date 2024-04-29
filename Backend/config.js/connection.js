const Sequelize = require('sequelize');
require("dotenv").config();  // Add the parentheses here
const sequelize = new Sequelize(
  process.env.DATABASE,
  process.env.beauty_experts,
  "46834AJ",
  { dialect: "mysql", host: "localhost" }
);

sequelize.authenticate().then(() => {
  console.log("connected");
}).catch(err => {
  console.log(err);
});
