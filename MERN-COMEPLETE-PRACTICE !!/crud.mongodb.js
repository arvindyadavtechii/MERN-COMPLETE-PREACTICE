//crud operation
use("crudDb")
console.log(db);

db.createCollection("courses")

// db.courses.insertMany([
//         { name: "Alice Johnson", class: 10, marks: 85, gender: "Female" },
//         { name: "Bob Smith", class: 9, marks: 78, gender: "Male" },
//         { name: "Catherine Brown", class: 11, marks: 92, gender: "Female" },
//         { name: "David Wilson", class: 10, marks: 88, gender: "Male" },
//         { name: "Eva Davis", class: 12, marks: 95, gender: "Female" },
//         { name: "Frank Miller", class: 9, marks: 74, gender: "Male" },
//         { name: "Grace Lee", class: 11, marks: 89, gender: "Female" },
//         { name: "Henry Garcia", class: 10, marks: 81, gender: "Male" },
//         { name: "Isabella Martinez", class: 12, marks: 97, gender: "Female" },
//         { name: "Jack Robinson", class: 9, marks: 76, gender: "Male" }
// ])

// let a = db.courses.find({price:0})
// console.log(a);

// console.log(a.count());
// console.log(a.toArray());

// let b = db.courses.findOne({price:0})
// console.log(b);

// db.courses.updateOne({price:0},{$set:{price:10}})
// db.courses.updateMany({price:0},{$set:{price:10}})

// db.courses.deleteOne({price:10})

// db.courses.deleteMany({price:10})

// check more opertors on : mongodb operators 

 




