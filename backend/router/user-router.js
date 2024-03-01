const router = require("express").Router();
const {createUser} = require("../service/user-service")
router.post("/create",createUser)
module.exports = router;