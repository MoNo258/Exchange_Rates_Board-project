const express = require('express');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();

// //the __dirname is the current directory from where the script is running
app.use(express.static(path.join(__dirname, 'build')));
// //app.use(express.static('build'));

// //send the user to index html page inspite of the url
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
// //or:
// -app.get('/', function (req, res) {
//     +app.get('/*', function (req, res) {
//         res.sendFile(path.join(__dirname, 'build', 'index.html'));
//     });

app.listen(port, () => console.log("Listening on Port", port));
