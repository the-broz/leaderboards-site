var loginButton = document.getElementById("submit")
var usernameField = document.getElementById("username")
var passwordField = document.getElementById("password")

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-analytics.js";
                     import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-database.js";
  const firebaseConfig = {
    apiKey: "AIzaSyCQEOWjysLQNGwDemk-jp4k3cWdAuitHZw",
    authDomain: "leaderboards-site.firebaseapp.com",
    databaseURL: "https://leaderboards-site-default-rtdb.firebaseio.com",
    projectId: "leaderboards-site",
    storageBucket: "leaderboards-site.appspot.com",
    messagingSenderId: "943539476503",
    appId: "1:943539476503:web:82e4398689311b3fec2452",
    measurementId: "G-D16RW8RJYM"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
                     const database = getDatabase();
                     var thedata = undefined;
                    function getLoginData(){
                               const starCountRef = ref(database, 'users/');
onValue(starCountRef, (snapshot) => {
  const data = snapshot.val();
  thedata = data;
});
                    }

                    getLoginData();

loginButton.addEventListener("click",attemptLogin,false);

function attemptLogin(e){
    e.preventDefault();
    getLoginData();
    console.log(thedata);
    for (var i = 0; i < Object.keys(thedata).length; i++){
        console.log(usernameField.value)
        console.log("the "+thedata[usernameField.value])
        if (thedata[usernameField.value] != undefined){
            console.log("help")
            if (thedata[usernameField.value].password == passwordField.value){
                // thats it!
                console.log("correct")
                loginButton.value = "Logging in..."
                document.cookie = "username="+usernameField.value+";password="+passwordField.value+";expires=expires=Thu, 1 Dec 2040 12:00:00 UTC"
            }
        }
           
    }
}
