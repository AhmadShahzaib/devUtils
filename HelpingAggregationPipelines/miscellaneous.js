/**
 * Collection: ELD
 * Check if any ELD is assigned to multiple vehicle
 */
[
  {
    '$lookup': {
      'from': 'vehicles', 
      'localField': '_id', 
      'foreignField': 'eldId', 
      'as': 'result'
    }
  }, {
    '$match': {
      'result': {
        '$size': 2
      }
    }
  }
]

// ================================================
/**
 * Collection: Vehicles
 * Find out elds which are deleted but is assigned to vehicles
 */

[
  {
    '$lookup': {
      'from': 'elds', 
      'localField': 'eldId', 
      'foreignField': '_id', 
      'as': 'result'
    }
  }, {
    '$match': {
      'result': {
        '$elemMatch': {
          'isDeleted': {
            '$eq': true
          }
        }
      }
    }
  }, {
    '$project': {
      'vehicleId': {
        '_id': 1
      }
    }
  }
]

// ================================================

/**
 * Collection: permissions
 * Find duplicates in permissions
 */

[
  {
    '$sort': {
      'permissionId': 1, 
      'endpoint': 1
    }
  }, {
    '$group': {
      '_id': '$permissionId', 
      'duplicates': {
        '$addToSet': '$endpoint'
      }
    }
  }, {
    '$match': {
      'duplicates': {
        '$size': 2
      }
    }
  }
]
// ================================================

/**
 * Collection: permissions
 * Find out which permission is assigned to which rule
 */
[
  {
    '$lookup': {
      'from': 'roles', 
      'as': 'role', 
      'let': {
        'permissionId': '$_id', 
        'roleName': '$roleName'
      }, 
      'pipeline': [
        {
          '$project': {
            'permissionId': '$$permissionId', 
            'roleName': '$roleName', 
            'roleId': '$_id', 
            '_id': 0
          }
        }
      ]
    }
  }, {
    '$unwind': {
      'path': '$role', 
      'preserveNullAndEmptyArrays': false
    }
  }, {
    '$replaceRoot': {
      'newRoot': '$role'
    }
  }
]
// ======================================================

/**
 * Collection: driverlogs
 * Find the driverlogs documents which contain the highest number of logs
 */

[
  {
    '$project': {
      'count': {
        '$size': '$logs'
      }
    }
  }, {
    '$sort': {
      'count': -1
    }
  }
]


// ======================================================

/**
 * Collection: driverlogs
 * Get the logs count of a specific document by driverlogs (_id) id
 */

[
  {
    '$match': {
      'driver.id': new ObjectId('632be681123b5d5028d5f824')
    }
  }, {
    '$project': {
      'count': {
        '$size': '$logs'
      }
    }
  }, {
    '$sort': {
      'count': -1
    }
  }
]

// ======================================================

/**
 * Collection: driverlogs
 * Get the size of documents in driverlogs sorted in desc order
 */

[
  {
    '$project': {
      'count': {
        '$size': '$logs'
      }, 
      'size_MB': {
        '$divide': [
          {
            '$bsonSize': '$$ROOT'
          }, 1000000
        ]
      }
    }
  }, {
    '$sort': {
      'count': -1
    }
  }
]
// ======================================================