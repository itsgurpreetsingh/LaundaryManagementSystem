import mysql from 'mysql'

export var connection = mysql.createConnection({
  host     : 'mysql-78054-0.cloudclusters.net',
  user     : 'admin',
  password :  process.env.DBPAS,  
  port     :  '19882'
});
 
connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
 
  console.log('connected as id ' + connection.threadId);
});


