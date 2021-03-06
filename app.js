const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const orderRouter = require("./routes/order.routes");
const loginRouter = require("./routes/login.routes");
const stockRouter = require("./routes/stock.routes");
const routeRouter = require("./routes/route.routes");
const imageRouter = require("./routes/image.routes");
const distRouter = require("./routes/dist.route");
const custRouter = require("./routes/cust.route");
const repRouter = require("./routes/rep.route");
const customer = require("./routes/customer.routes");
const productRouter = require("./routes/products.routes");

const app = express();

require("dotenv").config();

mongoose
  .connect(`${process.env.DBURL}`, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  })
  .then(() => console.log("DB Connected!"))
  .catch(err => {
    console.log("DB Connection Error:", err.message);
  });
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Header",
    "Origin, X-Requested-With,Content-Type,Accept,Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT,POST,PATCH,DELETE,GET");
    return res.status(200).json({});
  }
  next();
});
 app.use("/login",loginRouter);
 app.use("/order", orderRouter);
app.use("/stock",stockRouter);
app.use("/route",routeRouter);
app.use("/image",imageRouter);
app.use("/dist",distRouter);
app.use("/cust",custRouter);  
 app.use("/rep",repRouter);
app.use("", customer);
app.use("", productRouter);

app.use((req, res, next) => {
  const error = new Error("404 Not found");
  error.status = 404;
  next(error);
});
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});
module.exports = app;



