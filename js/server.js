const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;
const textBody = require('./utils/emailTemplate');
const qs = require('qs');

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.post('/sendmail', async(req, res) => {
    try{
        const response = await axios.post('http://127.0.0.1:8000/email/',({
            subject: 'Confirmação de Reserva CIPT',
            message: 'Olá, sua reserva foi confirmada com sucesso!',
            to_email:'alexandregustavo00@gmail.com',
        }),{
            headers:{
                'Content-Type': 'application/x-www-form-urlencoded',
            }
        });
        res.send(response.data);
    }catch(error){
        console.error(error);
    }
});

app.listen(port,() => {
    console.log(`Server running at http://localhost:${port}`);
})