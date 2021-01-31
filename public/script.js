let sendButton=document.querySelector(".send-button");
let chatMessage=document.querySelector("#chat-message");
let chatList=document.querySelector(".chat-list");
let onlineList=document.querySelector(".online-list");
let camIcon=document.querySelector("#cam-icon");
let pic=document.querySelector("#pic");
//let $= require("jquery");

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

// camIcon.addEventListener("click",function(){
//    pic.click(); 
//    
// });
// pic.addEventListener("change",function(e){
    // let photo=e.target.files[0];
    // var data = e.target.files[0];
    // readThenSendFile(data);  
    // console.log(photo);
    // let src=URL.createObjectURL(photo);

    // let chat=document.createElement("div");
    // let img=document.createElement("img");

    // img.setAttribute("src",src);
    // img.classList.add("chat-img");

    // chat.classList.add("chat");
    // chat.classList.add("right");
    // chat.append(img);

    // chatList.append(chat);
    // console.log(chat);

    // socket.emit("chat-img",src);

// })
// function readThenSendFile(data){
// 
    // var reader = new FileReader();
    // reader.onload = function(evt){
        // var msg ={};
        // msg.username = username;
        // msg.file = evt.target.result;
        // msg.fileName = data.name;
        // socket.emit('base64 file', msg);
    // };
    // reader.readAsDataURL(data);
// }

let images=["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.png","7.jpg","8.jpg"];

// let content=document.querySelector(".content");
$(function () {
    var i = 0;
    $(".content").css("background-image", "url(./resources/" + images[i] + ")");
    setInterval(function () {
        i++;
        if (i == images.length) {
            i = 0;
        }
        //./resouces/astronomy-1867616__340.jpg
        
        $(".content").fadeOut("slow", function () {
            $(this).css("background-image", "url(./resources/" + images[i] + ")");
            $(this).fadeIn("slow");
        });
    }, 30000);
});

