const express = require('express');
const PORT = 3000;
const app = express();
const path = require('path');
const mysql = require('mysql2');
//coneccion con base de datos
const mysqlConfig = require('./config/config');

const connection = mysql.createConnection(mysqlConfig)

app.use(express.static(path.join(__dirname, "public")))
app.use(express.json())



app.post('/users', (req, res) => {
    const body = req.body;
  if(body.service == "Music")
    connection.query(`
      INSERT INTO \`music\` (\`email\`, \`name\` ) 
      VALUES ('${body.email}', '${body.name}');
    `, 
      (error, result) => {
        if (error) {
          console.log(error);
        };
      }
    )
    if(body.service == "Video")
    connection.query(`
      INSERT INTO \`video\` (\`email\`, \`name\` ) 
      VALUES ('${body.email}', '${body.name}');
    `, 
      (error, res) => {
        if (error) {
         console.log(error)};
      }
    );
  });


app.listen(PORT,()=>{
    console.log("server running on port", PORT)
})