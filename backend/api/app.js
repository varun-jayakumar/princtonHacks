import cors from 'cors';
 import routes from './routes/index.js'
// import model from './models/index.js'
import mongoose from 'mongoose';
import express from 'express';
// import notification from './utils/sendNotification.js';

import callOpenAiApi from './utils/chatgptapicall copy.js';
// intializing express app
const app = express();



app.use(express.json());
app.use(express.urlencoded());
app.use(cors());
console.log("in app")

// app.post("/roadmap", async (req, res) => {

//     return callOpenAiApi(req,res);
    
    
//     });
// adding the routes
routes(app);
// notification();
//connecting db
mongoose.connect('mongodb+srv://jayakumarva:xKw9I5gZ4LG3cGQd@cluster0.zqpinsh.mongodb.net/princtonhacksDB?retryWrites=true&w=majority').then(()=>{
});

export default app;