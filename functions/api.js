const express = require('express');
const serverless = require("serverless-http");
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();
const port = 8000;

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(bodyParser.urlencoded({ extended: false }));

// Parse JSON bodies (as sent by API clients)
app.use(bodyParser.json());

// const path = require('./public');

// Define the public directory for serving static files
// const publicDirectoryPath = path.join(__dirname, 'public');
// app.use(express.static('../public'));

router.get("/hello", (req, res) => res.send("Hello World!"));
// Handle form submission
// Route to handle form submissions
// app.post('/submit', (req, res) => {
//   const name = req.body.name;
//   const lastName = req.body.lastName;
//   const number = req.body.number;
//   const email = req.body.email;
//   const message = req.body.message;

//   console.log("data",name,email,message);
//   // Create a Nodemailer transporter
//   const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: 'faisalliaqat552@gmail.com', // Replace this with your email address
//       pass: 'dgplkeeprdmpedoa' //  this with your email password or an app-specific password for security
//     }
//   });

//   // Email message options
//   const mailOptions = {
//     from: 'faisalliaqat552@gmail.com', // Replace this with your email address
//     to: `${email}` ,// Replace this with the recipient's email address
  
//     subject: 'New Contact Form Submission',
//     text: `Name: ${name}\nLast Name: ${lastName}\nEmail: ${email}\nContact Number: ${number}\nMessage: ${message}`,

//   };

//   // Send the email
//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       console.log('Error sending email:', error);
//       res.send('Error sending email. Please try again later.');
//     } else {
//       console.log('Email sent: ' + info.response);
     
//       const alertScript = '<script>alert("Form submitted successfully!");</script>';
//       const scrollScript = '<script>window.onload = function() { window.location.href = "index.html#mycontact"; }</script>';
  
//       const combinedScript = alertScript  + scrollScript;
  
//       res.send(combinedScript);
//     }
//   });

// });




// send message for admission 
// app.post('/send', (req, res) => {
//   const name = req.body.name;
//   const lastName = req.body.lastName;
//   const number = req.body.number;
//   const email = req.body.email;
//   const city = req.body.city;
//   const course = req.body.course;
//   const message1 = req.body.mymessage;

//   // alert("Message Send")
//   // Create a Nodemailer transporter
//   const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: 'faisalliaqat552@gmail.com', // Replace this with your email address
//       pass: 'dgplkeeprdmpedoa' //  this with your email password or an app-specific password for security
//     }
//   });

//   // Email message options
//   const mailOptions = {
//     from: 'faisalliaqat552@gmail.com', // Replace this with your email address
//     to: `${email}` ,// Replace this with the recipient's email address
//     subject: 'New Contact Form Submission',
//     text: `Name: ${name}\nLast Name: ${lastName}\nEmail: ${email}\nContact Number: ${number}\nCity: ${city}\nCourse: ${course}\nMessage: ${message1}`,
//   };

//   // Send the email
//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       console.log('Error sending email:', error);
//       res.send('Error sending email. Please try again later.');
//     } else {
//       console.log('Email sent: ' + info.response);
//       const myAlert = '<script>alert("Your request is submitted")</script>';
//       const location = '<script>window.location.href= "admission.html"</script>';
//       const twoVariables = myAlert + location;
//       res.send(twoVariables);
//     }
   
//   });
// });
// Export the express app wrapped in serverless handler
app.use("/api/", router);
module,exports.handler = serverless(app);
// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
