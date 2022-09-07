const Express = require('express');
require('dotenv').config()
const cors =require('cors')

const app = Express()
const Port = process.env.PORT || 5000 

app.use(Express.json())
app.use(cors())

app.post('/email', (req, res) => {
    res.send(req.body).end()
});
app.listen(Port,( ) => console.info(`server is running on port ${Port}`))