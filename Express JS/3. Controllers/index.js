import express from 'express';
import students from './routes/Student.js'
const app = express();

app.use("/students", students)


app.listen(8000, () => {
    console.log('Server is running on port 8000');
})
