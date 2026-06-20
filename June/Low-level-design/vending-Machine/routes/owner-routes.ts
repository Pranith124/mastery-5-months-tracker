import { createClient } from "@supabase/supabase-js";
import { configDotenv } from "dotenv";
import type { Request, Response } from "express";
import { da } from "zod/locales";
import { PrismaClient } from "../generated/prisma/client.js";



const prisma = new PrismaClient();
const supabase = createClient(process.env.SUPABASE_URL!,process.env.SUPABASE_KEY!);

export async function  signIn(req:Request , res:Response) {
    try{
    const email= req.body.email as string;
    const password = req.body.password as string;

    const {data,error} = await supabase.auth.signInWithPassword({
        email:"",
        password:""
    })
    }
    catch(error){
        return res.status(500).json({"message":"Internal server error",
            error:error
        })
    }
}

export async function signUp(req:Request , res:Response) {
    try{
    const email= req.body.email as string;
    const password = req.body.password as string;

    const {data,error}= await supabase.auth.signUp({
        email:"",
        password:"",
    })

    return res.status(200).json(
        {data:data    
        }
    )}
    catch(error){
        return res.status(500).json({"message":"Internal server error",
            error:error
        })
    }
}

export async function Dashboard(req:Request , res:Response) {
    const vend_id=req.params.id as string;
    const slots = await prisma.slot.findMany({
        where:{
            machine_id:vend_id,
        },
        include:{
            Item:true
        }
    })

    return res.status(200).json({
        data:slots
    })
}



export async function Add_Item(req:Request , res:Response){
    try{
    const new_Item=req.body.new_Item ;

    const data = await prisma.item.create({
        data:{
            name:new_Item.name as string,
            price:new_Item.price ,
            category_id : new_Item.category_id,
            expiry_date:new_Item.expiry_date,
            Mfc_date:new_Item.Mfc_date
        }
    })

    return res.status(200).json({
        data:data
    })
    }
    catch(error){
        return res.status(500).json({"message":"Internal server error",
            error:error
        })
    }
}

export async function update_Item(req:Request , res:Response) {
    try{
    const id = req.params.id as string;
    const item_details = req.body.fields;

    if(!id){
        return res.status(400).json({error:"Item ID is required in route parameters"})
    }

    if (item_details.expiry_date){
        item_details.expiry_date = new Date(item_details.expiry_date);
    }

    if(item_details.Mfc_date){
        item_details.Mfc_date = new Date(item_details.Mfc_date);
    }

    const updatedItem= await prisma.item.update({
        where:{
            id:id,
        },
        data:item_details
    })

    return res.status(200).json({
        message:"Items are updated succesfully",
        data:updatedItem
    })}
    catch(error){
        return res.status(500).json({
            message:"Internal server down",
            error:error
        })
    }
}


export async function remove_Item(req:Request , res:Response) {
    try{
    const id=req.params.id as string;

    if(!id){
        return res.status(400).json({error:"Item ID is required in route parameters"})
    }

    const removedItem= await prisma.item.delete({
        where:{
            id:id
        }
    })

    return res.status(200).json({message:"Item has deleted succefully",
        data:removedItem
    })}
    catch(error){
        return res.status(500).json({
            message:"IOnternal server error",
            error:error
        })
    }
}


export async function getPaymentHistory(req:Request, res:Response) {
    try{
    const transactions = await prisma.transaction.findMany()
    return res.status(200).json({
        message:"These are the transactions",
        data:transactions
    })
    }
    catch(error){
        return res.status(500).json({
            message:"Internal server error",
            error:error
        })
    }
}