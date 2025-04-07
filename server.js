const express = require('express');
const app = express();

app.use(express.json());

app.get('/username',(req,res)=>{
    try {
        return res.status(200).send({message:'Enter your usename'})
    } catch (error) {
        return res.status(404).send({message:'username cannot be empty'})
    }
})

app.get('/email',(req,res)=>{
    try {
        return res.status(200).send({message:'Enter your email'})
    } catch (error) {
        return res.status(404).send({message:'Email cannot be empty'})
    }
})

app.get('/password',(req,res)=>{
    try {
        return res.status(200).send({message:'Enter your password'})
    } catch (error) {
        return res.status(404).send({message:'password length should be greater than 8 or less than or equal to 16'})
    }
})

app.listen(3000,()=>{
    console.log("server is running on port 3000")
})

