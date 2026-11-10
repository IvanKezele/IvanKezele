const express=require("express");
const app=express();
const PORT=3000;

function provjeri(req){
    const broj1=Number(req.query.a);
    const broj2=Number(req.query.b);

    if (Number.isNaN(broj1) || Number.isNaN(broj2)){
        return {error:"Parametri nisu brojevi"}
    }
    else{
        return {broj1, broj2};
    }
}

app.get('/zbroji',(req,res)=>
{
    const validacija=provjeri(req);
    if (validacija.error){
        res.json({greska:"DDogodila se greška"});
    }
    else{
        let rezultat=validacija.broj1+validacija.broj2;
        res.json({zbroj:rezultat});
    }
});

app.get('/oduzmi',(req,res)=>
{
    const validacija=provjeri(req);
    if (validacija.error){
        res.json({greska:"DDogodila se greška"});
    }
    else{
        let rezultat=validacija.broj1-validacija.broj2;
        res.json({razlika:rezultat});
    }
});

app.get('/pomnozi',(req,res)=>
{
    const validacija=provjeri(req);
    if (validacija.error){
        res.json({greska:"DDogodila se greška"});
    }
    else{
        let rezultat=validacija.broj1*validacija.broj2;
        res.json({umnozak:rezultat});
    }
});

app.get('/podjeli',(req,res)=>
{
    const validacija=provjeri(req);
    if (validacija.error){
        res.json({greska:"DDogodila se greška"});
    }
    else{
        let rezultat=validacija.broj1/validacija.broj2;
        res.json({djelidba:rezultat});
    }
});

app.listen(PORT, ()=>
{
    console.log(`SServer radi na portu ${PORT}`);
})