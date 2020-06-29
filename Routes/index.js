const express=require('express');
const sgMail = require('@sendgrid/mail');

const route=express.Router();
require('dotenv').config()
const nodemailer=require('nodemailer')












module.exports=function(){
    
    


    route.post('/gmail',(req,res)=>
    {
        // obtener los valores enviados 
        console.log(req.body);
       

        const {asunto,email,consulta}=req.body

        
        
        


        // Step 1
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL || 'abc@gmail.com', // TODO: your gmail account
        pass: process.env.PASSWORD || '1234' // TODO: your gmail password
    }
});

// Step 2
let mailOptions = {
    from:process.env.EMAIL , // TODO: email sender
    to: process.env.EMAIL, // TODO: email receiver
    subject: `${asunto}`,
   text: `${consulta}`
    //subject:"ESTE ES EL ERROR",
    //text: 'SERA ESTE EL ERROR?'


};

// Step 3
transporter.sendMail(mailOptions, (err, data) => {
    if (err) {

        console.log(err);
        
        return err('Error occurs ');
    }else{
        res.send("correo enviado")
    }

    })

    })
    
    return route;
}
