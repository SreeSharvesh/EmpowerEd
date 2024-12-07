const express = require('express');
const session = require('express-session');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Handle WebSocket connections
io.on('connection', (socket) => {
  console.log('A user connected');

  // Handle incoming messages
  socket.on('chat message', (message) => {
    // Broadcast the message to all connected clients
    io.emit('chat message', message);
  });

  // Handle disconnections
  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

const port = 5000;
const isLoggedIn = require('./middlewares/isLoggedIn');
const mongoose = require('mongoose');

mongoose.connect('', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});


app.use(express.static('public'));

app.set('views', './views');
app.set('view engine', 'ejs');

// Navigation

app.use(
    session({
      secret: 'your-secret-key', // Replace with a strong secret key
      resave: false,
      saveUninitialized: false,
    })
  );

app.get('/about', (req, res) => {
    res.render('about', { check: 'about', name: "new"});
 })
 
// app.get('/login', (req, res) => {
//     res.render('login', { check: 'login', name: "new"});
// })

app.get('/homepage', (req, res) => {
    res.render('homepage', { check: 'homepage', name: "new"});
})
 
app.get('/chat', (req, res) => {
    res.render('chat', { check: 'chat', name: "new"});
})
 
app.get('/search', (req, res) => {
    const searchValue = req.query.search; 
    const name = "new"; 
    res.render('afterSearch', { search: searchValue, name: name });
});
 
app.get('/messageList', (req, res) => {
    res.render('messageList', { check: 'messageList', name: 'new'});
});
 
app.get('/profile', (req, res) => {
    const name = req.query.name;
    res.render('profile', { check: 'profile', name: name});
});

const registrationRoutes = require('./routes/registrationRoutes'); 
app.use('/', registrationRoutes); 

const loginRoutes = require('./routes/loginRoutes');
app.use('/', loginRoutes);

const uploadRoutes = require('./routes/uploadPostRoutes');
app.use('/', isLoggedIn, uploadRoutes);

const myPostRoutes = require('./routes/myPostRoutes');
app.use('/', isLoggedIn, myPostRoutes);

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
})
