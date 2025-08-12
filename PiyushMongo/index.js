const express = require('express')
const mongoose = require('mongoose')

const app = express()
const port = 8000
mongoose
    .connect('mongodb://127.0.0.1:27017/RitikDB')
    .then(()=>{console.log('Connected to DB')})
    .catch(()=>{console.log('Not Connected to DB')})


const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String },
    email: { type: String, required: true, unique: true },
    jobTitle:{ type: String }
})

const user = mongoose.model('user',userSchema)

app.use(express.urlencoded({ extended: true }))



app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
