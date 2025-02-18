const http = require("http")

const server =http.createServer((req,res)=>{
    res.write("hey hii iam a server")
    res.end("heeee")
})

server.listen(3101,()=>{
console.log("server is running")
})

