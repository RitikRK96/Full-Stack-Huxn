import express from "express"
import {join} from "path"
import routes from './routes/route.js'
import bodyParser from "body-parser"

const app = express()
app.set('view engine', 'ejs')
app.use('/',routes)
app.use(bodyParser.json());
app.post("/post", (req, res)=>{
    const {name, age, email} = req.body;
    res.send(`<h1>Your name is ${name} and your age is ${age} and your email is ${email}</h1>`)
})

app.listen(8000, () => {
    console.log('Server is running on port 8000');
})