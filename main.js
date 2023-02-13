    new Vue({
        el: '#app',
        data:{
            connectedUsers:["User a", "user b"],
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
