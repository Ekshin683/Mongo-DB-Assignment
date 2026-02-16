//inserting data into coursers collection 

db.courses.insertMany([
  {
    title: "Complete MERN Stack Bootcamp",
    description: "Learn MongoDB, Express, React, and Node.js from scratch with real-world projects.",
    price: 4999,
    instructorId: ObjectId("65f111111111111111111111"),
    categoryId: ObjectId("65f222222222222222222222"),
    rating: 4.8,
    totalStudents: 1200,
    level: "Beginner"
  },
  {
    title: "Advanced MongoDB Mastery",
    description: "Deep dive into aggregation pipelines, indexing, performance optimization, and scaling.",
    price: 3499,
    instructorId: ObjectId("65f111111111111111111111"),
    categoryId: ObjectId("65f222222222222222222222"),
    rating: 4.7,
    totalStudents: 850,
    level: "Advanced"
  },
  {
    title: "Data Structures & Algorithms in Java",
    description: "Master DSA concepts with coding interviews and problem-solving techniques.",
    price: 3999,
    instructorId: ObjectId("65f333333333333333333333"),
    categoryId: ObjectId("65f444444444444444444444"),
    rating: 4.6,
    totalStudents: 2000,
    level: "Intermediate"
  },
  {
    title: "Cloud Computing with AWS",
    description: "Learn EC2, S3, IAM, VPC, and deploy scalable applications in the cloud.",
    price: 5999,
    instructorId: ObjectId("65f555555555555555555555"),
    categoryId: ObjectId("65f666666666666666666666"),
    rating: 4.5,
    totalStudents: 950,
    level: "Beginner"
  },
  {
    title: "Machine Learning A-Z",
    description: "Hands-on machine learning using Python, scikit-learn, and real datasets.",
    price: 5499,
    instructorId: ObjectId("65f333333333333333333333"),
    categoryId: ObjectId("65f444444444444444444444"),
    rating: 4.9,
    totalStudents: 1750,
    level: "Intermediate"
  },
  {
    title: "Frontend Development with React",
    description: "Build dynamic and responsive web apps using React and modern JavaScript.",
    price: 2999,
    instructorId: ObjectId("65f111111111111111111111"),
    categoryId: ObjectId("65f222222222222222222222"),
    rating: 4.4,
    totalStudents: 1400,
    level: "Beginner"
  }
])


//inserting data into lessons collection for mern stack course

db.lessons.insertMany([
  {
    courseId: ObjectId("65faaaaaaa11111111111111"),
    title: "Introduction to MERN Stack",
    videoUrl: "https://videos.elearn.com/mern/intro.mp4",
    duration: 15,
    order: 1
  },
  {
    courseId: ObjectId("65faaaaaaa11111111111111"),
    title: "Setting up Node.js and Express",
    videoUrl: "https://videos.elearn.com/mern/node-express.mp4",
    duration: 25,
    order: 2
  },
  {
    courseId: ObjectId("65faaaaaaa11111111111111"),
    title: "MongoDB Integration",
    videoUrl: "https://videos.elearn.com/mern/mongodb.mp4",
    duration: 30,
    order: 3
  },
  {
    courseId: ObjectId("65faaaaaaa11111111111111"),
    title: "React Frontend Setup",
    videoUrl: "https://videos.elearn.com/mern/react-setup.mp4",
    duration: 35,
    order: 4
  }
])


//inserting data into enrollments collection

db.enrollments.insertMany([
  {
    studentId: ObjectId("65f100000000000000000001"),
    courseId: ObjectId("65faaaaaaa11111111111111"),
    enrolledAt: new Date(),
    paymentId: ObjectId("65f900000000000000000001")
  },
  {
    studentId: ObjectId("65f100000000000000000002"),
    courseId: ObjectId("65faaaaaaa11111111111111"),
    enrolledAt: new Date(),
    paymentId: ObjectId("65f900000000000000000002")
  },
  {
    studentId: ObjectId("65f100000000000000000003"),
    courseId: ObjectId("65fbbbbbbb22222222222222"),
    enrolledAt: new Date(),
    paymentId: ObjectId("65f900000000000000000003")
  },
  {
    studentId: ObjectId("65f100000000000000000004"),
    courseId: ObjectId("65fccccccc33333333333333"),
    enrolledAt: new Date(),
    paymentId: ObjectId("65f900000000000000000004")
  },
  {
    studentId: ObjectId("65f100000000000000000005"),
    courseId: ObjectId("65faaaaaaa11111111111111"),
    enrolledAt: new Date(),
    paymentId: ObjectId("65f900000000000000000005")
  },
  {
    studentId: ObjectId("65f100000000000000000006"),
    courseId: ObjectId("65fbbbbbbb22222222222222"),
    enrolledAt: new Date(),
    paymentId: ObjectId("65f900000000000000000006")
  },
  {
    studentId: ObjectId("65f100000000000000000007"),
    courseId: ObjectId("65fccccccc33333333333333"),
    enrolledAt: new Date(),
    paymentId: ObjectId("65f900000000000000000007")
  },
  {
    studentId: ObjectId("65f100000000000000000008"),
    courseId: ObjectId("65fddddddd44444444444444"),
    enrolledAt: new Date(),
    paymentId: ObjectId("65f900000000000000000008")
  },
  {
    studentId: ObjectId("65f100000000000000000009"),
    courseId: ObjectId("65fddddddd44444444444444"),
    enrolledAt: new Date(),
    paymentId: ObjectId("65f900000000000000000009")
  },
  {
    studentId: ObjectId("65f100000000000000000010"),
    courseId: ObjectId("65fbbbbbbb22222222222222"),
    enrolledAt: new Date(),
    paymentId: ObjectId("65f900000000000000000010")
  }
])

