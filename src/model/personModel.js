const {PrismaClient} = require('@prisma/client')

const prisma = new PrismaClient();

exports.createPerson = async (hkid, last_name, first_name) => {
    try {
        await prisma.person.create({
            data: {
                "hkid": hkid,
                "last_name": last_name,
                "first_name": first_name
            }
        })
    } catch (err) {
        console.log(err);
    } finally {
        await prisma.$disconnect()
    }
}

exports.getAllPeople = async () => {
    try {
        return await prisma.person.findMany();
    } catch (err) {
        console.log(err);
    } finally {
        await prisma.$disconnect()
    }
}

exports.updatePerson = async (hkid, last_name, first_name) => {
    try {
        return await prisma.person.update({
            where: {
                hkid: hkid
            },
            data: {
                last_name: last_name,
                first_name: first_name
            }
        })
    } catch (err) {
        console.log(err);
    } finally {
        await prisma.$disconnect()
    }
}

exports.deletePerson = async (hkid) => {
    try {
        return await prisma.person.delete({
            where: {
                hkid: hkid
            }
        })
    } catch (err) {
        console.log(err);
    } finally {
        await prisma.$disconnect()
    }
}