socket.on("chat-left",function(messageObj){
    console.log(messageObj);
    let chat=document.createElement("div");
    chat.classList.add("chat");
    chat.classList.add("left");
    chat.innerHTML=messageObj.username+" : "+messageObj.message;
    chatList.append(chat);
});

socket.on("chat-join",function(u){
    let chat=document.createElement("div");
    chat.classList.add("join");
    chat.innerHTML=u.username+" joined the chat!";
    chatList.append(chat);

    for(let i=0;i<u.user.length;i++){
        let un=document.getElementById(u.user[i]);
        if(un==undefined && u.username==u.user[i]){}
        else{
        let li_=document.createElement("li");
        li_.setAttribute("id",u.username);
        li_.innerHTML=u.username;
        onlineList.append(li_);
        }
    }
    
    
    
    
});

socket.on("leave",function(username){
    let chat=document.createElement("div");
    chat.classList.add("leave");
    chat.innerHTML=username+" left the chat!";
    chatList.append(chat);

    //let liDeleted=document.querySelector("#"+username);
    for(let i=0;i<username.user.length;i++){
        let u=document.getElementById(username.user[i]);
        if(u==undefined){
            u.remove();
        }
    }
    
})
// var imgChunks=[];
// 
// socket.on("chat-img",function(imgObj){
    //let chat=document.createElement("div");
// 
    // let userName=document.createElement("div");
    // userName.classList.add("chat");
    // userName.classList.add("left");
    // userName.innerHTML=imgObj.username;
// 
    // let img=document.createElement("img");
    // imgChunks.push(imgObj.chunk);
    // img.setAttribute("src",'data:image/jpeg;base64,'+window.btoa(imgChunks));
    // img.classList.add("chat-img");
// 
    // let imgDiv=document.createElement("div");
    // imgDiv.classList.add("chat");
    // imgDiv.classList.add("left");
    // imgDiv.append(img);
// 
    // chatList.append(userName);
    // chatList.append(imgDiv);
// 
// })