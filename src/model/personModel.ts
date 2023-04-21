import Person from "./Person";

const {PrismaClient} = require('@prisma/client')

const prisma = new PrismaClient();

namespace PersonModel {
    export const createPerson = async (personData: Person) => {
        try {
            await prisma.person.create({
                data: {
                    "hkid": personData.hkid,
                    "last_name": personData.last_name,
                    "first_name": personData.first_name
                }
            })
        } catch (err) {
            console.log(err);
            throw err;
        } finally {
            await prisma.$disconnect()
        }
    }

    export const getAllPeople = async () => {
        try {
            return await prisma.person.findMany();
        } catch (err) {
            console.log(err);
            throw err;
        } finally {
            await prisma.$disconnect()
        }
    }

    export const updatePerson = async (personData: Person) => {
        try {
            return await prisma.person.update({
                where: {
                    hkid: personData.hkid
                },
                data: {
                    last_name: personData.last_name,
                    first_name: personData.first_name
                }
            })
        } catch (err) {
            console.log(err);
            throw err;
        } finally {
            await prisma.$disconnect()
        }
    }

    export const deletePerson = async (hkid: string) => {
        try {
            return await prisma.person.delete({
                where: {
                    hkid: hkid
                }
            })
        } catch (err) {
            console.log(err);
            throw err;
        } finally {
            await prisma.$disconnect()
        }
    }
}

export default PersonModel;