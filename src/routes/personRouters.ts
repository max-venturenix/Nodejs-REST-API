import {Router} from 'express';

import PersonController from '../controllers/personController';

export const personRouters = Router();

personRouters.route('/person')
    .post(PersonController.createPerson)
    .get(PersonController.getAllPeople)
    .put(PersonController.updatePerson);

personRouters.route('/person/:hkid')
    .delete(PersonController.deletePerson);