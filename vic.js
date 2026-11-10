const express=require("express");
const app=express();
const PORT=3000;

const axios=require("axios");

app.get('/',(req,res)=>
{
    res.send("Dobrodošli na API e,za čak noris viceve upišite localhost:3000/chuck");
});

app.get('/chuck',async(req,res)=>
{
    try{
        const odgovor=await axios.get("https://api.chucknorris.io/jokes/random");
        res.json({sala:odgovor.data.value});
    }
    catch(error){
        res.status(500).json({error:"Dogodila se greška"});
    }
});

app.listen(PORT, ()=>
{
    console.log(`Sserver radi na portu ${PORT}`);
})