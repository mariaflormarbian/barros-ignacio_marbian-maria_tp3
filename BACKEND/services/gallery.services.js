import { MongoClient, ObjectId } from 'mongodb'

const client = new MongoClient('mongodb://127.0.0.1:27017')
const db = client.db('AH_P3')
const galleries = db.collection('Gallery')

async function addToGallery(idProject, gallery) {
        
    const newGallery = {
        _id: new ObjectId(),
        ...gallery
    }

    return client.connect()
        .then(function () {
            // Actualizar la galeria del proyecto
            return galleries.updateOne(
                { idProject: new ObjectId(idProject) },
                { $push: { images: newGallery } }
            )
        })
        .then(function (result) {
            if (result.modifiedCount === 0) {
                // Crear la galeria del proyecto
                galleries.insertOne({
                    idProject: new ObjectId(idProject),
                    images: [newGallery]
                })
                return newGallery;
            }
            return newGallery;
        })

}

async function findGalleryByProject(idProject) {

    return client.connect()
        .then(function () {
            return galleries.findOne({ idProject: new ObjectId(idProject) })
        })
}

async function deleteImageById(idProject, idImage) {

    return client.connect()
        .then(function () {
            return galleries.updateOne(
                { idProject: new ObjectId(idProject) },
                { $pull: { images: { _id: new ObjectId(idImage) } } }
            )
        })
}

export {
    addToGallery,
    findGalleryByProject,
    deleteImageById
}