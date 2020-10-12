const express = require('express')
const app = express()
const port = process.env.PORT | 3000;
//const twilio = require('twilio')

const accountSid = 'ACf1ac26fb4b78c1b3b5a875869d5bf71c';
const authToken = 'ab9d8595b7c4aebb604221d2f8f09ff1';
const firebase = require('firebase')
// require the Twilio module and create a REST client
const client = require('twilio')(accountSid, authToken);
const twilioPhoneNumber ='+18312964537'


// var mysql = require('mysql');

// var con = mysql.createConnection({
//   host: "localhost",
//   user: "yourusername",
//   password: "yourpassword"
// });

// con.connect(function(err) {
//   if (err){
//       console.log(err)
//       throw err
//   }
//   console.log("Connected!");
// });

// const firebaseConfig = {
//    apiKey:"AIzaSyBbGIEktfKYEnodHLznl-jWckZxt4KAa0I"
//   };
  
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);

// var phoneNumber = '+2001006569774'
// //var appVerifier = window.recaptchaVerifier;
// firebase.auth().signInWithPhoneNumber(phoneNumber)
//     .then(function (confirmationResult) {
//       // SMS sent. Prompt user to type the code from the message, then sign the
//       // user in with confirmationResult.confirm(code).
//      // window.confirmationResult = confirmationResult;
//     }).catch(function (error) {
//       // Error; SMS not sent
//       // ...
//       console.log(error)
//     });

app.get('/' ,(req,res)=>{
    res.send('welcome')
})

app.listen(port ,() =>{
    console.log(`server started at port ${port}`)
})

