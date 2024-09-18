const express = require("express");
const userRouter = require("./user");
const router = express.Router();
const userAccountRouter = require("./account");

router.use('/user', userRouter);
router.use('/account', userAccountRouter);

module.exports = router;