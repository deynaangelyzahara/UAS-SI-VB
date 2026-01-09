const router = require("express").Router();
const auth = require("../middleware/auth.middleware");
const user = require("../controllers/user.controller");

router.get("/profile", auth, user.profile);
module.exports = router;
