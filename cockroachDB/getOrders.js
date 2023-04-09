import { connection } from "./dbconfig.js";

export function getOrders(req,res,next)
{
    //console.log('at get orders');
    //console.log(req.allowUser);
    if(req.allowUser == true)
    {
        const initdbStatement = "USE LMS;";

        connection.query(initdbStatement,(error,results,fields)=>{
            //console.log(error);
            //console.log(results);
          //  //console.log(fields);
            //console.log('/////////////////');
        })

        const selectUsers = `SELECT * from orders WHERE roll_num = ${req.roll_num}`;
        connection.query(selectUsers,(error,results,fields)=>{
         //console.log(error);
         //console.log(results);
         ////console.log(fields);
         const orderData = [];

         results.forEach(element => {
            const data =  {
                userID : element.roll_num,
                date : element.date,
                time : element.time,
                Bedsheet :  element.bedsheet,
                Jean :element.jean,
                Tshirt :element.tshirt,
                shirt :element.shirt
                } 
                console.log(data);
                orderData.push(data);
         });
            //console.log(orderData);
            req.orders = orderData;
           next();
     })
    }
}

// const test = {
//     allowedUser :true,
//     roll_num : 102003058
// }
// getOrders(test,()=>{})