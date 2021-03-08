const express = require('express');
const https = require('https');
const app = express();

// https.get('https://api.kanye.rest', function (responds){
//     console.log('works');
// });

app.get('/drizzy', function(req, res){
    var id = Math.random() * 28
    https.get('https://api.kanye.rest', function(response){
        console.log(response.statusCode);
        res.send('hello');
    });

});

app.listen(3000, function() {
    console.log('server up');
});
