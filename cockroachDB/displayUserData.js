import { connection } from "./dbconfig.js";

  export async function displayTable() {
    
    
  
    const selectUsers = "SELECT name,roll_num,phone_number,password from users;";
    
    const initdbStatement = "USE LMS;";

      await connection.query(initdbStatement,(error,results,fields)=>{
          //console.log(error);
          //console.log(results);
         // //console.log(fields);
          //console.log('/////////////////');
      })
      await connection.query(selectUsers,(error,results,fields)=>{
        //console.log(error);
        //console.log(results);
       // //console.log(fields);
        //console.log('/////////////////');
    })
  }


 
 //displayTable();



  