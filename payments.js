db.runCommand({
  collMod: "payments",
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["studentId", "amount"],
      properties: {
        studentId: { bsonType: "objectId" },
        amount: { bsonType: ["int", "double"] }, 
        paymentStatus: { enum: ["Pending", "Completed", "Failed"] },
        transactionId: { bsonType: "string" },
        createdAt: { bsonType: "date" }
      }
    }
  }
})

//payment validation

db.runCommand({
  collMod: "payments",
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["studentId", "amount", "paymentStatus"],
      properties: {
        studentId: { bsonType: "objectId" },
        amount: {
          bsonType: ["int", "double", "decimal"],
          minimum: 0
        },
        paymentStatus: {
          enum: ["Pending", "Completed", "Failed"]
        },
        transactionId: {
          bsonType: "string"
        },
        createdAt: { bsonType: "date" }
      }
    }
  }
})


db.payments.createIndex(
  { transactionId: 1 },
  { unique: true }
)
