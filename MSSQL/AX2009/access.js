var sql = require('mssql');


const connectionConfig = require('../AX2009/config.json');

function executeQuery (query) {

    return new Promise(

        (resolve, reject) => {

            sql.connect(connectionConfig, function () {

                var request = new sql.Request();

                request.query(query, function (err, recordset) {

                    if (err) {

                        reject(err);

                    } else {

                      //  console.log(recordset.recordset);
                      
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