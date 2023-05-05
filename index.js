const express = require('express')
const model = require('./models')
const server = express()
const PORT = 3000

server.get('/', (req, res) => res.send('Hello World!'))
server.listen(PORT, () => console.log(`Server is connected on ${PORT}`))
model.sequelize.sync({ force: false }).then(() => {
    console.log("model has been re sync")
})