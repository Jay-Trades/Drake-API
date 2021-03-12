const express = require('express');
const https = require('https');
const sqlite3 = require('sqlite3').verbose();
const app = express();

app.use(express.static('public'))


// https.get('https://api.kanye.rest', function (responds){
//     console.log('works');
// });


app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});


app.get('/api', function(req, res){
    let id = Math.floor(Math.random() * 27) + 1

    let db = new sqlite3.Database(__dirname + '/drakeQ.db', sqlite3.OPEN_READONLY, (err) => {
        if (err) {
          return console.error(err.message);
        }
        console.log('Connected to the in-memory SQlite database.');
    });

    let sql = `SELECT Id id,
                quotes quote,
                author name
                FROM Quotes
                WHERE id  = ?`;

    db.get(sql, [id], (err, row) => {
        if (err) {
            return console.error(err.message);
          }
        if (row){
            // res.write(row.quote);
            // res.write("-" + row.name);
            res.json({quote: row.quote, author: row.name})

          }else{

            res.send(`No playlist found with the id ${id}`);
          };
    });


    db.close();


    // https.get('https://api.kanye.rest', function(response){
    //     console.log(response.statusCode);
    //     response.on('data', function(data){
    //         const kanye = JSON.parse(data);
    //         console.log(kanye)
    //         res.send(kanye);
    //     });
    // });
});


app.listen(3000, function() {
    console.log('server up');
});