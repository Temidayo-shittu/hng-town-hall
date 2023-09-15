require('dotenv').config()
require('express-async-errors')
//express
const express = require('express')
const app = express()
//database
const connectDB = require('./db/connect')

app.use(express.json());

app.get('/',(req,res)=>{
    const name = "Temidayo Shittu";
    const email = "shittutemidayo16@gmail.com";
    const phone = "08180170660";
    const slack_name = "Temidee";
    const track = "Backend";
    const github_repo_url = "https://github.com/Temidayo-shittu/hng-town-hall";
    const status_code = "200";
    res.json({
        message:'PERSONAL RESOURCE SYSTEM RUNNING',
        data: {
            name,
            email,
            phone,
            slack_name,
            track,
            github_repo_url,
            status_code
        }
    })
})


const port= process.env.PORT || 5000

const start= async()=>{
    try {
        await connectDB(process.env.MONGO_URL)
        app.listen(port, console.log(`Listening on port ${port}`))
    } catch (error) {
        console.log(error)
    }
}
start()
