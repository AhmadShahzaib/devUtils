//db.driverlogs.findOneAndUpdate({"driverId":ObjectId("62d91c605724162857f3f6b0")}, {$set:{"logs" : []}})
// const request = require("request");

let rawRecords = [
  {
    actionType: "ON_DUTY_NOT_DRIVING",
    actionDate: "2022-07-18T06:55:00.000Z",
    statusesData: {
      onDuty: {
        startedAt: "2022-07-18T06:55:00.000Z",
        lastStartedAt: "2022-07-18T07:02:00.000Z",
      },
    },
  },
  {
    actionType: "DRIVING",
    actionDate: "2022-07-18T07:00:00.000Z",
    odoMeterMillage: 12545,
    odoMeterSpeed: 50,
    engineHours: 50,
    engineRPMs: 2000,
    geoLocation: {
      longitude: -68.435996,
      latitude: 18.566516,
    },
    statusesData: {
      onDriving: {
        startedAt: "2022-07-18T07:00:00.000Z",
      },
    },
  },
  {
    actionType: "DRIVING",
    actionDate: "2022-07-18T07:05:00.000Z",
    odoMeterMillage: 12545,
    odoMeterSpeed: 50,
    engineHours: 50,
    engineRPMs: 2000,
    geoLocation: {
      longitude: -68.423036,
      latitude: 18.5644,
    },
    statusesData: {
      onDriving: {
        startedAt: "2022-07-18T07:05:00.000Z",
      },
    },
  },
  {
    actionType: "DRIVING",
    actionDate: "2022-07-18T07:10:00.000Z",
    odoMeterMillage: 12545,
    odoMeterSpeed: 50,
    engineHours: 50,
    engineRPMs: 2000,
    geoLocation: {
      longitude: -68.418744,
      latitude: 18.563586,
    },
    statusesData: {
      onDriving: {
        startedAt: "2022-07-18T07:10:00.000Z",
      },
    },
  },
  {
    actionType: "DRIVING",
    actionDate: "2022-07-18T07:15:00.000Z",
    odoMeterMillage: 12545,
    odoMeterSpeed: 50,
    engineHours: 50,
    engineRPMs: 2000,
    geoLocation: {
      longitude: -68.410725,
      latitude: 18.562339,
    },
    statusesData: {
      onDriving: {
        startedAt: "2022-07-18T07:15:00.000Z",
      },
    },
  },
  {
    actionType: "DRIVING",
    actionDate: "2022-07-18T07:20:00.000Z",
    odoMeterMillage: 12545,
    odoMeterSpeed: 50,
    engineHours: 50,
    engineRPMs: 2000,
    geoLocation: {
      longitude: -68.402459,
      latitude: 18.560927,
    },
    statusesData: {
      onDriving: {
        startedAt: "2022-07-18T07:20:00.000Z",
      },
    },
  },
  {
    actionType: "DRIVING",
    actionDate: "2022-07-18T07:25:00.000Z",
    odoMeterMillage: 12545,
    odoMeterSpeed: 50,
    engineHours: 50,
    engineRPMs: 2000,
    geoLocation: {
      longitude: -68.394354,
      latitude: 18.559605,
    },
    statusesData: {
      onDriving: {
        startedAt: "2022-07-18T07:25:00.000Z",
      },
    },
  },
  {
    actionType: "DRIVING",
    actionDate: "2022-07-18T07:30:00.000Z",
    odoMeterMillage: 12545,
    odoMeterSpeed: 50,
    engineHours: 50,
    engineRPMs: 2000,
    geoLocation: {
      longitude: -68.391003,
      latitude: 18.559028,
    },
    statusesData: {
      onDriving: {
        startedAt: "2022-07-18T07:30:00.000Z",
      },
    },
  },
  {
    actionType: "DRIVING",
    actionDate: "2022-07-18T07:35:00.000Z",
    odoMeterMillage: 12545,
    odoMeterSpeed: 50,
    engineHours: 50,
    engineRPMs: 2000,
    geoLocation: {
      longitude: -68.390594,
      latitude: 18.558841,
    },
    statusesData: {
      onDriving: {
        startedAt: "2022-07-18T07:35:00.000Z",
      },
    },
  },
  {
    actionType: "DRIVING",
    actionDate: "2022-07-18T07:40:00.000Z",
    odoMeterMillage: 12545,
    odoMeterSpeed: 50,
    engineHours: 50,
    engineRPMs: 2000,
    geoLocation: {
      longitude: -68.390387,
      latitude: 18.558795,
    },
    statusesData: {
      onDriving: {
        startedAt: "2022-07-18T07:40:00.000Z",
      },
    },
  },
  {
    actionType: "DRIVING",
    actionDate: "2022-07-18T07:45:00.000Z",
    odoMeterMillage: 12545,
    odoMeterSpeed: 50,
    engineHours: 50,
    engineRPMs: 2000,
    geoLocation: {
      longitude: -68.390312,
      latitude: 18.558767,
    },
    statusesData: {
      onDriving: {
        startedAt: "2022-07-18T07:45:00.000Z",
      },
    },
  },
  {
    actionType: "DRIVING",
    actionDate: "2022-07-18T07:50:00.000Z",
    odoMeterMillage: 12545,
    odoMeterSpeed: 50,
    engineHours: 50,
    engineRPMs: 2000,
    geoLocation: {
      longitude: -68.390256,
      latitude: 18.558744,
    },
    statusesData: {
      onDriving: {
        startedAt: "2022-07-18T07:50:00.000Z",
      },
    },
  },
  {
    actionType: "DRIVING",
    actionDate: "2022-07-18T07:55:00.000Z",
    odoMeterMillage: 12545,
    odoMeterSpeed: 50,
    engineHours: 50,
    engineRPMs: 2000,
    geoLocation: {
      longitude: -68.390202,
      latitude: 18.558726,
    },
    statusesData: {
      onDriving: {
        startedAt: "2022-07-18T07:55:00.000Z",
      },
    },
  },
  {
    actionType: "DRIVING",
    actionDate: "2022-07-18T08:00:00.000Z",
    odoMeterMillage: 12545,
    odoMeterSpeed: 50,
    engineHours: 50,
    engineRPMs: 2000,
    geoLocation: {
      longitude: -68.390124,
      latitude: 18.55867,
    },
    statusesData: {
      onDriving: {
        startedAt: "2022-07-18T08:00:00.000Z",
      },
    },
  },
  {
    actionType: "DRIVING",
    actionDate: "2022-07-18T08:05:00.000Z",
    odoMeterMillage: 12545,
    odoMeterSpeed: 50,
    engineHours: 50,
    engineRPMs: 2000,
    geoLocation: {
      longitude: -68.390111,
      latitude: 18.558663,
    },
    statusesData: {
      onDriving: {
        startedAt: "2022-07-18T08:05:00.000Z",
      },
    },
  },
  {
    actionType: "DRIVING",
    actionDate: "2022-07-18T08:10:00.000Z",
    odoMeterMillage: 12545,
    odoMeterSpeed: 50,
    engineHours: 50,
    engineRPMs: 2000,
    geoLocation: {
      longitude: -68.389995,
      latitude: 18.558602,
    },
    statusesData: {
      onDriving: {
        startedAt: "2022-07-18T08:10:00.000Z",
      },
    },
  },
  {
    actionType: "DRIVING",
    actionDate: "2022-07-18T08:15:00.000Z",
    odoMeterMillage: 12545,
    odoMeterSpeed: 50,
    engineHours: 50,
    engineRPMs: 2000,
    geoLocation: {
      longitude: -68.389867,
      latitude: 18.5585,
    },
    statusesData: {
      onDriving: {
        startedAt: "2022-07-18T08:15:00.000Z",
      },
    },
  },
  {
    actionType: "DRIVING",
    actionDate: "2022-07-18T08:20:00.000Z",
    odoMeterMillage: 12545,
    odoMeterSpeed: 50,
    engineHours: 50,
    engineRPMs: 2000,
    geoLocation: {
      longitude: -68.389837,
      latitude: 18.558462,
    },
    statusesData: {
      onDriving: {
        startedAt: "2022-07-18T08:20:00.000Z",
      },
    },
  },
  {
    actionType: "DRIVING",
    actionDate: "2022-07-18T08:25:00.000Z",
    odoMeterMillage: 12545,
    odoMeterSpeed: 50,
    engineHours: 50,
    engineRPMs: 2000,
    geoLocation: {
      longitude: -68.389781,
      latitude: 18.558396,
    },
    statusesData: {
      onDriving: {
        startedAt: "2022-07-18T08:25:00.000Z",
      },
    },
  },
  {
    actionType: "DRIVING",
    actionDate: "2022-07-18T08:30:00.000Z",
    odoMeterMillage: 12545,
    odoMeterSpeed: 50,
    engineHours: 50,
    engineRPMs: 2000,
    geoLocation: {
      longitude: -68.389641,
      latitude: 18.55828,
    },
    statusesData: {
      onDriving: {
        startedAt: "2022-07-18T08:30:00.000Z",
      },
    },
  },
  {
    actionType: "DRIVING",
    actionDate: "2022-07-18T08:35:00.000Z",
    odoMeterMillage: 12545,
    odoMeterSpeed: 50,
    engineHours: 50,
    engineRPMs: 2000,
    geoLocation: {
      longitude: -68.389557,
      latitude: 18.558234,
    },
    statusesData: {
      onDriving: {
        startedAt: "2022-07-18T08:35:00.000Z",
      },
    },
  },
  {
    actionType: "DRIVING",
    actionDate: "2022-07-18T08:40:00.000Z",
    odoMeterMillage: 12545,
    odoMeterSpeed: 50,
    engineHours: 50,
    engineRPMs: 2000,
    geoLocation: {
      longitude: -68.389469,
      latitude: 18.558143,
    },
    statusesData: {
      onDriving: {
        startedAt: "2022-07-18T08:40:00.000Z",
      },
    },
  },
  {
    actionType: "DRIVING",
    actionDate: "2022-07-18T08:45:00.000Z",
    odoMeterMillage: 12545,
    odoMeterSpeed: 50,
    engineHours: 50,
    engineRPMs: 2000,
    geoLocation: {
      longitude: -68.389362,
      latitude: 18.558089,
    },
    statusesData: {
      onDriving: {
        startedAt: "2022-07-18T08:45:00.000Z",
      },
    },
  },
  {
    actionType: "DRIVING",
    actionDate: "2022-07-18T08:50:00.000Z",
    odoMeterMillage: 12545,
    odoMeterSpeed: 50,
    engineHours: 50,
    engineRPMs: 2000,
    geoLocation: {
      longitude: -68.389265,
      latitude: 18.558062,
    },
    statusesData: {
      onDriving: {
        startedAt: "2022-07-18T08:50:00.000Z",
      },
    },
  },
  {
    actionType: "DRIVING",
    actionDate: "2022-07-18T08:55:00.000Z",
    odoMeterMillage: 12545,
    odoMeterSpeed: 50,
    engineHours: 50,
    engineRPMs: 2000,
    geoLocation: {
      longitude: -68.389069,
      latitude: 18.558011,
    },
    statusesData: {
      onDriving: {
        startedAt: "2022-07-18T08:55:00.000Z",
      },
    },
  },
  {
    actionType: "DRIVING",
    actionDate: "2022-07-18T09:00:00.000Z",
    odoMeterMillage: 12545,
    odoMeterSpeed: 50,
    engineHours: 50,
    engineRPMs: 2000,
    geoLocation: {
      longitude: -68.388965,
      latitude: 18.557985,
    },
    statusesData: {
      onDriving: {
        startedAt: "2022-07-18T09:00:00.000Z",
      },
    },
  },
  {
    actionType: "DRIVING",
    actionDate: "2022-07-18T09:05:00.000Z",
    odoMeterMillage: 12545,
    odoMeterSpeed: 50,
    engineHours: 50,
    engineRPMs: 2000,
    geoLocation: {
      longitude: -68.38879,
      latitude: 18.557988,
    },
    statusesData: {
      onDriving: {
        startedAt: "2022-07-18T09:05:00.000Z",
      },
    },
  },
  {
    actionType: "DRIVING",
    actionDate: "2022-07-18T09:10:00.000Z",
    odoMeterMillage: 12545,
    odoMeterSpeed: 50,
    engineHours: 50,
    engineRPMs: 2000,
    geoLocation: {
      longitude: -68.388603,
      latitude: 18.558032,
    },
    statusesData: {
      onDriving: {
        startedAt: "2022-07-18T09:10:00.000Z",
      },
    },
  },
  {
    actionType: "DRIVING",
    actionDate: "2022-07-18T09:15:00.000Z",
    odoMeterMillage: 12545,
    odoMeterSpeed: 50,
    engineHours: 50,
    engineRPMs: 2000,
    geoLocation: {
      longitude: -68.388525,
      latitude: 18.55806,
    },
    statusesData: {
      onDriving: {
        startedAt: "2022-07-18T09:15:00.000Z",
      },
    },
  },
  {
    actionType: "DRIVING",
    actionDate: "2022-07-18T09:20:00.000Z",
    odoMeterMillage: 12545,
    odoMeterSpeed: 50,
    engineHours: 50,
    engineRPMs: 2000,
    geoLocation: {
      longitude: -68.388425,
      latitude: 18.558113,
    },
    statusesData: {
      onDriving: {
        startedAt: "2022-07-18T09:20:00.000Z",
      },
    },
  },
  {
    actionType: "DRIVING",
    actionDate: "2022-07-18T09:25:00.000Z",
    odoMeterMillage: 12545,
    odoMeterSpeed: 50,
    engineHours: 50,
    engineRPMs: 2000,
    geoLocation: {
      longitude: -68.388297,
      latitude: 18.558192,
    },
    statusesData: {
      onDriving: {
        startedAt: "2022-07-18T09:25:00.000Z",
      },
    },
  },
  {
    actionType: "DRIVING",
    actionDate: "2022-07-18T09:30:00.000Z",
    odoMeterMillage: 12545,
    odoMeterSpeed: 50,
    engineHours: 50,
    engineRPMs: 2000,
    geoLocation: {
      longitude: -68.388181,
      latitude: 18.558301,
    },
    statusesData: {
      onDriving: {
        startedAt: "2022-07-18T09:30:00.000Z",
      },
    },
  },
  {
    actionType: "DRIVING",
    actionDate: "2022-07-18T09:35:00.000Z",
    odoMeterMillage: 12545,
    odoMeterSpeed: 50,
    engineHours: 50,
    engineRPMs: 2000,
    geoLocation: {
      longitude: -68.388045,
      latitude: 18.558497,
    },
    statusesData: {
      onDriving: {
        startedAt: "2022-07-18T09:35:00.000Z",
      },
    },
  },
  {
    actionType: "DRIVING",
    actionDate: "2022-07-18T09:40:00.000Z",
    odoMeterMillage: 12545,
    odoMeterSpeed: 50,
    engineHours: 50,
    engineRPMs: 2000,
    geoLocation: {
      longitude: -68.388002,
      latitude: 18.558571,
    },
    statusesData: {
      onDriving: {
        startedAt: "2022-07-18T09:40:00.000Z",
      },
    },
  },
  {
    actionType: "DRIVING",
    actionDate: "2022-07-18T09:45:00.000Z",
    odoMeterMillage: 12545,
    odoMeterSpeed: 50,
    engineHours: 50,
    engineRPMs: 2000,
    geoLocation: {
      longitude: -68.387927,
      latitude: 18.558701,
    },
    statusesData: {
      onDriving: {
        startedAt: "2022-07-18T09:45:00.000Z",
      },
    },
  },
  {
    actionType: "DRIVING",
    actionDate: "2022-07-18T09:50:00.000Z",
    odoMeterMillage: 12545,
    odoMeterSpeed: 50,
    engineHours: 50,
    engineRPMs: 2000,
    geoLocation: {
      longitude: -68.387895,
      latitude: 18.558863,
    },
    statusesData: {
      onDriving: {
        startedAt: "2022-07-18T09:50:00.000Z",
      },
    },
  },
  {
    actionType: "DRIVING",
    actionDate: "2022-07-18T09:55:00.000Z",
    odoMeterMillage: 12545,
    odoMeterSpeed: 50,
    engineHours: 50,
    engineRPMs: 2000,
    geoLocation: {
      longitude: -68.387887,
      latitude: 18.559046,
    },
    statusesData: {
      onDriving: {
        startedAt: "2022-07-18T09:55:00.000Z",
      },
    },
  },
  {
    actionType: "DRIVING",
    actionDate: "2022-07-18T10:00:00.000Z",
    odoMeterMillage: 12545,
    odoMeterSpeed: 50,
    engineHours: 50,
    engineRPMs: 2000,
    geoLocation: {
      longitude: -68.387922,
      latitude: 18.559308,
    },
    statusesData: {
      onDriving: {
        startedAt: "2022-07-18T10:00:00.000Z",
      },
    },
  },
  {
    actionType: "DRIVING",
    actionDate: "2022-07-18T10:05:00.000Z",
    odoMeterMillage: 12545,
    odoMeterSpeed: 50,
    engineHours: 50,
    engineRPMs: 2000,
    geoLocation: {
      longitude: -68.388185,
      latitude: 18.559677,
    },
    statusesData: {
      onDriving: {
        startedAt: "2022-07-18T10:05:00.000Z",
      },
    },
  },
  {
    actionType: "DRIVING",
    actionDate: "2022-07-18T10:10:00.000Z",
    odoMeterMillage: 12545,
    odoMeterSpeed: 50,
    engineHours: 50,
    engineRPMs: 2000,
    geoLocation: {
      longitude: -68.388314,
      latitude: 18.559824,
    },
    statusesData: {
      onDriving: {
        startedAt: "2022-07-18T10:10:00.000Z",
      },
    },
  },
  {
    actionType: "DRIVING",
    actionDate: "2022-07-18T10:15:00.000Z",
    odoMeterMillage: 12545,
    odoMeterSpeed: 50,
    engineHours: 50,
    engineRPMs: 2000,
    geoLocation: {
      longitude: -68.388397,
      latitude: 18.559929,
    },
    statusesData: {
      onDriving: {
        startedAt: "2022-07-18T10:15:00.000Z",
      },
    },
  },
  {
    actionType: "DRIVING",
    actionDate: "2022-07-18T10:20:00.000Z",
    odoMeterMillage: 12545,
    odoMeterSpeed: 50,
    engineHours: 50,
    engineRPMs: 2000,
    geoLocation: {
      longitude: -68.388512,
      latitude: 18.560018,
    },
    statusesData: {
      onDriving: {
        startedAt: "2022-07-18T10:20:00.000Z",
      },
    },
  },
  {
    actionType: "DRIVING",
    actionDate: "2022-07-18T10:25:00.000Z",
    odoMeterMillage: 12545,
    odoMeterSpeed: 50,
    engineHours: 50,
    engineRPMs: 2000,
    geoLocation: {
      longitude: -68.388607,
      latitude: 18.560203,
    },
    statusesData: {
      onDriving: {
        startedAt: "2022-07-18T10:25:00.000Z",
      },
    },
  },
  {
    actionType: "DRIVING",
    actionDate: "2022-07-18T10:30:00.000Z",
    odoMeterMillage: 12545,
    odoMeterSpeed: 50,
    engineHours: 50,
    engineRPMs: 2000,
    geoLocation: {
      longitude: -68.388615,
      latitude: 18.560472,
    },
    statusesData: {
      onDriving: {
        startedAt: "2022-07-18T10:30:00.000Z",
      },
    },
  },
  {
    actionType: "DRIVING",
    actionDate: "2022-07-18T10:35:00.000Z",
    odoMeterMillage: 12545,
    odoMeterSpeed: 50,
    engineHours: 50,
    engineRPMs: 2000,
    geoLocation: {
      longitude: -68.388613,
      latitude: 18.560655,
    },
    statusesData: {
      onDriving: {
        startedAt: "2022-07-18T10:35:00.000Z",
      },
    },
  },
  {
    actionType: "DRIVING",
    actionDate: "2022-07-18T10:40:00.000Z",
    odoMeterMillage: 12545,
    odoMeterSpeed: 50,
    engineHours: 50,
    engineRPMs: 2000,
    geoLocation: {
      longitude: -68.388572,
      latitude: 18.560957,
    },
    statusesData: {
      onDriving: {
        startedAt: "2022-07-18T10:40:00.000Z",
      },
    },
  },
  {
    actionType: "DRIVING",
    actionDate: "2022-07-18T10:45:00.000Z",
    odoMeterMillage: 12545,
    odoMeterSpeed: 50,
    engineHours: 50,
    engineRPMs: 2000,
    geoLocation: {
      longitude: -68.388521,
      latitude: 18.561206,
    },
    statusesData: {
      onDriving: {
        lastStartedAt: "2022-07-18T10:50:00.000Z",
      },
    },
  },
  {
    actionType: "SLEEPER_BERTH",
    actionDate: "2022-07-18T10:50:00.000Z",
    statusesData: {
      onSleeperBerth: {
        startedAt: "2022-07-18T10:50:00.000Z",
        lastStartedAt: "2022-07-18T11:50:00.000Z",
      },
    },
  },
  {
    actionType: "ON_DUTY_NOT_DRIVING",
    actionDate: "2022-07-18T11:50:00.000Z",
    statusesData: {
      onDuty: {
        startedAt: "2022-07-18T11:50:00.000Z",
        lastStartedAt: "2022-07-18T12:50:00.000Z",
      },
    },
  },
];

