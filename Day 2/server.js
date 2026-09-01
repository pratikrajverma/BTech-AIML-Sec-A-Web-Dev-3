import http from 'http'

const server  =  http.createServer((req,res)=>{
    // if(req.url === '/'  && req.method === 'GET'){

    //     res.end('<h1>Welcome to Backend</h1>') 

    // }else if(req.url==='/about' && req.method ==='GET'){
    //     res.end('<h1>This is about Page</h1>')
    // }else if(req.url === '/contact'  && req.method ==='GET'){
    //     res.end(JSON.stringify({
    //         message:'this is contact page',
    //         success:true
    //     }))

    // }else{
    //     res.end('page not found')
    // }

    // let body = ''

    // if(req.url === '/user'  && req.method === 'POST' ){

    //     req.on('data', (chunk)=>{
    //         body =   body + chunk 
    //         console.log(body)
    //     })

    //     req.on('end', ()=>{
    //         body = JSON.parse(body) 

    //         res.writeHead(200, {'content-type':'application/json'})

    //         res.end(JSON.stringify({
    //             message:'data received successfully',
    //             success:true,
    //             body
    //         })) 

    //     })



    //   }


    // let x

    
    
    
})



// console.log( process.argv)

// let name = process.argv[2]

// console.log(name)

let operation = process.argv[2]

let num1 = Number(process.argv[3])

let num2 = Number(process.argv[4])

if(operation === 'add'){
    console.log(num1 + num2)
}else if(operation === 'sub'){
    console.log(num1 - num2)
}

const port = 3000



server.listen(port, ()=>{
    console.log('server has started at port ', port)
})