const { getSalesOrderSparks } = require('../MSSQL/AX2009/query');

module.exports = (app)=>{

 // get recent 5 Sales Orders By Customers

 app.get('/sparksSales/:customer', (req, res) => {


    getSalesOrderSparks(req.params.customer).then(
  
      (data) => {

        if(data.length !== 0){

          res.send(JSON.stringify(data, undefined, 2));

        } else {

          res.status(404).send({ "err": "No Data Found" });
        }
          
        // console.log({data});
      },
      (err) => {
        res.status(400).send(err);
      }
  
    ).catch((err) => {
      res.status(400).send(err);
    })
  
  
  });


}