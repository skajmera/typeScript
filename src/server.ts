import express, { Application, Request, Response } from "express";
const app:Application=express();
const port:number=3001

app.get('/test',(req:Request,res:Response)=>{

    return res.status(200).json({messge:req.body})
})

app.listen(port,()=>console.log(`server is running on port ${port}`))











// const book:string="PHP"
// const age:number=35
// const isDone:boolean=true
// const books:Array<string>=["subhash","ajmera"]
//                 // or 
// // const books:string[]=["subhash","ajmera"]
// interface Member{
//     name:string;
//     age:number;
//     isActive:boolean 
//     location?:string
// }

// const person1:Member={
//     name:"khan",
//     age:35,
//     isActive:true,
//     location:"pk"
// }

// console.log(book);
// console.log(person1);
