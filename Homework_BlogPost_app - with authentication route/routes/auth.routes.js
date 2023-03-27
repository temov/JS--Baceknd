import express from "express";
import fileService from "../shared-services/file-service.js";

import { authSession } from "../sessions/auth.session.js"

const authRouter = express.Router();

authRouter.post("/login",authSession,async (req,res)=>{

    const usersRaw = await fileService.readFile('./db/users.json');
    const users = JSON.parse(usersRaw);

    const username = req.body.username;
    const password = req.body.password;

    if( username === users.username && password === users.password){

        req.session.user = {

            user:username,
            isLoggedIn:true
        }
        res.send({message:'Logged in success'})
    }else{

        res.status(403).send({message:'Wrong user name and password'})
    }


})

export default authRouter;