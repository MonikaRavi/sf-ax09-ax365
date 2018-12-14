const { executeQuery } = require('./access');

var moment = require('moment');

async function getSalesOrder(customer) {

    //get last 5 sales orders


    const query = `select top 5 SalesID, createdDate,Amount, CustAccount, Customer from SalesSummary_Avlis where CustAccount='${customer}' order by createdDate desc`

    try {

        let dataSet = [];

        const result = await executeQuery(query);

        result.forEach(element => {

            let date = moment(element.createdDate).format("MM-DD-YYYY");

            dataSet.push({
                SalesID: element.SalesID,
                createdDate: date,
                Amount: element.Amount
            })

        });


        const customer = {
            
            CustAccount: result[0].CustAccount,
            Customer: result[0].Customer

        }

        return {
            customer: customer,
            data: dataSet
        };



    } catch (err) {


        return err;

    }


}

module.exports = {

    getSalesOrder
};