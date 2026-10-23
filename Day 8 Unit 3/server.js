//  show dbs

// use databasename  


 db

// db.createCollection('sectionA')


// show collections


// db.secionA.drop()

// db.Students.insertOne({
//     name:'Ankit',
//     age:23,
//     _id:1
// })


// db.Students.find()


// db.Students.insertOne({
//     name:"Swati",
//     age:20,
// })



db.Students.insertMany([
    {
        name:"Ankit",
        age:19,
        gender:'male',
        course:'BTech',
        cgpa:10
    },
    {
        name:"Rahul",
        age:29,
        gender:'male',
        course:'BTech',
        cgpa:8
    },
    {
        name:"Swati",
        age:20,
        gender:'female',
        course:'BCA',
        cgpa:7
    },
    {
        name:"Nandan",
        age:18,
        gender:'male',
        course:'MCA',
        cgpa:9.4
    },
    {
        name:"Sejal",
        age:25,
        gender:'female',
        course:'BCA',
        cgpa:7
    }
])




// db.Students.deleteOne({
//     _id: 1
// })


// db.Students.deleteMany({
//     name: 'Swati'
// })

// db.Students.insertOne({
//      name: 'Priti',
//     age: 17,
//     gender: 'female',
//     course: 'BCA',
//     cgpa: 7
// })

// db.Students.updateOne(
//     {name:"Nandan"}, 
//     { $set : {name: "Nandan Kumar Singh"}}
// )



// db.Students.find(
//     {name:'Ankit'}
// )


// db.Students.find(
//     {gender:'female'}
// )

// db.Students.find(
//     {age : {$eq : 19}}
// )


// db.Students.find(
//     {age : {$ne : 19}}
// )

// db.Students.find({
//     age: { $gt : 19}
// })
// db.Students.find({
//     age: { $gte : 19}
// })


// db.Students.find({
//     age: { $lt : 19}
// })
// db.Students.find({
//     age: { $lte : 19}
// })


// db.Students.find(
//     { course : {  $eq : 'BTech'} }
// )


// db.Students.find({
//     $and : [{ course : {  $eq : 'BCA'} },
//             {gender : {$eq : 'male'}}
//     ]   
// })


// db.Students.find({
//     $or : [{ course : {  $eq : 'MCA'} },
//             {gender : {$eq : 'female'}}
//     ]   
// })



 
// db.Students.find(
//     {gender:'male'},
//     {name:1, gender:1, _id:0}
// )



// db.Students.find().sort({age:-1})
db.Students.find().sort({cgpa:-1})

db.Students.find().skip(3)


db.Students.find().limit(5)




