

import { connection } from "./dbconfig.js";






  export function checkLogin(req,res,next) {
    
    //console.log('at check login');
    
    const initdbStatement = "USE LMS;";
    let r = req.body.username;
    let pas = req.body.password;
    connection.query(initdbStatement,(error,results,fields)=>{
        //console.log(error);
        //console.log(results);
        
        //console.log('/////////////////');
    })
    const selectUsers = `SELECT * from users WHERE roll_num = ${r} and password = '${pas}'`;
   connection.query(selectUsers,(error,results,fields)=>{
      //console.log(error);
      //console.log(results);
      
      ////console.log(results[0].name);
      if(results.length > 0 )
      {
        req.allowUser = true;
        req.roll_num = results[0].roll_num;
      }
      else{
        req.allowUser =false;
      }
      next();

      //console.log('//////////////////////');

  })
 
  
  }

  

  //checkLogin(200,'abc')



  