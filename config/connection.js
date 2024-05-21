const mongoose = require("mongoose");

// Corrected the typo in useNewUrlParser
mongoose.connect(process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/socialmedia", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

// Error handling
db.on("error", console.error.bind(console, "MongoDB connection error:"));

// Successful connection message
db.once("open", () => {
    console.log("Connected to MongoDB successfully!");
});

module.exports = db;