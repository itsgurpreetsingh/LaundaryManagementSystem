import { connection } from "./dbconfig.js";


  

  export async function addData(na,r,p,pas) {
    
    const insertStatement =
      `INSERT INTO users VALUES ('${na}', ${r}, ${p},'${pas}');`;
    const initdbStatement = "USE LMS;";

      await connection.query(initdbStatement,(error,results,fields)=>{
          // console.log(error);
          // console.log(results);
        //  console.log(fields);
          console.log('/////////////////');
      })

      await connection.query(insertStatement,(error,results,fields)=>{
        // console.log(error);
        // console.log(results);
      //  console.log(fields);
        console.log('//////////////////////');
    })
  
    const selectUsers = "SELECT name,roll_num,phone_number,password from users;";
    await connection.query(selectUsers,(error,results,fields)=>{
      // console.log(error);
      // console.log(results);
      //console.log(fields);
  })
  }
  
  //insertTable('Kunal',200,9878,'abc')



  