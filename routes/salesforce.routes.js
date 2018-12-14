var sfData = require('../Salesforce/Query/accounts');
var sfQuery = require('../Salesforce/Query/opportunity');

module.exports = (app)=>{

    // get Accounts by distributor type

app.get('/data/:type', (req, res) => {


    sfData.accounts(req.params.type).then(
  
      (data) => {
  
        res.send(JSON.stringify(data, undefined, 2));
        // console.log({data});
      },
      (err) => {
        res.status(400).send(err);
      }
  
    ).catch((err) => {
      res.status(400).send(err);
    })
  
  
  });
  
  // get the opportunity by AX account no
  
  app.get('/opportunity/:account', (req, res) => {
  
  
    sfQuery.querySoql(req.params.account).then(
  
      (data) => {
  
        res.send(JSON.stringify(data, undefined, 2));
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