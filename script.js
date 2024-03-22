const express = require('express');
const app = express();
const port = 3000;

// Serve static files (HTML, CSS, JavaScript)
app.use(express.static('public'));

// Define routes
app.get('/', (req, res) => {
    // Serve the homepage
    res.sendFile(__dirname + '/public/index.html');
});

app.get('/destinations', (req, res) => {
    // Serve the destinations page
    res.sendFile(__dirname + '/public/destinations.html');
});

app.get('/about', (req, res) => {
    // Serve the about page
    res.sendFile(__dirname + '/public/about.html');
});

app.get('/contact', (req, res) => {
    // Serve the contact page
    res.sendFile(__dirname + '/public/contact.html');
});

// Start the server
app.listen(port, () => {
    console.log(Server is running on http://localhost:${port});
});