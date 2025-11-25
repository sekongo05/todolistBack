const express= require('express')
const cors= require('cors')
require('dotenv').config()
const Port= process.env.PORT || 3000

const app= express()

app.use(cors())
app.use(express.json())


const mesRoutes= require('./routes/routeTodo')

app.get('/', (req,res)=>{
    res.send('route montée avec succès')
})


app.use('/taches', mesRoutes)

app.listen(Port, ()=>{
    console.log(`le server demarre sur le port ${Port}`)
})