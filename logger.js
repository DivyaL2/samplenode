const EventEmitter=require("events");

class Logger extends EventEmitter{ //to have all the capa
     log(message){ //It is a function
        console.log(message);
       this.emit('messageLogged',{id:1,url:"http://"});
    
    }
    
}


module.exports=Logger;