import express from 'express';
import cors from 'cors';
import fs from 'node:fs/promises';


const PORT = 3008

const app = express()

app.use(cors())

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

    next();
})

app.get('/expenses', async (req, res) => {
    try {
        const fileContent = await fs.readFile('./data/expenses.json');
        const expensesData = JSON.parse(fileContent);
        res.status(200).json({expenses: expensesData});
    } catch (error) {
        console.error(error);
        res.status(500).json({error: 'Failed to read expenses data'});
    }
});


app.listen(PORT, () => {
    console.log('Backend server connected to http://localhost:3008/')
})

