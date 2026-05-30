// const Course = require("../models/Course");

// async function seedCourses(req, res) {
//   try {
//     const existingCourse = await Course.findOne({
//       titile: "DSA",
//     });

//     if (existingCourse) {
//       return res.status(400).json({
//         message: "Course already seeded",
//       });
//     }

//     const courses = [
//       {
//         title: "DSA",
//         category: "Coding",
//         lessons: [
//           { title: "Arrays", order: 1 },
//           { title: "Strings", order: 2 },
//           { title: "Linked List", order: 3 },
//           { title: "Stack", order: 4 },
//           { title: "Queue", order: 5 },
//         ],
//       },

//       {
//         title: "Web Development",
//         category: "Development",
//         lessons: [
//           { title: "HTML", order: 1 },
//           { title: "CSS", order: 2 },
//           { title: "JavaScript", order: 3 },
//           { title: "React", order: 4 },
//         ],
//       },
//     ];

//     await Course.insertMany(courses);

//     res.status(201).json({
//       message: "Courses seeded successfully",
//     });
//   } catch (error) {
//     res.status(500).json({
//       message: error.message,
//     });
//   }
// }

// module.exports = {
//   seedCourses,
// };
