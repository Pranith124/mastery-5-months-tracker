import type { Request, Response } from "express";
import { PrismaClient } from "../generated/prisma/client.js";



const prisma=new PrismaClient();

export async function getVendingMachines(req : Request, res : Response){
    try{
        const avvailable_wending_machines = await prisma.vending_Machine.findMany();
        return res.status(200).json({data:avvailable_wending_machines});
    }
    catch(error){
        return res.status(500).json({"message":"Internal server error",error:error});
    }
}



export async function GetSlotItems(req : Request, res : Response){
    try{
        const vend_id=req.params.id as string;

        const slots=await prisma.slot.findMany({
            where:{
                machine_id:vend_id
            },
            include:{
                Item:true
            }
        })

        return res.status(200).json({data:slots});

    }
    catch(error){
        return res.status(500).json({message:"Internal server Error",
            "error":error});
    }
}   

export async function getItemDetails(req:Request,res: Response){
    try{
        const Item_id=req.params.id as string;
        const details = await prisma.item.findUnique({
            where:{
                id:Item_id
            }
        })

        return res.status(200).json({
            data:details
        })
    }
    catch(error){
        return res.status(500).json({
            message:"Internal server Error",
            error:error
        })
    }
}


export async function makePayment(req:Request , res:Response) {
    
}


export async function getBillDetails(req:Request , res:Response){
    
    
}