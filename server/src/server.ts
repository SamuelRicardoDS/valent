import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());


app.get('/', (req: express.Request, res: express.Response) => {
    res.json({message: 'Hello World!!'});
})
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})