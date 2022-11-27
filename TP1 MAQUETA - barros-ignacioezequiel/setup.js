import { MongoClient, ObjectId } from 'mongodb';
import fs from 'fs';

const client = new MongoClient('mongodb://127.0.0.1:27017');

async function importar(collectionName, database) {
    
    await client.connect();
    
    const db = client.db(database);
    const collection = db.collection(collectionName);
    const data = JSON.parse(fs.readFileSync(`./data/${collectionName}.json`));

    data.forEach(obj => {
        obj._id = new ObjectId(obj._id.$oid);
    });

    await collection.insertMany(data);

    client.close();
}

await importar('Projects', 'AH_P1');
