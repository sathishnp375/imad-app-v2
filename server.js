var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool = require('pg').Pool;
var config = {
  user : 'sathishnp375',
  database : 'sathishnp375',
  host :'db.imad.hasura-app.io',
  port :'5432',
  password : process.env.DB_PASSWORD
};
var app = express();
//app.use(morgan('combined'));

var studentmedia= {
    title : 'student media',
    heading : 'student media',
    content : `  <div class="container">
                  <div><pre>                                 <a href='/'>HOME</a>   <a href='https://www.aitsrajampet.ac.in'>MY COLLEGE</a>   <a href='https://onlinecourses.nptel.ac.in/explorer'>NPTEL</a>   <a href=''>MY TUBE</a>   <a href=''>MY MEMORIES</a> </pre>
              </div>
        <hr/>
    <h1 style="text-align:center;"><b>
         STUDENT MEDIA
         </b>
    </h1>
  <p>  <b>WELCOME to my first WEB APP.</b><br/> My name is sathish . I am the student of Annamacharya Institute Of Technology And Sciences , Rajampet , Kadapa , Andhra  Pradesh. I am the student of  Mechanical Engineering . Now I am second year B.E . In This My STUDENT MEDIA site you can upload your memories of u r collegelike Dance Videos , Images etc.., </p><hr/>
                     </div>`
};

function createTemplate (data) {
    var title= data.title;
    var heading= data.heading;
    var content= data.content;
var htmlTemplate = `<!DOCTYPE html>
<html>
    <head>
        <title>
                 ${title}
       </title>
 <link href="/ui/style.css" rel="stylesheet" />
    
    </head>
         <body>
             
              <div class="container">
                  ${content} 
              </div>
        <hr/>
    <h1 style="text-align:center;"><b>
         STUDENT MEDIA
         </b>
    </h1>
  <p>  <b>WELCOME to my first WEB APP.</b><br/> My name is sathish . I am the student of Annamacharya Institute Of Technology And Sciences , Rajampet , Kadapa , Andhra  Pradesh. I am the student of  Mechanical Engineering . Now I am second year B.E . In This My STUDENT MEDIA site you can upload your memories of u r collegelike Dance Videos , Images etc.., </p><hr/>
                     </div>
         </body>
         </html>
         ;
         return htmlTemplate;
         }





app.get('/', function (req, res) {
  res.send(createTemplate(studentmedia));
});

app.get('/studentmedia', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'studentmedia.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
