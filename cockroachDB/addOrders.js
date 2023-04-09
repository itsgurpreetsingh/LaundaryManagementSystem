import { getDate, getTime } from "../public/getDateTime.js";
import { connection } from "./dbconfig.js";


  

  export function addOrderData(roll_num,d,t,jean,shirt,tshirt,bedsheet) {
    
    const insertStatement =
      `INSERT INTO orders VALUES (${roll_num}, '${d}', '${t}',${jean},${shirt},${tshirt},${bedsheet});`;
    const initdbStatement = "USE LMS;";

      connection.query(initdbStatement,(error,results,fields)=>{
          //console.log(error);
          //console.log(results);
        //  //console.log(fields);
          //console.log('/////////////////');
      })

      connection.query(insertStatement,(error,results,fields)=>{
        //console.log(error);
        //console.log(results);
      //  //console.log(fields);
        //console.log('//////////////////////');
    })
  
    const selectUsers = "SELECT * from orders";
     connection.query(selectUsers,(error,results,fields)=>{
      //console.log(error);
      //console.log(results);
      ////console.log(fields);
  })
  }
  //addOrderData(102003058,getDate(),getTime(),0,1,2,0);

  




  