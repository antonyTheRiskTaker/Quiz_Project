const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

// Set up middleware and serve public server
app.use(express.static('./public'));

// Home page
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, './public/index.html'));
});

// Show error page
// '*' means whatever resource you are querying that don't exist
app.all('*', (req, res) => {
  res.status(404).send("Resource not found.");
})

app.listen(port, () => {
  console.log(`Server is listening on port ${port}.`);
});