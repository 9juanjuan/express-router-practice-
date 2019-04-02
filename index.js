const express = require('express');
const app = express();
const PORT = 3000;

const bookRouter = require('./routers/books')

app.use('/books', bookRouter)

app.listen(PORT, () => {
    console.log(`running on ${PORT}`)
})