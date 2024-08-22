const express = require('express');
const app = express();
console.log(express);

// Define a GET route for the root URL
app.get('/', (req, res) => {
    // Send a response with the text "Hello, World!"
    res.send("WHAT U TELLING ME")
});
app.post("/data",(req, res))

// Start the server on port 3000

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

