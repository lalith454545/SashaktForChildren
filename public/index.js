let express = require('express');
let app = express();

app.get('/', function (req, res) {
res.send("Welcome to Express Routing!!");
});


app.get('/test', function (req, res) {
    res.send(" Reached test route");
});

app.get('/gethouse', function (req, res) {
    res.send("Reached gethouse route");
});

app.post('/login', function (req, res) {
    res.send("Reached login ,post");
});

app.post('/signup', function (req, res) {
    res.send("Reached signup route,post");
});
    
app.listen(5000);