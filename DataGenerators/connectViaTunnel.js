const MongoClient = require("mongodb").MongoClient;
const { ObjectId } = require("mongodb");
const tunnel = require("tunnel-ssh");

const config = {
  username: "azureuser",
  password: "12345",
  host: "192.168.1.54", // QA server
  port: 22,
  dstHost: "127.0.0.1", // local
  dstPort: 27017, // default
  localHost: "127.0.0.1", // local
  localPort: 2701, // new for traffice
};

/*
 * Requires the MongoDB Node.js Driver
 * https://mongodb.github.io/node-mongodb-native
 */

const agg = [
  {
    $match: {
      "driver.tenantId": new ObjectId("632ad57ff8069691f86bcbf2"),
    },
  },
  {
    $group: {
      _id: {
        driverId: "$driver.id",
        calendarStartDate: "$calendarStartDate",
      },
      driver: {
        $mergeObjects: "$driver",
      },
    },
  },
];

const doStuff = async () => {
  tunnel(config, async (error, server) => {
    //....
    debugger;
    const client = await MongoClient.connect(
      "mongodb://localhost:2701/?authMechanism=DEFAULT",
      { useNewUrlParser: true, useUnifiedTopology: true }
    );
    const coll = client.db("nestjsauth").collection("driverlogs");
    const cursor = coll.aggregate(agg);
    try {
      const result = await cursor.toArray();
    } catch (err) {
      console.log(err.message);
    }
    await client.close();
    
  });
};

doStuff();
