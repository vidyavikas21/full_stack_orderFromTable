var express = require('express');
var router = express.Router();
const order_details=require("../models/orderschema")

router.get('/lunchmenu', function(req, res, next) {
  res.render('lunchmenu');
});

router.post("/lunchmenu", async (req, res) => {
	const user = await order_details.create({
		customer_details:{
			name:req.body.name,
			table:req.body.table,
			recomendations:req.body.recomendations,
		},
		lunch_details:{
			meals:req.body.meals,
			chicken_biryani:req.body.chicken_biryani,
			fish_curry:req.body.fish_curry,
			mutton_biryani:req.body.mutton_biryani,
            veg_biryani:req.body.veg_biryani,
			egg_biryani:req.body.egg_biryani,
			egg_curry:req.body.egg,
			curd_rice:req.body.curd_rice,
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