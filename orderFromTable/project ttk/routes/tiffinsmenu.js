var express = require('express');
var router = express.Router();
const order_details=require("../models/orderschema")

router.get('/tiffinsmenu', function(req, res, next) {
  res.render('tiffinsmenu');
});

router.post("/tiffinsmenu", async (req, res) => {
	const user = await order_details.create({
		customer_details:{
			name:req.body.name,
			table:req.body.table,
			recomendations:req.body.recomendations,
		},
		tiffin_details:{
			idly:req.body.idly,
			dosa:req.body.dosa,
			chapathi:req.body.chapathi,
			puri:req.body.puri,
            upma:req.body.upma,
			poha:req.body.poha,
			uggani:req.body.uggani,
			pulihora:req.body.pulihora,
            parota:req.body.parota,
			vada:req.body.vada,
			pongal:req.body.pongal,
			uthappam:req.body.uthappam,
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