const Router = require('express');
const router = new Router();
const personController = require('../controllers/person.controler')

router.post("/", personController.createPerson)
router.get("/", personController.getPersonsAll)
router.get("/:id", personController.getPerson)
router.put("/", personController.updatePerson)
router.delete("/:id", personController.deletePerson)

module.exports =router;