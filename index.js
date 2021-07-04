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
  
    connection.query(`
      INSERT INTO \`usuarios\` (\`email\`, \`name\`, \`service\`) 
      VALUES ('${body.email}', '${body.name}', '${body.service}');
    `, 
      (error, result) => {
        if (error) {
          console.error(error);
          return res.json({ message: 'No pudimos crear un usuario'});
        }
        return res.json({ message: 'El usuario a sido creado con exito' });
      }
    );
  });


app.listen(PORT,()=>{
    console.log("server running on port", PORT)
})