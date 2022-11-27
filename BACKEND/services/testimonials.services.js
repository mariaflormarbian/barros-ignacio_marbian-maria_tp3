import { MongoClient, ObjectId } from "mongodb";

const client = new MongoClient("mongodb://127.0.0.1:27017");
const db = client.db("AH_P3");
const testimonials = db.collection("testimonials");

async function findTestimonials(idProject) {
  return client.connect().then(function () {
    return testimonials.find({ idProject: new ObjectId(idProject) }).toArray();
  });
}

async function createTestimonial(idProject, testimony) {
  const newTestimony = {
    idProject: new ObjectId(idProject),
    ...testimony,
  };

  return client
    .connect()
    .then(function () {
      return testimonials.insertOne(newTestimony);
    })
    .then(function (result) {
      return newTestimony;
    });
}

async function deleteTestimonyById(idTestimony) {
  console.log(idTestimony);

  return client.connect().then(function () {
    return testimonials.deleteOne({ _id: new ObjectId(idTestimony) });
  });
}

export { findTestimonials, createTestimonial, deleteTestimonyById };
