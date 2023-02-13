    
    var socket = io();
    new Vue({
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
