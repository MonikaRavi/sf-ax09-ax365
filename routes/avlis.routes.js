const { getSalesOrder } = require('../MSSQL/AX365/query');

module.exports = (app)=>{

 // get recent 5 Sales Orders By Customers

 app.get('/avlisSales/:customer', (req, res) => {


    getSalesOrder(req.params.customer).then(
  
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