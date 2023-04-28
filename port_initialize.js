const express = require('express');
const app = express();



const port=()=>{
    app.listen(3000, () =>
    console.log('serverstarted')
);

}


module.exports=port;



