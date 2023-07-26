var express = require('express');
var router = express.Router();
const orderschema=require("../models/orderschema")

router.get('/kitchen', function(req, res, next) {
    res.render('kitchen');
  });

  router.post("/kitchen", async function(req, res) {
    try {
      const user = await orderschema.findOne({ "customer_details.table": req.body.table });
      if (user) {
        const userData = await orderschema.findOne(
          { "_id": user._id },
          { "customer_details.name": 1, "customer_details.table": 1, "customer_details.recomendations": 1, "tiffin_details": 1, "lunch_details": 1, "drinks_details": 1 }
        ).lean();
  
        const name1 = userData.customer_details.name;
        const table1 = userData.customer_details.table;
        const recomendations1 = userData.customer_details.recomendations;
        const tiffinDetails = userData.tiffin_details;
        const lunchDetails = userData.lunch_details;
        const drinksDetails = userData.drinks_details;
  
        // Filter tiffin details with quantity greater than 0
        const filteredTiffinDetails = {};
        for (const key in tiffinDetails) {
          if (tiffinDetails[key] > 0) {
            filteredTiffinDetails[key] = tiffinDetails[key];
          }
        }
  
        const filteredlunchDetails = {};
        for (const key in lunchDetails) {
          if (lunchDetails[key] > 0) {
            filteredlunchDetails[key] = lunchDetails[key];
          }
        }
  
        const filtereddrinksDetails = {};
        for (const key in drinksDetails) {
          if (drinksDetails[key] > 0) {
            filtereddrinksDetails[key] = drinksDetails[key];
          }
        }
  
        console.log(recomendations1);
  
        res.render("kitchen2", { name1, table1, recomendations1, tiffinDetails: filteredTiffinDetails, lunchDetails: filteredlunchDetails, drinksDetails: filtereddrinksDetails });
      } else {
        res.status(400).json({ error: "User doesn't exist" });
      }
    } catch (error) {
      res.status(400).json({ error });
    }
  });

  router.delete('/delete-details/:id', async (req, res) => {
    try {
      const userId = req.params.id;
  
      // Find the user with the provided ID
      const user = await orderschema.findOne({ '_id': userId });
      if (user) {
        // Update the document to remove all details
        await orderschema.updateOne(
          { '_id': userId },
          { $unset: { 'tiffin_details': 1, 'lunch_details': 1, 'drinks_details': 1 } }
        );
        res.sendStatus(200);
      } else {
        res.status(400).json({ error: 'User not found' });
      }
    } catch (error) {
      res.status(400).json({ error });
    }
  });
  
module.exports = router;