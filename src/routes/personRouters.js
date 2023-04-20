const express = require('express');
const router = express.Router();
const personController = require('../controllers/personController');

router.route('/person')
    .post(personController.createPerson)
    .get(personController.getAllPeople)
    .put(personController.updatePerson);

router.route('/person/:hkid')
    .delete(personController.deletePerson);

module.exports = router;