db.createCollection("reviews", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["courseId", "studentId", "rating"],
      properties: {
        courseId: { bsonType: "objectId" },
        studentId: { bsonType: "objectId" },
        rating: {
          bsonType: "int",
          minimum: 1,
          maximum: 5
        },
        comment: { bsonType: "string" },
        createdAt: { bsonType: "date" }
      }
    }
  }
})


//validation

db.runCommand({
  collMod: "reviews",
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["courseId", "studentId", "rating"],
      properties: {
        courseId: { bsonType: "objectId" },
        studentId: { bsonType: "objectId" },
        rating: {
          bsonType: "int",
          minimum: 1,
          maximum: 5,
          description: "Rating must be between 1 and 5"
        },
        comment: { bsonType: "string" },
        createdAt: { bsonType: "date" }
      }
    }
  }
})


//duplicate review prevention

db.reviews.createIndex(
  { courseId: 1, studentId: 1 },
  { unique: true }
)
