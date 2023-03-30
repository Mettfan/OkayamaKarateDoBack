const express = require("express");
const getMembership = require("../Controllers/MembershipControllers/getMembership");
const postMembership = require("../Controllers/MembershipControllers/postMembership");
const putMembership = require("../Controllers/MembershipControllers/putMembership");
const router = express.Router();

router.put("/membership", putMembership);
router.post("/membership", postMembership);
router.get("/membership", getMembership);

module.exports = router;
