import { MongoClient, ObjectId } from 'mongodb'

const client = new MongoClient('mongodb://127.0.0.1:27017')
const db = client.db('AH_P3')
const technology = db.collection('Technologies')


async function findTechnologies(idProject) {
    const technologies = await technology.findOne({idProject: ObjectId(idProject)})
    return technologies
}

async function addTechnologie(idProject, technologies) {

    return client.connect()
        .then(function () {
            return technology.updateOne(
                { idProject: new ObjectId(idProject) },
                { $addToSet: { technologies } }
            )
        })

}

export {
    findTechnologies,
    addTechnologie
}