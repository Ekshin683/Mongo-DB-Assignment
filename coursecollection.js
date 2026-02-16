db.runCommand({
  collMod: "courses",
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["title", "price", "instructorId"],
      properties: {
        title: { bsonType: "string" },
        description: { bsonType: "string" },
        price: { bsonType: ["int", "double"] },
        instructorId: { bsonType: "objectId" },
        categoryId: { bsonType: "objectId" },
        rating: { bsonType: "double" },
        totalStudents: { bsonType: "int" },
        level: { enum: ["Beginner", "Intermediate", "Advanced"] }
      }
    }
  }
})

//validation

db.runCommand({
  collMod: "courses",
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["title", "price", "instructorId"],
      properties: {
        title: { bsonType: "string" },
        description: { bsonType: "string" },
        price: {
          bsonType: ["int", "double", "decimal"],
          minimum: 0
        },
        instructorId: { bsonType: "objectId" },
        categoryId: { bsonType: "objectId" },
        rating: {
          bsonType: ["int", "double"],
          minimum: 0,
          maximum: 5
        },
        totalStudents: {
          bsonType: "int",
          minimum: 0
        },
        level: {
          enum: ["Beginner", "Intermediate", "Advanced"]
        }
      }
    }
  }
})
