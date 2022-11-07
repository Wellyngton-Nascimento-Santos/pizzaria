
const express = require('express');


const servidor =express();



servidor.get('/usuarios', (req,res)=>{
    console.log("Chegou um requisição!");
    //return res.send("Vou te mandar uma lista de usuarios!");
    return res.sendFile(__dirname + "/views/index.html");
});




servidor.listen(3000);