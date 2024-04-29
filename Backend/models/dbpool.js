const mysql = require('mysql2')


const pool = mysql.createPool(
    {connectionLimit:10,
        host:"localhost",password:"46834AJ",
        user:"root",
        database:"beauty_experts"
    })

function getConnection(){
    return new Promise((resolve,reject)=>{
pool.getConnection((err,connection)=>{
    if(err)
    {reject(err)}
    else
    {
        resolve(connection)
    }
})


    })
}




function runQueryValues(conn,sqlQuery,values){
   return new Promise((resolve,reject)=>{
conn.query(sqlQuery,values,(err,result)=>{
    if(err){
        reject(err)

    }
    else{
        resolve(result)
    }
})
   })
}