//inserting data into reviews collection
db.reviews.insertMany([
  {
    courseId: ObjectId("65faaaaaaa11111111111111"),
    studentId: ObjectId("65f100000000000000000001"),
    rating: 5,
    comment: "Excellent course! Concepts explained very clearly.",
    createdAt: new Date()
  },
  {
    courseId: ObjectId("65faaaaaaa11111111111111"),
    studentId: ObjectId("65f100000000000000000002"),
    rating: 4,
    comment: "Very practical and project-based learning.",
    createdAt: new Date()
  },
  {
    courseId: ObjectId("65fbbbbbbb22222222222222"),
    studentId: ObjectId("65f100000000000000000003"),
    rating: 5,
    comment: "Best Machine Learning course I have taken!",
    createdAt: new Date()
  },
  {
    courseId: ObjectId("65fccccccc33333333333333"),
    studentId: ObjectId("65f100000000000000000004"),
    rating: 3,
    comment: "Good content but could include more examples.",
    createdAt: new Date()
  },
  {
    courseId: ObjectId("65fddddddd44444444444444"),
    studentId: ObjectId("65f100000000000000000005"),
    rating: 4,
    comment: "Instructor explained cloud concepts very well.",
    createdAt: new Date()
  },
  {
    courseId: ObjectId("65fbbbbbbb22222222222222"),
    studentId: ObjectId("65f100000000000000000006"),
    rating: 5,
    comment: "Loved the hands-on exercises!",
    createdAt: new Date()
  },
  {
    courseId: ObjectId("65faaaaaaa11111111111111"),
    studentId: ObjectId("65f100000000000000000007"),
    rating: 4,
    comment: "Great for beginners in MERN stack.",
    createdAt: new Date()
  },
  {
    courseId: ObjectId("65fccccccc33333333333333"),
    studentId: ObjectId("65f100000000000000000008"),
    rating: 2,
    comment: "Content is okay but needs better explanations.",
    createdAt: new Date()
  },
  {
    courseId: ObjectId("65fddddddd44444444444444"),
    studentId: ObjectId("65f100000000000000000009"),
    rating: 5,
    comment: "Highly recommended for AWS beginners!",
    createdAt: new Date()
  },
  {
    courseId: ObjectId("65fbbbbbbb22222222222222"),
    studentId: ObjectId("65f100000000000000000010"),
    rating: 4,
    comment: "Well structured and easy to follow.",
    createdAt: new Date()
  }
])


//inserting data into categories collection

db.categories.insertMany([
  { name: "Web Development", description: "Frontend and Backend web technologies" },
  { name: "Data Science", description: "Data analysis, machine learning and AI" },
  { name: "Cloud Computing", description: "AWS, Azure, GCP and cloud infrastructure" },
  { name: "Mobile App Development", description: "Android, iOS and cross-platform development" },
  { name: "Cyber Security", description: "Network security, ethical hacking and encryption" },
  { name: "Programming Languages", description: "Core programming concepts and languages" },
  { name: "DevOps", description: "CI/CD, Docker, Kubernetes and automation" },
  { name: "Artificial Intelligence", description: "Deep learning and neural networks" },
  { name: "Database Management", description: "SQL, NoSQL and database optimization" },
  { name: "UI/UX Design", description: "User interface and user experience design principles" },
  { name: "Blockchain", description: "Cryptocurrency and decentralized applications" },
  { name: "Game Development", description: "Unity, Unreal Engine and game design" },
  { name: "Software Testing", description: "Manual and automated testing techniques" },
  { name: "Networking", description: "Computer networks and protocols" },
  { name: "Business & Entrepreneurship", description: "Startup and business management skills" }
])

//inserting data into payments collection

