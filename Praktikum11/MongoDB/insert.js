const MongoDB = require("mongodb").MongoClient,
    dbURL = "mongodb://127.0.0.1:27017",
    dbName = "db-untar-cafe";

MongnoDB.connect(dbURL, (error, client) => {
    if (error) throw error;
    let db = client.db(dbName);
    db.collection("untar-cafe")
    .insertOne({
            menu: "Early Grey",
            description: "Tea, Early Grey. Hot.",
            price: 18000,
            isavaiable: true
    }, (error, db) => {
        if (error) throw error;
        console.log(db);
    })
});