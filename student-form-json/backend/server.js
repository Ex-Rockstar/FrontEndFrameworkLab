// Bringing in the cool kids 🎓
// Express helps us build APIs without losing our minds
const express = require('express');

// CORS: Because browsers are dramatic about cross-origin stuff 🛑🎭
const cors = require('cors');

// fs = File System. Our gateway to reading and writing files like it's 1995 🗃️
const fs = require('fs');

const app = express(); // Creating our majestic Express app 🌟
const PORT = 5000; // Our app shall reign on port 5000 🎙️

// Middlewares: The gatekeepers of incoming data 🔐
app.use(cors()); // Allows our frontend (likely running on a different port) to talk to us
app.use(express.json()); // Parses incoming JSON payloads so we don't have to decode them like cavemen

// When the frontend sends a POST request to /save, we catch it like a pro 🥷
app.post('/save', (req, res) => {
    const userData = req.body; // Grab the juicy data the client sent 🍊

    // Let's write this data to a file named 'user_data.json' because persistence is cool 📂
    fs.writeFile('user_data.json', JSON.stringify(userData, null, 2), (err) => {
        if (err) {
            // Uh oh... file writing said "nope" 😵
            console.log('❌ Error saving file:', err);
            return res.status(500).send("Error saving data"); // Let the frontend know we failed, gently
        }
        // All is well in the kingdom! 🏰
        res.send('✅ Data Saved');
    });
});

// Cranking up the server like a DJ on Friday night 🎧
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});
