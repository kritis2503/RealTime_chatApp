let sendButton=document.querySelector(".send-button");
let chatMessage=document.querySelector("#chat-message");
let chatList=document.querySelector(".chat-list");
let onlineList=document.querySelector(".online-list");
let camIcon=document.querySelector("#cam-icon");
let pic=document.querySelector("#pic");


let username=prompt("Enter your Name!");
console.log(username);

if(username){
    console.log("username ");
    socket.emit("join",username);
}

sendButton.addEventListener("click",function(){
    let message=chatMessage.value;
    if(message){
        let chat=document.createElement("div");
        chat.classList.add("chat");
        chat.classList.add("right");
        chat.innerHTML=message;
        chatList.append(chat);
        chatMessage.value="";

        socket.emit("chat",message);
    }
});

// file.addEventListener("change",function(e){
    // console.log(e);
// })

camIcon.addEventListener("click",function(){
   pic.click(); 
   
});
pic.addEventListener("change",function(e){
    let photo=e.target.files[0];
    console.log(photo);
})