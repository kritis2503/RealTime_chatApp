socket.on("chat-left",function(messageObj){
    console.log(messageObj);
    let chat=document.createElement("div");
    chat.classList.add("chat");
    chat.classList.add("left");
    chat.innerHTML=messageObj.username+" : "+messageObj.message;
    chatList.append(chat);
});

socket.on("chat-join",function(username){
    let chat=document.createElement("div");
    chat.classList.add("join");
    chat.innerHTML=username+" joined the chat!";
    chatList.append(chat);

    let li_=document.createElement("li");
    li_.setAttribute("id",username);
    li_.innerHTML=username;
    onlineList.append(li_);
});

socket.on("leave",function(username){
    let chat=document.createElement("div");
    chat.classList.add("leave");
    chat.innerHTML=username+" left the chat!";
    chatList.append(chat);

    let liDeleted=document.querySelector("#"+username);
    
})
var imgChunks=[];

socket.on("chat-img",function(imgObj){
    //let chat=document.createElement("div");

    let userName=document.createElement("div");
    userName.classList.add("chat");
    userName.classList.add("left");
    userName.innerHTML=imgObj.username;

    let img=document.createElement("img");
    imgChunks.push(imgObj.chunk);
    img.setAttribute("src",'data:image/jpeg;base64,'+window.btoa(imgChunks));
    img.classList.add("chat-img");

    let imgDiv=document.createElement("div");
    imgDiv.classList.add("chat");
    imgDiv.classList.add("left");
    imgDiv.append(img);

    chatList.append(userName);
    chatList.append(imgDiv);

    

})