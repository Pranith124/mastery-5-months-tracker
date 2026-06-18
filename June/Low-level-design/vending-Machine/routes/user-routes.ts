import type { Request, Response } from "express";
import { PrismaClient } from "../generated/prisma/client.js";



const prisma=new PrismaClient();

export async function Homepage(req : Request, res : Response){
    try{
        const avvailable_wending_machines = await prisma.vending_Machine.findMany();
        return res.status(200).json({data:avvailable_wending_machines});
    }
    catch(error){
        return res.status(500).json({"message":"Internal server error",error:error});
    }
}



