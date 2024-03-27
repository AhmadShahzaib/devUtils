const fs = require("fs");

let hour = 11;
let mins = 0;
let sec = 0;
let ms = 0;

const getDate = (timeDiffInMins) => {
  mins += timeDiffInMins;
  const date = new Date();
  date.setHours(hour, mins, sec, ms);
  console.log("date.getUTCMilliseconds() " + date.getTime());
  return date.getTime();
};

const statuses = {
  ON_DUTY_NOT_DRIVING: "ON_DUTY_NOT_DRIVING",
  DRIVING: "DRIVING",
  SLEEPER_BERTH: "SLEEPER_BERTH",
  OFF_DUTY: "OFF_DUTY",
  BREAK: "BREAK",
  LOGIN: "LOGIN",
  LOGOUT: "LOGOUT",
  PERSONAL_CONVEYANCE: "PERSONAL_CONVEYANCE",
  YARD_MOVE: "YARD_MOVE"

};

let logEntry = {
  actionType: "DRIVING",
  actionDate: "Mon Jul 11 2022 17:17:20",
  statusesData: {},
};

let logEntryDateTime = {
  startedAt: "Mon Jul 11 2022 14:00:00",
  lastStartedAt: "Mon Jul 11 2022 15:00:00",
};

const getMappedStatus = (status) => {
  let mapped = {};
  if (status === statuses.ON_DUTY_NOT_DRIVING) {
    mapped = "onDuty";
  } else if (status === statuses.DRIVING) {
    mapped = "onDriving";
  } else if (status === statuses.SLEEPER_BERTH) {
    mapped = "onSleeperBerth";
  } else if (status === statuses.OFF_DUTY) {
    mapped = "offDuty";
  }
  return mapped;
};

const generateEntry = (status, timeDiffInMins, howMany) => {
  let generatedEntries = [];
  let tempDate;
  for (var i = 1; i <= howMany; i++) {
    let copied = JSON.parse(JSON.stringify(logEntry));
    let copiedDateTime = JSON.parse(JSON.stringify(logEntryDateTime));

    tempDate = getDate(timeDiffInMins);
    copied.actionType = status;
    copied.actionDate = tempDate;
    copiedDateTime.startedAt = tempDate;

    delete copiedDateTime.lastStartedAt;

    copied.statusesData[getMappedStatus(status)] = copiedDateTime;
    // copied.actionType = getMappedStatus(status);

    generatedEntries.push(copied);
  }

  let last = JSON.parse(JSON.stringify({ ...generatedEntries[howMany - 1] }));
  delete last.statusesData[getMappedStatus(status)].startedAt;

  last.statusesData[getMappedStatus(status)].lastStartedAt = tempDate;

  let tempGenerated = [...generatedEntries.slice(0, howMany - 1), last];
  //   console.log(tempGenerated);
  return JSON.parse(JSON.stringify(tempGenerated));
};

// let onDuty = generateEntry(statuses.ON_DUTY_NOT_DRIVING, 10, 100000);
// let onDriving = generateEntry(statuses.DRIVING, 30, 5);
// let onSleeperBerth = generateEntry(statuses.SLEEPER_BERTH, 10, 100000);

let allData = [];

const writeFile = () => {
  console.log("Writing to file " + allData.length);
  fs.writeFile(
    "miscellaneous.json",
    JSON.stringify(allData, null, 2),
    () => { }
  );
};

const generate1millionEntries = () => {
  for (var i = 0; i <= 100; i++) {
    allData = allData.concat(
      generateEntry(statuses.ON_DUTY_NOT_DRIVING, 10, 1)
    );
    allData = allData.concat(generateEntry(statuses.DRIVING, 30, 1));
    allData = allData.concat(generateEntry(statuses.SLEEPER_BERTH, 10, 1));
  }

  writeFile();
};

generate1millionEntries();
