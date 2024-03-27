const { ObjectId, BSONType } = require("mongodb");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { SchemaTypes } = mongoose;

// Database Connection
mongoose.connect("mongodb://127.0.0.1:27017/nestedArray", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const CarSchema = new Schema({ vendor: { type: String } });
const Car = mongoose.model("car", CarSchema);

const Driver = mongoose.model("Driver", {
  name: { type: String },
  canDrive: { type: [CarSchema], require: false, default: BSONType.null },
});

const car1 = new Car({ _id: ObjectId(), vendor: "car 1" });
const car2 = new Car({ _id: ObjectId(), vendor: "car 1" });
console.log(ObjectId())

Driver.findOneAndUpdate(
  { _id: ObjectId("633a00fa3b5373f1f4853fcc") },
  {
    $addToSet: {
      canDrive: { $each: [{ vendor: "new" }] },
    },
  },
  {
    projection: {
      canDrive: 0,
    },
    returnNewDocument: "after",
    new: true,
    upsert: true
  },
  async (err, res) => {
    debugger;

    let saved = await res.save();
   
    // saved.canDrive.push({ vendor: "new" });
    // let nested = await saved.save();
    
    debugger;
  }
);

// new_driver.save({ new: true }, function (err, result) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(result.toJSON());
//   }
// });
