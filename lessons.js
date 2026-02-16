db.createCollection("lessons", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["courseId", "title"],
      properties: {
        courseId: { bsonType: "objectId" },
        title: { bsonType: "string" },
        videoUrl: { bsonType: "string" },
        duration: { bsonType: "int" },
        order: { bsonType: "int" }
      }
    }
  }
})