db.payments.insertMany([
  {
    studentId: ObjectId("65f100000000000000000001"),
    amount: 4999.0,
    paymentStatus: "Completed",
    transactionId: "TXN100001",
    createdAt: new Date()
  },
  {
    studentId: ObjectId("65f100000000000000000002"),
    amount: 4999.0,
    paymentStatus: "Completed",
    transactionId: "TXN100002",
    createdAt: new Date()
  },
  {
    studentId: ObjectId("65f100000000000000000003"),
    amount: 5499.0,
    paymentStatus: "Completed",
    transactionId: "TXN100003",
    createdAt: new Date()
  },
  {
    studentId: ObjectId("65f100000000000000000004"),
    amount: 3999.0,
    paymentStatus: "Completed",
    transactionId: "TXN100004",
    createdAt: new Date()
  },
  {
    studentId: ObjectId("65f100000000000000000005"),
    amount: 4999.0,
    paymentStatus: "Completed",
    transactionId: "TXN100005",
    createdAt: new Date()
  },
  {
    studentId: ObjectId("65f100000000000000000006"),
    amount: 5499.0,
    paymentStatus: "Completed",
    transactionId: "TXN100006",
    createdAt: new Date()
  },
  {
    studentId: ObjectId("65f100000000000000000007"),
    amount: 3999.0,
    paymentStatus: "Completed",
    transactionId: "TXN100007",
    createdAt: new Date()
  },
  {
    studentId: ObjectId("65f100000000000000000008"),
    amount: 5999.0,
    paymentStatus: "Completed",
    transactionId: "TXN100008",
    createdAt: new Date()
  },
  {
    studentId: ObjectId("65f100000000000000000009"),
    amount: 5999.0,
    paymentStatus: "Pending",
    transactionId: "TXN100009",
    createdAt: new Date()
  },
  {
    studentId: ObjectId("65f100000000000000000010"),
    amount: 5499.0,
    paymentStatus: "Failed",
    transactionId: "TXN100010",
    createdAt: new Date()
  }
])


//inserting data into users collection

db.users.insertMany([
  {
    name: "Ekshindeep",
    email: "ekshin@elearn.com",
    password: "hashedpass",
    role: "instructor",
    createdAt: new Date(),
    isVerified: true
  },
  {
    name: "Praveen Nair",
    email: "praveen@elearn.com",
    password: "hashedpass",
    role: "instructor",
    createdAt: new Date(),
    isVerified: true
  }
])

db.lessons.insertMany([
  {
    courseId: ObjectId("69931a4dd36ca2372b628cac"),  // ✅ correct id
    title: "Introduction to MERN Stack",
    videoUrl: "https://videos.elearn.com/mern/intro.mp4",
    duration: 15,
    order: 1
  },
  {
    courseId: ObjectId("69931a4dd36ca2372b628cac"),
    title: "Setting up Node.js and Express",
    videoUrl: "https://videos.elearn.com/mern/node-express.mp4",
    duration: 25,
    order: 2
  },
  {
    courseId: ObjectId("69931a4dd36ca2372b628cac"),
    title: "MongoDB Integration",
    videoUrl: "https://videos.elearn.com/mern/mongodb.mp4",
    duration: 30,
    order: 3
  },
  {
    courseId: ObjectId("69931a4dd36ca2372b628cac"),
    title: "React Frontend Setup",
    videoUrl: "https://videos.elearn.com/mern/react.mp4",
    duration: 35,
    order: 4
  }
])


//reading lessons from courses collection using aggregate(let-pipelines)

db.courses.aggregate([
  {
    $match: { title: "Complete MERN Stack Bootcamp" }
  },
  {
    $lookup: {
      from: "lessons",
      let: { courseId: "$_id" },
      pipeline: [
        {
          $match: {
            $expr: { $eq: ["$courseId", "$$courseId"] }
          }
        },
        {
          $sort: { order: 1 }
        }
      ],
      as: "lessons"
    }
  }
])


//updated courses mern stack course by 500

db.courses.updateOne(
  { title: "Complete MERN Stack Bootcamp" },
  { $inc: { price: 500 } }
)

//updates course rating

db.courses.updateOne(
  { title: "Complete MERN Stack Bootcamp" },
  { $set: { rating: 4.9 } }
)

//deleted failed payments

db.payments.deleteMany({ paymentStatus: "Failed" })
db.reviews.deleteOne({ rating: 1 })

//top-3 highest courses

//revenue per instructor

db.courses.aggregate([
  {
    $lookup: {
      from: "enrollments",
      localField: "_id",
      foreignField: "courseId",
      as: "enrollments"
    }
  },
  {
    $lookup: {
      from: "payments",
      localField: "enrollments.paymentId",
      foreignField: "_id",
      as: "payments"
    }
  },
  {
    $addFields: {
      totalRevenue: {
        $sum: {
          $map: {
            input: {
              $filter: {
                input: "$payments",
                as: "p",
                cond: { $eq: ["$$p.paymentStatus", "Completed"] }
              }
            },
            as: "paid",
            in: "$$paid.amount"
          }
        }
      }
    }
  },
  {
    $project: {
      _id: 0,
      title: 1,
      totalRevenue: 1
    }
  }
])


//using explain

db.courses.find({ title: "Complete MERN Stack Bootcamp" }).explain("executionStats")


