var express = require('express');
var router = express.Router();
const order_details=require("../models/orderschema")

router.get('/drinksmenu', function(req, res, next) {
  res.render('drinksmenu');
});

router.post("/drinksmenu", async (req, res) => {
	const user = await order_details.create({
		customer_details:{
			name:req.body.name,
			table:req.body.table,
			recomendations:req.body.recomendations,
		},
		drinks_details:{
			water:req.body.water,
			milk:req.body.milk,
			tea:req.body.tea,
			coffee:req.body.coffee,
      apple:req.body.apple,
			melon:req.body.melon,
			grape:req.body.grape,
			mango:req.body.mango,
		},
});

const filteredParams = {};
  Object.entries(req.body).forEach(([key, value]) => {
    if (value > 0) {
      filteredParams[key] = value;
    }
  });

  return res.render('bill', { name1: req.body.name,table1:req.body.table,recomendations1:req.body.recomendations,filteredParams });
});


module.exports = router;