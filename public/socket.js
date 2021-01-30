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