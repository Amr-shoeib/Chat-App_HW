    
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
