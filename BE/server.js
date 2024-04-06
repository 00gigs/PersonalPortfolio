require('dotenv').config();
const cors = require('cors');
const express = require('express')
const path = require('path');
const nodemailer = require('nodemailer');
const app = express()
const port = process.env.PORT || 3001
app.use(cors())
app.use(express.json())

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '..', '..', 'build')));

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', '..', 'build', 'index.html'));
});


const transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'1onlinegigs@gmail.com',
        pass:process.env.EMAIL_PASSWORD,
    }
})



app.post('/send-email',(req,res)=>{
    const {name,email,phone} = req.body
    const mailOptions = {
        from:'1onlinegigs@gmail.com',
        to:'jjharrington.business@gmail.com',
        subject:'Portfolio Site Lead',
        text:`name:${name},email:${email},phone:${phone}`,
    }

    transporter.sendMail(mailOptions,(error,info)=>{
        if(error){
            console.log(error)
            res.status(500).json({error:'error sending email'})
        }else{
            console.log('Email sent: ' + info.response);
      res.status(200).json({success:'Email sent '})
        }
    })
})


app.listen(port,()=>{
    console.log(`Server running at http://localhost:${port}`);
})