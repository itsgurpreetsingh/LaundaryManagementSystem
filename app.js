import 'dotenv/config'
import express from "express"
import bodyParser from "body-parser"
import { getDate, getTime } from "./public/getDateTime.js";


import { addData } from './cockroachDB/addData.js';
import { checkLogin } from './cockroachDB/checkLogin.js';
import { displayTable } from './cockroachDB/displayUserData.js';
import { addOrderData } from './cockroachDB/addOrders.js';
import { getOrders } from './cockroachDB/getOrders.js';




const porders = [{
    
    date : '13-Jun-2022',
    time : '06:08 p.m.',
    numItems : 4,
    Bedsheet : 2,
    Jean : 3,
    Tshirt : 2,
    shirt : 1
},{
    
    date : '13-Jun-2022',
    time : '06:08 p.m.',
    numItems : 4,
    Bedsheet : 2,
    Jean : 3,
    Tshirt : 2,
    shirt : 1
}]

export const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));
app.set('view engine','ejs');

app.get("/signIn",(req,res)=>{
   // displayTable();
    res.render('pages-sign-in');
})

app.post("/signIn",checkLogin,getOrders,(req,res)=>{
    
    console.log(req.allowUser);
    if(req.allowUser == true)
    {
        console.log(req.orders);
        res.render('index',{orders : req.orders});
    }
    else{
        res.redirect('/signIn')
    }
    
})
app.get("/newUser",(req,res)=>{
    
    res.render('pages-sign-up');
})
app.post("/newUser",async (req,res)=>{
    console.log(req.body.name , req.body.rnum , req.body.pnum , req.body.password)
   await  addData(req.body.name,req.body.rnum,req.body.pnum,req.body.password)
    res.redirect('/');
})
app.get("/",(req,res)=>{
    console.log('/ route');
    res.render('index',{orders :porders})
    
})

app.post("/postOrders",(req,res)=>{
    const data = 
    {
    userID : req.body.userID,
    date : getDate(),
    time : getTime(),
    Bedsheet :  req.body.menshnum,
    Jean :req.body.menjenum,
    Tshirt :req.body.mentsnum,
    shirt :req.body.menshtnum
    }

    console.log(data);
    addOrderData(data.userID,data.date,data.time,data.Jean,data.shirt,data.Tshirt,data.Bedsheet);

    
    res.render('postOrders');
    
})
app.get("/orders",(req,res)=>{
    res.render('postOrders');
    
})

app.listen(process.env.PORT || 8000,()=>{
    console.log("started at 8000");
})

