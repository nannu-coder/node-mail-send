const sendMail = require("../Controllers/sendMail");

const router = require("express").Router();

router.get("/send", sendMail);

module.exports = router;
