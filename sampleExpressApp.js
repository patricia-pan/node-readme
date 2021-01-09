
const express = require('express') // Import express.
const app = express() // Create an instance of express.

// When we navigate to http://localhost:3000/, then the thing we send when the response called 'response' sends 'This is the Home Page!'
app.get('/', (request, response) => {
    // response.send('This is the Home Page!')
    // response.sendFile takes an aboslute path
    // __dirname is a built-in node variable we can use.
    response.sendFile(__dirname+'/views/index.html') 
})

app.get('/about', (request, response) => {
    // response.send("Some stuff about me will go here.")
    response.sendFile(__dirname+'/views/about.html')
})

app.get('/blog', (request, response) => {
    // response.send("A directory of all my blog posts will go here.")
    response.sendFile(__dirname+'/views/blog-directory.html')
})

// http://localhost:3000/
app.listen(3000, () => console.log("Listening on port 3000!"))