let personList = [];

exports.createPerson = (req, res, next) => {
    personList.push(req.body);
    res.status(200).json(req.body);
};

exports.getAllPeople = (req, res, next) => {
    res.status(200).json(personList);
}

exports.updatePerson = (req, res, next) => {
    let updatedPerson = null;
    for (const person of personList) {
        if (person["hkid"] === req.body["hkid"]) {
            person["last_name"] = req.body["last_name"];
            person["first_name"] = req.body["first_name"];
            updatedPerson = person;
            break;
        }
    }
    if (!updatedPerson) {
        res.status(400).json({message: "Person not found"});
    }
    res.status(200).json(updatedPerson);
}

exports.deletePerson = (req, res, next) => {
    let deletedPerson = null;

    personList = personList.filter((value) => {
        if (value["hkid"] === req.params["hkid"]) {
            deletedPerson = value;
            return false;
        } else {
            return true;
        }
    })

    if (!deletedPerson) {
        res.status(400).json({message: "Person not found"});
    }
    res.status(200).json(deletedPerson);
}