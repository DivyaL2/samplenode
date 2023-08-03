// const os=require('os');

// //info about current user
// const user=os.userInfo()
// console.log(user);

// //method returns the system uptime in seconds
// console.log(`The System update is ${os.uptime()}seconds`)

// const currentOs={
//     name:os.type(),
//     release:os.release(),
//     totalMem:os.totalmem(),
//     freeMem:os.freemem()

// }
// console.log(currentOs)
//path
// const path=require('path')
// console.log(path.sep)
// const filepath=path.join('/content/','subfolder','text.txt')
// console.log(filepath)
// const base=path.basename(filepath)
// console.log(base)
// const absolute=path.resolve(__dirname,'content','subfolder','test.txt')
// console.log(absolute)
//fs
// const {readFileSync,writeFileSync} =require('fs')

// const first=readFileSync('first.txt','utf8');


// writeFileSync(
//     'result.txt','Here is the result:${first}',{flag:'a'}
// )

// const{readFile,writeFile}=require('fs')
// readFile('first.txt','utf8',(err,result)=>{
//     if(err){
//         console.log(err)
//         return
//     }
//     const first=result
//     console.log(first)
//     writeFile('result.txt',`Here is the result:${first}`,(err,result)=>{
//         if(err){
//             console.log(err)
//             return
//         }
//         console.log(result);
//     })
   
// })

// http
const http=require('http');
const server=http.createServer((req,res)=>{
    
    
    if(req.url=='/'){
        res.end('Welcome to our home page')
    }
    if(req.url=='/about'){
        res.end('here is our short history')
    }
})
server.listen(3000)