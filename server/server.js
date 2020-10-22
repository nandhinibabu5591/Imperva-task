const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

// console.log that your server is up and running
app.listen(port, () => console.log(`Server is up and running.`));

// create a GET route
app.get('/sample_route', (req, res) => {
    res.send({
        express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT. Looking forward to what you will make of this. Develop away!'
    });
});