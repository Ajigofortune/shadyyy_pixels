// server.js
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// ROUTES
app.get('/', (req, res) => res.render('index'));
app.get('/signup', (req, res) => res.render('signup'));
app.get('/login', (req, res) => res.render('login'));
app.get('/booking', (req, res) => res.render('booking'));
app.get('/payment', (req, res) => res.render('payment'));
app.get('/previews', (req, res) => res.render('previews'));

// FORM SUBMISSIONS (demo only)
app.post('/signup', (req, res) => {
    console.log(req.body);
    res.send('Signup successful! (Demo)');
});

app.post('/login', (req, res) => {
    console.log(req.body);
    res.send('Login successful! (Demo)');
});

app.post('/booking', (req, res) => {
    console.log(req.body);
    res.send('Booking submitted! (Demo)');
});

app.post('/payment', (req, res) => {
    console.log(req.body);
    res.send('Payment processed! (Demo)');
});

// Server start
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Shadyyy Pixels running on port ${PORT}`));