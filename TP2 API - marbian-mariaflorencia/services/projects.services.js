import { MongoClient, ObjectId } from "mongodb";

const client = new MongoClient("mongodb://127.0.0.1:27017");
const db = client.db("AH_P3");
const projects = db.collection("Projects");
const technology = db.collection("Technologies");
const galleries = db.collection('Gallery');
const testimonials = db.collection('testimonials')

async function traerProjects(filter) {

  console.log(filter);

  return client.connect()
    .then(function () {
      return projects.find(filter).toArray();
    })
    .catch(function (err) {
      return [];
    });
}

async function traerProjectByID(id) {


  await client.connect()
  const project = await projects.findOne({ _id: new ObjectId(id) })

  return project
}

async function guardarProject(project) {

  const {...newProject} = project;

  await projects.insertOne(newProject);

  return newProject;
}

async function eliminarProject(id) {
  return client.connect()
    .then(function () {
      projects.deleteOne({_id: ObjectId(id)});
      technology.deleteOne({idProject: ObjectId(id)});
      galleries.deleteOne({idProject: ObjectId(id)});
      testimonials.deleteOne({idProject: ObjectId(id)});
    });
}

async function editarProject(id, project) {

  return client.connect().then(function () {
    return projects.updateOne({ _id: new ObjectId(id) }, { $set: project });
  });
}

export {
  traerProjects,
  traerProjectByID,
  guardarProject,
  eliminarProject,
  editarProject,
};