require("dotenv").config()
const cors = require("cors")
const express = require("express")
const bodyparser = require("body-parser")
const mailgun = require("mailgun-js")

const app = express()
app.use(bodyparser.json())
app.use(cors())
const DOMAIN = process.env.MAILGUN_DOMAIN;
const mg = mailgun({
    apiKey:process.env.MAILGUN_API_KEY,
    domain:DOMAIN,
}
);
app.post('/send-email', (req,res)=>{
    const {name,email,message} = req.body;
    
    const data = {
        from:`${name}  <postmaster@${DOMAIN}>`,
        to:"sabikkp2004@gmail.com",
        subject:`Portfolio Message From YOur site`,
        text:`${message} \n Pleasse contact us thorugh this ${email}`,
    }
    mg.messages().send(data, (error, body) =>{
        if (error){
            console.error(error);
            return res.status(500).json({error:error.message})
        }
        console.log(body);
        res.json({success:true,message:"Email sent successufully"})
    });
});
const PORT = process.env.PORT
app.listen(PORT, () => console.log(`server is running on ${PORT}`))
