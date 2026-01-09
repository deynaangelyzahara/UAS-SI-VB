const express = require("express");
const router = express.Router();

const auth = require("../middlewares/auth.middleware");
const taskController = require("../controllers/task.controller");

router.use(auth); // 🔒 SEMUA ROUTE WAJIB LOGIN

router.post("/", taskController.createTask);
router.get("/", taskController.getTasks);
router.put("/:id", taskController.updateTask);
router.delete("/:id", taskController.deleteTask);

module.exports = router;
