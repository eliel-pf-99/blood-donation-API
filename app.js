import express from 'express';
import cors from 'cors';
import { saveQuiz, saveTime, getTimes } from './repository.js';

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hello World!");
})

app.post('/quiz', (req, res) => {
    saveQuiz(req.body['score'])
    res.send({"message": "OK"});
})

app.post('/times', (req, res) => {
    saveTime(req.body['ip'])
    res.send({"message": "OK"});
})

app.get('/times', async (req, res) => {
    let times = await getTimes();
    res.send(times);
})


app.listen(port, () => console.log(`App running on port ${port}`))