import express, { request, type Request, type Response } from 'express';

import "dotenv/config";
import { PrismaClient } from './generated/prisma/client.js'
import { getBillDetails, getItemDetails, GetSlotItems, getVendingMachines, makePayment } from './routes/user-routes.js';
import { Add_Item, Dashboard, getPaymentHistory, remove_Item, signIn, signUp, update_Item } from './routes/owner-routes.js';


console.log(process.env.DATABASE_URL);
const app = new express();
const prisma = new PrismaClient();

app.use(express.json());


//user home page
app.get("/User/Home",getVendingMachines);
//user Home page vending machine details
app.get("/User/Home/:id",GetSlotItems);
//user Home page Item details
app.get("/User/Item/:id",getItemDetails);
//user made payment
app.post("/User/card/payment",makePayment);
//user bill statement
app.get("/User/bill",getBillDetails);


//Owner routes

//Owner signin
app.post("/Owner/signin",signIn);
//Owner signup
app.post("/Owner/signup",signUp);
// Owner check the vending machine status
app.get("/Owner/vending-machine/:id/dashboard",Dashboard);
// Owner added the item item
app.post("/Owner/vending-machine/:id/add-item",Add_Item);
// Owner update the exsisting item.
app.put("/Owner/vending-machine/:id/Update-item/:item_id",update_Item);
// Owner removes the item
app.delete("/Owner/vending-machine/:id/remove-item/:item_id",remove_Item);
//Owner checking the payment history
app.get("/Owner/vending-machine/:id/payment-history",getPaymentHistory);


app.listen(3000);