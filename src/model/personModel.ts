import Person from "./Person";

const {PrismaClient} = require('@prisma/client')

const prisma = new PrismaClient();

export const PersonModel = {
    createPerson: async (personData: Person) => {
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
        } finally {
            await prisma.$disconnect()
        }
    },
    getAllPeople: async () => {
        try {
            return await prisma.person.findMany();
        } catch (err) {
            console.log(err);
        } finally {
            await prisma.$disconnect()
        }
    },
    updatePerson: async (personData: Person) => {
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
        } finally {
            await prisma.$disconnect()
        }
    },
    deletePerson: async (hkid: string) => {
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
}
