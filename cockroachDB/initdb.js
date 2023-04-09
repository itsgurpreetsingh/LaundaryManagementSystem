

import { connection } from "./dbconfig.js";


  

  export async function addData() {
    
    const initStatement = "CREATE TABLE orders (roll_num int(20) ,date varchar(20),time varchar(20), jean int(20) , shirt int(20) , tshirt int(20) , bedsheet int(20));";
  
    const initdbStatement = "USE LMS;";

      connection.query(initdbStatement,(error,results,fields)=>{
          //console.log(error);
          //console.log(results);
        //  //console.log(fields);
          //console.log('/////////////////');
      })

     connection.query(initStatement,(error,results,fields)=>{
        //console.log(error);
        //console.log(results);
      //  //console.log(fields);
        //console.log('//////////////////////');
    })
  
 
  
  }
//   addData();