import { da } from "zod/locales";
import { PrismaClient } from "./generated/prisma/client.js";
import type { string } from "zod";



const prisma = new PrismaClient();

async function createVendingMachine(name: string,location:string){
    try{
    const res=await prisma.vending_Machine.create({
        data:{
            name:name,
            location:location
        }    
    })
    console.log(res)
    return 

    }
    catch(error){
        console.log({message:error});
        return 
    }
}


let data=[["V1","Kormangalla"],["V2","Bellandur"],["V3","Marthali"]];

for(let [name,location] of data){
    const res=createVendingMachine(name!,location!);
}


