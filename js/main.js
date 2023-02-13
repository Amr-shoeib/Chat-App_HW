    
    var socket = io();
    new vue({
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

        created: function(){
            // if server emits 'user joined', update connectedUsers
            socket.on('user joined', function (socketId){
                this.connectedUsers.push(socketId);
            } .bind(this));

          
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

            },
            userIsTtping: function (username){

            },
            userAreTyping: function (){

            },
            stoppedTyping: function (){

            }
        
         }

    })
