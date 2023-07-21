const axios = require('axios')

 const uri = "https://api.adviceslip.com/advice";

//  (axios.get(uri).then(response=>console.log(response.data.slip.advice )))

module.export=getData=()=>{
    return (axios.get(uri).then(response=>response.data.slip.advice ))

}