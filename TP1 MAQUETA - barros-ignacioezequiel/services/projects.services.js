import e from 'express';
import { MongoClient, ObjectId } from 'mongodb';

const client = new MongoClient('mongodb://127.0.0.1:27017');

async function traerProjects() {

    return client.connect()
        .then(function () {
            const db = client.db('AH_P1');
            const projects = db.collection('Projects');
            return projects.find().toArray();
        })
        .catch(function (err) {
            return [];
        })
}

async function saveProject(obj) {

    const NewProject = {
        ...obj
    };

    return client.connect()
        .then(function () {
            const db = client.db('AH_P1');
            const projects = db.collection('Projects');
            return projects.insertOne(NewProject);
        })
        .then(function (result) {
            return NewProject;
        })
}

async function projectsById(id) {

    return client.connect()
        .then(function(){
            const db = client.db('AH_P1');
            const projects = db.collection('Projects');
            return projects.findOne({ _id: new ObjectId(id) });
        })
        .catch(function() {
            return null;
        })
}

async function editProject(id, project) {

    return client.connect()
        .then(function() {
            const db = client.db('AH_P1');
            const projects = db.collection('Projects');
            return projects.updateOne({ _id: new ObjectId(id) },{
                $set: {
                    ...project
                }
            })
        })
}

async function deleteProject(id) {
    return client.connect()
        .then(function() {
            const db = client.db('AH_P1');
            const projects = db.collection('Projects');
            return projects.deleteOne({ _id: new ObjectId(id) });
        })
}

async function publicProject(id, bool) {
    client.connect()
        .then(async function() {
            const db = client.db('AH_P1');
            const projects = db.collection('Projects');
            await projects.updateOne({ _id: new ObjectId(id) },{
                $set: {
                    public: bool
                }
            })
        })
}

export {
    traerProjects,
    saveProject,
    projectsById,
    editProject,
    deleteProject,
    publicProject
}