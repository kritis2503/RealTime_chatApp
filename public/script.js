let sendButton=document.querySelector(".send-button");
let chatMessage=document.querySelector("#chat-message");
let chatList=document.querySelector(".chat-list");
let onlineList=document.querySelector(".online-list");
let camIcon=document.querySelector("#cam-icon");
let pic=document.querySelector("#pic");

chatMessage.addEventListener("keyup",function(e){
    if(e.keyCode==13)
        sendButton.click();
});

window.setInterval(function() {
    chatList.scrollTop = chatList.scrollHeight;
  }, 500);

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

camIcon.addEventListener("click",function(){
   pic.click(); 
   
});
pic.addEventListener("change",function(e){
    let photo=e.target.files[0];
    console.log(photo);
    let src=URL.createObjectURL(photo);

    let chat=document.createElement("div");
    let img=document.createElement("img");

    img.setAttribute("src",src);
    img.classList.add("chat-img");

    chat.classList.add("chat");
    chat.classList.add("right");
    chat.append(img);

    chatList.append(chat);
    console.log(chat);

    socket.emit("chat-img",src);
})