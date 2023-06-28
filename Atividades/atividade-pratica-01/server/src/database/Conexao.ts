import mysql from "mysql"

const conexao = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"ecommerce"
})

conexao.connect((erro)=>{
    if(erro){
        console.log("Erro na conexao com o banco de dados")
    }else{
        console.log(`conectado ao banco de dados`)
    }
})

export default conexao