let requestCounter = -1;

setTimeout(() => {
  fetch("http://52.188.50.44:1349/api/HOS/log", {
    method: "POST",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ7XCJpZFwiOlwiNjJkOTFjNjA1NzI0MTYyODU3ZjNmNmIwXCIsXCJkcml2ZXJJZFwiOlwiNzY5NTMyXCIsXCJ1c2VyTmFtZVwiOlwiQWRhbSBDb2xlXCIsXCJlbWFpbFwiOlwiYWRhbUNvbGU0M0BnbWFpbC5jb21cIixcImZpcnN0TmFtZVwiOlwiQWRhbVwiLFwibGFzdE5hbWVcIjpcIkNvbGVcIixcImhvbWVUZXJtaW5hbEFkZHJlc3NcIjpcIjYyZDhkODQyMWJjNGY1NTBiYzgwZDVlZFwiLFwic3RhdGVcIjpcIkFsYWJhbWFcIixcImhvbWVUZXJtaW5hbFRpbWVab25lXCI6e1widHpDb2RlXCI6XCJQYWNpZmljL05pdWVcIixcInV0Y1wiOlwiLTExOjAwXCIsXCJsYWJlbFwiOlwiUGFjaWZpYy9OaXVlIChHTVQtMTE6MDApXCIsXCJuYW1lXCI6XCIoR01ULTExOjAwKSBBbG9maVwifSxcInZlaGljbGVJZFwiOlwiNjJkOTFhMWU5MGQ5NmU0MWVhMTgyYWQ4XCIsXCJjb0RyaXZlclwiOm51bGwsXCJlbmFibGVFbGRcIjp0cnVlLFwiZW5hYmxlRWxvZ1wiOnRydWUsXCJ5YXJkTW92ZVwiOnRydWUsXCJhc3NpZ25Ub1wiOm51bGwsXCJ0ZW5hbnRJZFwiOlwiNjJkODI4YzY1M2UwYjVlODY5OGI4ZjFhXCIsXCJpc0RyaXZlclwiOnRydWV9IiwiaWF0IjoxNjU4NTAxNzczLCJqdGkiOiI5NjBjYzA3NC05NDI1LTRjMjQtOGMxOC0xYTkzMTI2YTMzM2IifQ.dRFXfpDws3sW5sLZVk3vJqagqhjj6QVBezhwpyggBEg",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(rawRecords[++requestCounter]),
  }).then((res) => {
    console.log("Request complete! response:", res);
  });
}, 8000);
