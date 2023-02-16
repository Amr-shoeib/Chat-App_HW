    
    var socket = io();
    
    const { createApp } = Vue;

    const vm = createApp({
        
        el: '#app',
        data:{
            connectedUsers:[],
            messges:[],
            messges:{
                "type":"",
                "action":"",
                "user":"",
                "text":"",
                "timestamp":""

                

            },
            areTyping:[]
        },
    }),

        created: function(){
            // if server emits 'user joined', update connectedUsers
            socket.on('user joined', function (socketId){
                this.connectedUsers.push(socketId);
            } .bind(this));

          // update message array
            socket.on('chat.message', function(message){
                this.message.push(message);
            }.bind(this));

            // if user left then remove leaving user from connectUssers array
            socket.on ('user left', function(socketId){
                var index = this.connectedUsers.indexof(socketId);
                if(index>=0){
                    this.connectedUsers.splice(index,1);
                }
            });
        },


         methods:{
            send: function (){
                this.message.type = "chat";
                this.message.user = socket.id;
                this.message.timestamp = moment().calendar();
                socket.emit('chat.message', this.message);
                this.message.type = '';
                this.message.user = '';
                this.message.text = '';
                this.message.timestamp = '';


            },
            userIsTtping: function (username){
                if(this.areTyping.indexOf(socket.id) <= -1) {
                    this.areTyping.push(socket.id);
                    socket.emit('user typing', socket.id);
                }

            },
           
            stoppedTyping: function (){
                if(keycode == '13' || (keycode == '8' && this.message.text == '')) {
                    var index = this.areTyping.indexOf(socket.id);
                    if (index >= 0) {
                        this.areTyping.splice(index,1);
                        socket.emit('stopped typing', socket.id);
                    }
                }

            }
        
         }

    });
