import express from 'express';
import mongoose from 'mongoose';
import Cards from './dbCards.js'

//App Config
const app = express();
const port = process.env.PORT || 5000;
const connectionString = 'mongodb+srv://admin:80vadWdhgAWmlSG5@cluster0.xd9zx.mongodb.net/tinder-db?retryWrites=true&w=majority'

//Middleware

//DB Config
mongoose.connect(connectionString)

// API endpoints 
app.get("/", (req, res)=>{
    res.status(200).send("Hi folks!");
})

app.post("/tinder/cards", (req,res)=>{
        const dbCard = req.body;

        Cards.create(dbCard, (err, data) =>{
            if(error) {
                res.status(500).send(err)
            } else {
                res.status(201).send(data)
            }
        })

})

app.get('/tinder/cards', (req,res)=>{

    Cards.find((err, data) =>{
        if(error) {
            res.status(500).send(err)
        } else {
            res.status(200).send(data)
        }
    })

})

//Listener
app.listen(port, ()=>
console.log(`listening on local host ${port}`));
