
const mongoose = require("mongoose");
require("dotenv").config();

async function fixIndex() {
    try {
        await mongoose.connect(process.env.MONGO_DB_URL);
        console.log("Connected to DB");

        const collection = mongoose.connection.collection("users");

        try {
            if (await collection.indexExists("googleId_1")) {
                await collection.dropIndex("googleId_1");
                console.log("Dropped googleId_1 index");
            } else {
                console.log("googleId_1 index not found");
            }
        } catch (err) {
            console.log("Error dropping index (might not exist):", err.message);
        }

        console.log("Done");
        process.exit();
    } catch (error) {
        console.error("Connection failed", error);
        process.exit(1);
    }
}

fixIndex();
