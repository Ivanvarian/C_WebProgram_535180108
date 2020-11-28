const mongoose = require("mongoose");

mongoose.connect(
    "mongodb://127.0.0.1:27017//db-untar-cafe",
    { userNewUrlParser }
);
const db = mongoose.connection;

db.once("open", () => {
    console.log("Successfully connected to MongoDB using Mongoose!");
});

const member = require("./models/Member");
 var Member_to_insert = new Member({
     name: "Space The Final Frontier",
     email: "these-are@the-voyages.com",
     credit: 1701000
 });

 member_to_insert.save((err, product) => {
     if (err) console.log(err);
     console.log(JSON.stringify(product));
 });