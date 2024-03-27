const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");
const { ObjectId } = require("mongodb");

/*
 * Requires the MongoDB Node.js Driver
 * https://mongodb.github.io/node-mongodb-native
 */

const agg = [
  {
    $match: {
      driverId: new ObjectId("62dea22f9cfcb73da41c563f"),
    },
  },
  {
    $unwind: {
      path: "$logs",
      preserveNullAndEmptyArrays: true,
    },
  },
  {
    $replaceRoot: {
      newRoot: "$logs",
    },
  },
  {
    $project: {
      _id: 0,
      status: {
        $arrayElemAt: [
          {
            $objectToArray: "$statusesData",
          },
          0,
        ],
      },
      last: {
        $arrayElemAt: [
          {
            $objectToArray: "$statusesData",
          },
          0,
        ],
      },
    },
  },
  {
    $match: {
      $and: [
        { "status.v.startedAt": { $exists: true } },
        { "status.v.lastStartedAt": { $exists: true } },
      ],
    },
  },
  {
    $project: {
      status: "$status.k",
      startedAt: "$status.v.startedAt",
      lastStartedAt: "$status.v.lastStartedAt",
      totalTimeSpentInSeconds: {
        $dateDiff: {
          startDate: "$status.v.startedAt",
          endDate: "$status.v.lastStartedAt",
          unit: "second",
        },
      },
    },
  },
];

const agg1 = [
  {
    $match: {
      driverId: new ObjectId("62dea22f9cfcb73da41c563f"),
    },
  },
  {
    $replaceRoot: {
      newRoot: { $last: "$logs" },
    },
  },
  {
    $project: {
      _id: 0,
      status: {
        $arrayElemAt: [
          {
            $objectToArray: "$statusesData",
          },
          0,
        ],
      },
      last: {
        $arrayElemAt: [
          {
            $objectToArray: "$statusesData",
          },
          0,
        ],
      },
    },
  },
  {
    $project: {
      status: "$status.k",
      startedAt: "$status.v.startedAt",
      lastStartedAt: "$status.v.lastStartedAt",
      totalTimeSpentInSeconds: {
        $dateDiff: {
          startDate: "$status.v.startedAt",
          endDate: "$status.v.lastStartedAt",
          unit: "second",
        },
      },
    },
  },
];

/**
{
  last:{$last:  '$logs'}
}
 */
MongoClient.connect(
  "mongodb://localhost:27017/",
  { useNewUrlParser: true, useUnifiedTopology: true },
  function (connectErr, client) {
    assert.equal(null, connectErr);
    const coll = client.db("nestjsauth").collection("driverlogs");
    coll.aggregate([agg, agg1], (cmdErr, result) => {
      assert.equal(null, cmdErr);
    });
    client.close();
  }
);
