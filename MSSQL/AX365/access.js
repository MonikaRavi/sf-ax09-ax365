var sql = require('mssql');


const connectionConfig = require('../AX365/config.json');

function executeQuery(query) {

    return new Promise(

        (resolve, reject) => {

           // console.log(query);

            sql.connect(connectionConfig, function () {

                var request = new sql.Request();

                request.query(query, function (err, recordset) {

                    if (err) {

                        reject(err);

                    } else {

                      
                        resolve(recordset.recordset);

                        sql.close();
                    }

                });

            });



        });

}


module.exports = {

    executeQuery
};