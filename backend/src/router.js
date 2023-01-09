const express = require("express");

const { ItemController } = require("./controllers");

const router = express.Router();

router.post("/sendEmail", ItemController.sendMail);

router.get("/items", ItemController.browse);
router.get("/items/:id", ItemController.read);
router.put("/items/:id", ItemController.edit);
router.post("/items", ItemController.add);
router.delete("/items/:id", ItemController.delete);

module.exports = router;
