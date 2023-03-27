import expressSession from 'express-session';


export const blogSession = expressSession({

    secret:"secret_session",
    name:"blog_session",
    cookie:{
        maxAge:5*60*60*1000//5hrs in miliseconds
    },
    saveUninitialized:true,
    resave:true
})