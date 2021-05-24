var express = require('express');
var path = require('path');
var history = require('connect-history-api-fallback');

var app = express();

app.use(history());

app.use(express.static(path.join(__dirname, 'dist')));
// app.use(express.static('public'));


app.listen(3713, function () {
    console.log('Example app listening on port 3713!');
});


// // 利用express.static中间件来托管静态资源。
// app.use(express.static(path.join(__dirname, 'public')));

// app.listen(8888, () => {
//     console.log('start: 8888')
// })

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public/index.html'))
// })

// app.get('*.css', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public/style.css'))
// })