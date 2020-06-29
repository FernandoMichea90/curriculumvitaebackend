const express=require('express')
const route=require('./Routes/index')
const cors=require('cors')
const bodyParser=require('body-parser')
const app=express();
require('dotenv').config({path:'variables.env'})

const whitelist=[process.env.FRONTEND_URL]

const corsOption={
origin:(origin,callBack)=>
{
    const existe =whitelist.some(dominio=>dominio===origin);
    if(existe)
    {

        callBack(null,true)
    }else{

        callBack(new Error('no permitido por los suoer cors'));
        
    }
}
}
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors(corsOption))
app.use('/',route())


const host =process.env.HOST || '0.0.0.0'
const port =process.env.PORT || 5000
app.listen(port,host,()=>
{

    console.log(process.env.DB_URL);
    console.log(process.env.FRONTEND_URL);



    

})