
const express= require("express");

const app = new express();

app.use(express.json());

app.post("/sum/",function(req,res){
    const a=parseInt(req.body.a);
    const b=parseInt(req.body.b);

    const sum=a+b;

    return res.json({
        sum:sum
    })
});

app.get("/",function(req,res){
    res.sendFile("C:/5 Months/May/Practise/May-23th/calculator-html-server/index.html");
})
app.get("/mul");
app.get("/sub");
app.get("/div");


app.listen(3000);


// how many http servers are there? is express a http server?


