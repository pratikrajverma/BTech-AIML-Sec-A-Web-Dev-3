// const {sum, divide} = require('./math')

// import {sum, divide} from './math.js'

// import sum from './math.js'


// console.log(sum(10, 20))

// console.log(divide(30,5))


// import os from 'os'
// console.log(os.type())

    // if(os.type() === 'Windows_NT'){
    //     console.log('THIS IS WINDOW')
    // }else{
    //     console.log('This is mac')
    // }


// console.log(os.platform())



// console.log(os.arch())

// console.log(os.cpus())

// console.log(os.totalmem() / 1024 / 1024 / 1024)

// console.log(os.freemem())

// console.log(os.hostname())


// import path from 'path'

// console.log(path.basename('./parent/child.js'))

// console.log(path.extname('./parent/child.js'))

// console.log(path.dirname('./parent/child.js'))


// import dns from 'dns'

// console.log(dns.lookup('facebook.com', (err, address)=>{
//     console.log(address)
// }))

// console.log(dns.reverse('163.70.146.35' , (err, domain)=>{
//     console.log(domain)
// } ))


import fs from 'fs'


// fs.writeFile('./parent/child.js', 'console.log("this is child") ', (err)=>{
//     if(err){
//         console.log(err)
//         return
//     }
// })


// fs.readFile('./parent/child.js' , 'utf-8', (err,data)=>{
//     if(err){
//         console.log(err)
//         return 
//     }

//     console.log(data)
// })


// fs.mkdir('./parent/child2/child3/child4', {recursive:true}, (err)=>{
//     if(err){
//         console.log(err)
//         return
//     }

// })



// fs.appendFile('./parent/child.js', '\n console.log("this is new data")', (err)=>{
//     if(err){
//         console.log(err)
//         return
//     }
// })


// fs.cp('./server.js', './parent/child.js', (err)=>{
//     if(err){
//         console.log(err)
//         return
//     }
// })


// fs.unlink('./parent/child.js' , (err)=>{
//     if(err){
//         console.log(err)
//         return
//     }
// })