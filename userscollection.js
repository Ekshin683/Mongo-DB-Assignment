db.createCollection("users", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["name", "email", "password", "role"],
      properties: {
        name: { bsonType: "string" },
        email: { bsonType: "string" },
        password: { bsonType: "string" },
        role: { enum: ["student", "instructor"] },
        createdAt: { bsonType: "date" },
        isVerified: { bsonType: "bool" }
      }
    }
  }
})


db.users.createIndex({ email: 1 }, { unique: true })


//validation

db.runCommand({
  collMod: "users",
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["name", "email", "password", "role"],
      properties: {
        name: {
          bsonType: "string",
          description: "Name must be a string"
        },
        email: {
          bsonType: "string",
          pattern: "^.+@.+$",
          description: "Must be a valid email"
        },
        password: {
          bsonType: "string"
        },
        role: {
          enum: ["student", "instructor"]
        },
        createdAt: {
          bsonType: "date"
        },
        isVerified: {
          bsonType: "bool"
        }
      }
    }
  },
  validationLevel: "strict"
})

db.users.createIndex({ email: 1 }, { unique: true })
