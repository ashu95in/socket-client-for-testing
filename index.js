const { io } = require("socket.io-client");

// Connect to your Socket.IO server
const socket = io("http://localhost:3000", {
  transports: ["websocket"], // force websocket for testing
});

socket.on("connect", () => {
  console.log("Connected to server with ID:", socket.id);
   socket.emit('register',{userId:'prisha',page:'Home'})
});
  


socket.emit("bookReq",{toUser:"kriti",title:'c++',course:"BCA",sem:2,author:'Ashu shrivastav',dateReq:'10/12/25',price:150});

// socket.emit("send-private-message",{toUserId:'kirti',message:'baby hain baby'});

// socket.on('rece-private-message',(data)=>{
//   console.log(data)
  
// })
// socket.emit("send_message",'hello world i from clicent sie');


socket.on("disconnect", () => {
  console.log("Disconnected from server");
});
