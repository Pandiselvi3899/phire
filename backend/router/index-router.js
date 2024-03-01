const express = require("express");
const router = express.Router()
const userRoute = require("./user-router")
router.use(userRoute) 



// router.get("/", function(req,res){
//     res.sendFile(__dirname + "/index.html" );
//  })
 
//  router.post("/create", async function(req, res){
//      let newUser = new User({
//          name : req.body.name,
//          email : req.body.email,
//          phone : req.body.phone,
//          age : req.body.age,
//          qualification : req.body.qualification
//      });
//      let data = await newUser.save();
//    res.status(201).json({ "status":"success","result":data})
//  })
module.exports = router;