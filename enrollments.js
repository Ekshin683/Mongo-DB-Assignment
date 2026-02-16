db.createCollection("enrollments", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["studentId", "courseId"],
      properties: {
        studentId: { bsonType: "objectId" },
        courseId: { bsonType: "objectId" },
        enrolledAt: { bsonType: "date" },
        paymentId: { bsonType: "objectId" }
      }
    }
  }
})


// indexing
db.enrollments.createIndex(
  { courseId: 1, studentId: 1 },
  { unique: true }
)
