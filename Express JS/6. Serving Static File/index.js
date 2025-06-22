import express from 'express';
import path from 'path';

const app = express()

app.use(express.static('./Public'))

app.get('/', (req, res)=>{
    res.sendFile(path.join(process.cwd(), './Public/index.html'))
})

app.listen(8000, () => {
    console.log('Server is running on port 8000');
})
