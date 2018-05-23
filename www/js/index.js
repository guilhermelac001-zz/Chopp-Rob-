/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.


 */


var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
        var button=document.getElementById("click")
        button.addEventListener('click', this.button_click.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },


    button_click: function () {
        var e=document.getElementById("tipo")
        console.log(e.options[e.selectedIndex].value)
        var e2=document.getElementById("colarinho")
        console.log(e2.options[e2.selectedIndex].value)


        const options = {
          method: 'post',
          data: { id: e2.options[e2.selectedIndex].value , message: e.options[e.selectedIndex].value },
          headers: {}
        };

        cordova.plugin.http.sendRequest('http://52.67.164.23:2000/move_position', options, function(response) {
          // prints 200
          console.log(response);
        }, function(response) {
          // prints 403
          console.log(response.status);

          //prints Permission denied
          console.log(response.error);
        });



//         cordovaHTTP.post("http://localhost:2000/move_position", {
//         id: 12,
//         message: "test"
//         }, {  }, function(response) {
//     // prints 200
//         console.log(response.status);
//         try {
//         response.data = JSON.parse(response.data);
//         // prints test
//         console.log(response.data.message);
//         } catch(e) {
//         console.error("JSON parsing error");
//     }
//     }  , function(response) {
//     // prints 403
//     console.log(response.status);
    
//     //prints Permission denied 
//     console.log(response.error);
// });

    },
  

    receivedEvent: function(id) {
       
        


        console.log('Received Event: ' + id);
    }

    
};

app.initialize();