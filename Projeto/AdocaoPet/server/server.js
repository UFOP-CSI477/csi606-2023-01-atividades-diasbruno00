import express  from "express";
import router from "./router.js";
import cors from 'cors'
const app = express()

import  dotenv from 'dotenv'
dotenv.config()

import conexao from "./src/database/conexao.js"




const porta = 3333

app.use(express.json())
app.use(cors())


app.use(router)

app.listen(porta, ()=>{
    console.log(`http://localhost:${porta}/home`)
    console.log(`servidor rodando na porta ${porta}`)
})