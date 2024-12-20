import Person from "../model/Person";
import {Request, Response} from "express";
import PersonModel from "../model/personModel";

namespace PersonController {
   export const createPerson = async (req: Request, res: Response) => {
        try {
            const personData: Person = req.body;
            await PersonModel.createPerson(personData);
            res.status(200).json(personData);
        } catch (err) {
            res.status(400).json({message: "Person not created"});
        }
    }

    export const getAllPeople = async (req: Request, res: Response) => {
        try {
            res.status(200).json(await PersonModel.getAllPeople());
        } catch (err) {
            res.status(400).json({message: "Person not found"});
        }
    }

    export const updatePerson = async (req: Request, res: Response) => {
        const personData: Person = req.body;

        let updatedPerson = await PersonModel.updatePerson(personData);

        if (!updatedPerson) {
            res.status(400).json({message: "Person not found"});
        } else {
            res.status(200).json(updatedPerson);
        }
    }

    export const deletePerson = async (req: Request, res: Response) => {
        let deletedPerson = await PersonModel.deletePerson(req.params.hkid);

        if (!deletedPerson) {
            res.status(400).json({message: "Person not found"});
        } else {
            res.status(200).json(deletedPerson);
        }
    }
}

export default PersonController;