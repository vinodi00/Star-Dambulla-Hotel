const express = require("express");

const app = express();

const db = require('./db')
const roomsRoute = require('./routes/roomRoute') 
const usersRoute = require('./routes/userRoute')
const contactRoute = require('./routes/contactRoute')
const bookingRoute = require('./routes/bookingRoute')
const paymentRoute = require('./routes/paymentRoute');
app.post('/api/chatbot', (req, res) => {
    const userMessage = req.body.message;
  
    // Simple echo response
    const botResponse = `You said: ${userMessage}`;
  
    res.json({ message: botResponse });
  });
app.use(express.json())
app.use('/api/rooms' , roomsRoute)
app.use('/api/users' , usersRoute)
app.use('/api/contact' , contactRoute)
app.use('/api/booking', bookingRoute)
app.use('/api/payment', paymentRoute);
const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`Server is up and running on port number: ${port}`));
