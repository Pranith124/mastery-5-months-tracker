import express, { type Request, type Response } from 'express';

import "dotenv/config";
import { PrismaClient } from './generated/prisma/client.js'

console.log(process.env.DATABASE_URL);
const app = new express();
const prisma = new PrismaClient();

app.use(express.json());

async function main(){
    const createCategory = await prisma.category.create({
        data:{
            name:"Chocolates"
        }
    })
    console.log(createCategory);
}

main();


app.get("/",function(req :Request,res : Response){
    return res.send({
        
    });
})


app.listen(3000);