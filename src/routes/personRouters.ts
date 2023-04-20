import {Router} from 'express';

const {personController} = require('../controllers/personController');

export const personRouters = Router();

personRouters.route('/person')
    .post(personController.createPerson)
    .get(personController.getAllPeople)
    .put(personController.updatePerson);

personRouters.route('/person/:hkid')
    .delete(personController.deletePerson);