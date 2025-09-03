const { io } = require("socket.io-client");

// Connect to your Socket.IO server
const socket = io("http://localhost:3000", {
  transports: ["websocket"], // force websocket for testing
});


socket.on("connect", () => {
  console.log("Connected to server with ID:", socket.id);
   socket.emit('register',{userId:'68b082e3073718d5f9c9f15f',page:'Home'})
});

socket.on('bookreq:rece',(data)=>{
   console.log(data);
})
  
socket.on('globalMsg:rece',(data)=>{
  console.log(data)
})
  

socket.emit("private-message",{touserId:'kirti',message:'baby hain baby'});

socket.on('rece-private-message',(data)=>{
  console.log(data)
  
})
socket.on("disconnect", () => {
  console.log("Disconnected from server");
});
