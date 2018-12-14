const { getSalesOrderSparks } = require('../../MSSQL/AX2009/query');

var sfQuery = require('../../Salesforce/Query/opportunity');

const { getSalesOrder } = require('../../MSSQL/AX365/query');




class dashboard {


constructor(){

this.dataset = [];

}

async getDataset(customerNo){


let sparksData = await getSalesOrderSparks(customerNo);

let avlisData = await getSalesOrder('C000622');

let sfData = await sfQuery.querySoql(customerNo);


return {

    salesforce : sfData,

    AX365 : avlisData,

    AX2009 : sparksData

};


}



}


module.exports = {

    dashboard
};