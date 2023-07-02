//jshint esversion:13

const { MongoClient } = require("mongodb")

// Replace the uri string with your connection string.
const uri = "mongodb+srv://ErikSuris:tyL19oUgzDKoo40M@cluster0.bh6t2xk.mongodb.net/?retryWrites=true&w=majority"

const client = new MongoClient(uri)

async function run() {
    try {
        const database = client.db("fruitsDB")
        const fruits = database.collection("fruits");
        // create an array of documents to insert
        const docs = [
            {
                name: "Apple",
                score: 8,
                review: 'Great fruit!'
            },
            {
                name: "Orange",
                score: 6,
                review: 'Kinda sour!'
            },
            {
                name: "Banana",
                score: 9,
                review: 'Great stuff!'
            }
        ]
        const result = await fruits.insertMany(docs)
        console.log(`${result.insertedCount} documents were inserted`)
    } finally {
        await client.close()
    }
  }
run().catch(console.dir)
