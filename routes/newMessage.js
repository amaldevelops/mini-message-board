const {Router}=require("express");
const newMessageRouter=Router();

newMessageRouter.get("/",(req,res)=>{
    res.render("form")
});

newMessageRouter.post("/",(req,res)=>{
    // res.render("form")
    res.send("Form Submitted");
});

module.exports=newMessageRouter;