'use strict'
const server  = require('net').createServer( connection => {
   console.log('Subscriber connected!');
  
  // Two message chunks that togheter make a whole message
   const firstChunk = '{type: "watching","timesta}';
   const secondChunk = '{mp:1450694370094} \n';

  //Send the first chunk immediatly
   connection.write(firstChunk);
   
 //After a short delay send another chunk
  
   const timer = setTimeOut( () => {
       connection.write(secondChunk);
       connection.end();
}, 100);

//Clear timer when the connection ends

connection.on('end', () => {
   clearTimeOut(timer);
   console.log("Subscriber disconnected");
});

});


server.listen(60300, function(){
   console.log('Test sever listening for subscriberns');
});

