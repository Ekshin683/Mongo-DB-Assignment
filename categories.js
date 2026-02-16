db.createCollection("categories")

db.categories.insertMany([
    {name: "DSA Programming"},
    {name: "Web Development"},
    {name: "Data Science"},
    {name: "Mern Stack"},
    {name: "Cloud Computing"},
    {name: "Devops"}
])