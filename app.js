const express=require("express");
const app=express();
const fs=require('fs');

const http=require('http').Server(app);
const io = require("socket.io")(http, {
    cors: {
        origin: "https://kriti-realtime-chatapp.herokuapp.com/",
        methods: ["GET", "POST"]
    }
})

app.use(express.static("public"));
app.use(require('cors')());

let user=[];

io.on('connection',function(socket){
    console.log(`${socket.id} connected`);
    user.push({id:socket.id})

    socket.on('join',function(username){
        console.log("in join");
        for(let i=0;i<user.length;i++){
            if(user[i].id==socket.id){
                user[i].username=username;
                break;
            }
        }
        socket.broadcast.emit("chat-join",{username,user});
    })

    socket.on("chat",function(message){
        console.log("chat-join");
        let username;
        for(let i=0;i<user.length;i++){
            if(user[i].id==socket.id){
                username=user[i].username;
                break;
            }
        }
        console.log(user);
        socket.broadcast.emit("chat-left",{message,username});
    })
    // socket.on("chat-img",function(src){
        // let username;
        // for(let i=0;i<user.length;i++){
            // if(user[i].id==socket.id){
                // username=user[i].username;
                // break;
            // }
        // }
        // var readStream=fs.createReadStream(path.resolve(src),{
            // encoding:'binary'
        // }), chunks=[];

        // readStream.on('readable',function(){
            // console.log("image loading");
        // });

        // readStream.on('data',function(chunk){
            // chunks.push(chunk);
            // socket.broadcast.emit("chat-img",{chunk,username});
        // });

        // readStream.on('end',function(){
            // console.log('image loaded');
        // });
        // 
    // });

    socket.on('disconnect',function(){
        let idx;
        let name;
        for(let i=0;i<user.length;i++){
            if(user[i].id==socket.id){
                idx=i;
                name=user[i].username;
                break;
            }
        }
        user.splice(idx,1);
        console.log(user);
        socket.broadcast.emit("leave",{name,user});
    });
});


// http.listen(3000)
//let port="https://kriti-realtime-chatapp.herokuapp.com/";
let port= process.env.PORT || 3000;
http.listen(port,function(){
    console.log("Server started at port 3000");
})