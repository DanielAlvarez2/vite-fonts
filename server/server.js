import express from 'express'
const app = express()
const PORT = process.env.PORT || 1243
app.listen(PORT, ()=> console.log(`Server running: ${PORT}`))
app.use(express.static('../dist'))
app.get('/',(req,res)=>res.sendFile('index.html'))