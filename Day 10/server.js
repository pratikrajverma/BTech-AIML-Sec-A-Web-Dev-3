
db

db.Students.aggregate([
    {
        $match : {
            gender : 'female'
        }
    }
])

db.Students.aggregate([
    {
        $match : {
            course : 'BCA'
        }
    }
])

db.Students.aggregate([

    {
        $project : {
           name:1,
            age:1
        }
    }
])


db.Students.aggregate([
     {
        $match : {
            course : 'MTech'
        }
    },

      {
        $project : {
           name:1,
            age:1
        }
    },

])


db.Students.aggregate([
    {
        $sort : {
            age : -1
        }
    }
])

db.Students.aggregate([
    {
        $sort : {
            age : 1
        }
    },
    {
        $limit : 3
    }
])



db.Students.aggregate([
    {
        $group: {
            _id: '$gender',
            total: {$sum : 1},
            maxAge: {
                $max : '$age'
            },
            minCGPA : {
                $min: '$cgpa'
            }
        }
    }
])



db.Students.createIndex({
    name:1
})


db.Students.getIndexes()

