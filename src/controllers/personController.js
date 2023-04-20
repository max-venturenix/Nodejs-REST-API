const personModel = require('../model/personModel');

let personList = [];

exports.createPerson = async (req, res, next) => {
    try {
        let hkid = req.body["hkid"];
        let last_name = req.body["last_name"];
        let first_name = req.body["first_name"];
        await personModel.createPerson(hkid, last_name, first_name);
        res.status(200).json({
            "hkid": hkid,
            "last_name": last_name,
            "first_name": first_name
        });
    } catch (err) {
        res.status(400).json({message: "Person not created"});
    }
};

exports.getAllPeople = async (req, res, next) => {
    try {
        res.status(200).json(await personModel.getAllPeople());
    } catch (err) {
        res.status(400).json({message: "Person not found"});
    }
}

exports.updatePerson = async (req, res, next) => {
    let hkid = req.body["hkid"];
    let last_name = req.body["last_name"];
    let first_name = req.body["first_name"];

    let updatedPerson = await personModel.updatePerson(hkid, last_name, first_name);

    if (!updatedPerson) {
        res.status(400).json({message: "Person not found"});
    } else {
        res.status(200).json(updatedPerson);
    }
}

exports.deletePerson = async (req, res, next) => {
    let deletedPerson = await personModel.deletePerson(req.params.hkid);

    if (!deletedPerson) {
        res.status(400).json({message: "Person not found"});
    } else {
        res.status(200).json(deletedPerson);
    }
}