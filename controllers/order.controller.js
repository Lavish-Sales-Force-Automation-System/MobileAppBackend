const Order = require("../models/order.model.js");
const mongoose = require("mongoose");
exports.submit = (req, res) => {
  const order = new Order({
    _id: new mongoose.Types.ObjectId(),
    salesrepName: req.body.salesrepName,
    customerName: req.body.customerName,
    Invoiceno: req.body.Invoiceno,
    teapouch20: req.body.teapouch20,
    name: req.body.name,
    weight: req.body.weight,
    qut: req.body.qut,
    price: req.body.price,
    totalValue: req.body.totalValue,
    teapouch50: req.body.teapouch50,
    name: req.body.name,
    weight: req.body.weight,
    qut: req.body.qut,
    price: req.body.price,
    teapouch100: req.body.teapouch100,
    name: req.body.name,
    weight: req.body.weight,
    qut: req.body.qut,
    price: req.body.price,
    teapouch200: req.body.teapouch200,
    name: req.body.name,
    weight: req.body.weight,
    qut: req.body.qut,
    price: req.body.price,
    teapouch400: req.body.teapouch400,
    name: req.body.name,
    weight: req.body.weight,
    qut: req.body.qut,
    price: req.body.price,
    teapouch1kg1: req.body.teapouch1kg1,
    name: req.body.name,
    weight: req.body.weight,
    qut: req.body.qut,
    price: req.body.price,
    teapouch1kg2: req.body.teapouch1kg2,
    name: req.body.name,
    weight: req.body.weight,
    qut: req.body.qut,
    price: req.body.price,
    teapouch1kg3: req.body.teapouch1kg3,
    name: req.body.name,
    weight: req.body.weight,
    qut: req.body.qut,
    price: req.body.price,
    teapouch1kg4: req.body.teapouch1kg4,
    name: req.body.name,
    weight: req.body.weight,
    qut: req.body.qut,
    price: req.body.price,
    teabag1: req.body.teabag1,
    name: req.body.name,
    weight: req.body.weight,
    qut: req.body.qut,
    price: req.body.price,
    teabag2: req.body.teabag2,
    name: req.body.name,
    weight: req.body.weight,
    qut: req.body.qut,
    price: req.body.price,
    teabag3: req.body.teabag3,
    name: req.body.name,
    weight: req.body.weight,
    qut: req.body.qut,
    price: req.body.price,
    teasachet1: req.body.teasachet1,
    name: req.body.name,
    weight: req.body.weight,
    qut: req.body.qut,
    price: req.body.price,
    teasachet2: req.body.teasachet2,
    name: req.body.name,
    weight: req.body.weight,
    qut: req.body.qut,
    price: req.body.price,
    teasachet3: req.body.teasachet3,
    name: req.body.name,
    weight: req.body.weight,
    qut: req.body.qut,
    price: req.body.price,
    teabulk1: req.body.teabulk1,
    name: req.body.name,
    weight: req.body.weight,
    qut: req.body.qut,
    price: req.body.price,
    teabulk2: req.body.teabulk2,
    name: req.body.name,
    weight: req.body.weight,
    qut: req.body.qut,
    price: req.body.price,
    teabulk3: req.body.teabulk3,
    name: req.body.name,
    weight: req.body.weight,
    qut: req.body.qut,
    price: req.body.price,
    teabulk4: req.body.teabulk4,
    name: req.body.name,
    weight: req.body.weight,
    qut: req.body.qut,
    price: req.body.price,
    teabulk5: req.body.teabulk5,
    name: req.body.name,
    weight: req.body.weight,
    qut: req.body.qut,
    price: req.body.price,
    teabulk6: req.body.teabulk6,
    name: req.body.name,
    weight: req.body.weight,
    qut: req.body.qut,
    price: req.body.price,
    teabottle: req.body.teabottle,
    name: req.body.name,
    weight: req.body.weight,
    qut: req.body.qut,
    price: req.body.price,
    teabasket1: req.body.teabasket1,
    name: req.body.name,
    weight: req.body.weight,
    qut: req.body.qut,
    price: req.body.price,
    teabasket2: req.body.teabasket2,
    name: req.body.name,
    weight: req.body.weight,
    qut: req.body.qut,
    price: req.body.price
  });
  order
    .save()
    .then(result => {
      console.log(result);
    })
    .catch(err => console.log(err));
  res.status(200).json({
    message: "post your data"
  });
};
