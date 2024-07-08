require('dotenv').config()
// async error

const express = require('express')
const app = express()

const notFoundMiddleware = require('./middleware/not-found')
const errorMiddleware = require('./middleware/error-handler')

// middleware
app.use(express.json())

// routes
app.get('/', (req, res) => {
    res.send('<h1>Store</h1>')
})

// products route
app.use(notFoundMiddleware)
app.use(errorMiddleware)

const port = process.env.PORT || 3000

const start = async () => {
    try {
        // connect DB
        app.listen(port, console.log(`Server is listening on port ${port}`))
    } catch (error) {}
}

start().then(r => r)