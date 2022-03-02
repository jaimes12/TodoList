const express = require("express");
const todosRouter=require('./routers/todos')
const cors=require('cors');


const app=express();
const PORT=4000;

app.use(cors());
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.get('/', (req,res)=>{
    res.send('hello todos')
})

app.use('/todos', todosRouter);

app.listen(PORT, ()=>{
    console.log(`server up and running on port ${PORT}`);
})