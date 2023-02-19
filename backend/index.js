const express = require('express')
const MongoConnect=require("./DbConnect/dbconnect")
const cors=require("cors")


const { hotel } = require('./HotelsData')
const { user } = require('./LoginAndSignup')


const app = express()

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())
// Import Router here --------------
app.use("/user",user)
app.use("/hotel",hotel)

app.get('/', (req, res) => res.send('Assinment for reunion'))



app.listen(8000,async () => {
    await MongoConnect()
    console.log('server started on port 8080')

})