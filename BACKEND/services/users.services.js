import { MongoClient, ObjectId } from "mongodb";
import bcrypt from 'bcrypt';

const client = new MongoClient("mongodb://127.0.0.1:27017");
const db = client.db("AH_P3");
const users = db.collection("Users");

async function create(user) {

    const newUser = { ...user } 

    await client.connect();

    const userExist = await users.findOne({ email: newUser.email });

    if (userExist) {
        throw new Error('El usuario ya existe');
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(newUser.password, salt);
    newUser.password = hash;

    await users.insertOne(newUser);

    return newUser;
}

async function find() {
    return client.connect()
        .then(() => {
            return users.find().toArray();
        })
}

async function login(user) {

    console.log(user);

    await client.connect();

    const userFound = await users.findOne({ email: user.email });

    if (!userFound) {
        throw new Error('El usuario no existe');
    }
    
    const passwordMatch = await bcrypt.compare(user.password, userFound.password);
    
    if (!passwordMatch) {
        throw new Error('La contraseña no es correcta');
    }
    
    return userFound;
}

async function findById(id){
    return client.connect()
        .then(() => {
            return users.findOne({ _id: new ObjectId(id) });
        })
}

async function deleteById(id) {

    return client.connect()
        .then(() => {
            return users.deleteOne({ _id: new ObjectId(id) });
        });
}


export { 
    create,
    find,
    login,
    findById,
    deleteById
};
