'use strict';

function calculate(inta,intb,string){
  if(string == "add"){
    return inta+intb;
  }
  if(string == "substract"){
    return inta-intb;
  }
  if(string == "multiply"){
    return inta*intb;
  }
  if(string == "divide" ){
    return inta/intb;
  }
  
  

  
}

module.exports.hello = async event => {
  let { queryStringParameters } = event;
  if (!queryStringParameters) {
    queryStringParameters = {};
  }
  
  const a = parseInt(queryStringParameters.a, 10)  || 0;
  const b = parseInt(queryStringParameters.b, 10) || 0;
  const type = queryStringParameters.type;
  const c = calculate(a,b,type);
  
  if (c == 0){
  
  }
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'text/html',
    },
    body: 
    `<h1>Welcome to the homework of Sten Unt</h1>
    <form method="get">
    <input type="text" placeholder="first value" name="a" value="${a?a:''}">
    <input type="text" placeholder="second value" name="b" value="${b?b:''}">
    <button type="submit">SUBMIT</button>
    <br>
    <input type="radio" id="add" name="type" value="add" checked ="true">
    <label for="add">add</label>

    <input type="radio" id="substract" name="type" value="substract">
    <label for="substract">substract</label>

    <input type="radio" id="multiply" name="type" value="multiply">
    <label for="multiply">multiply</label>

    <input type="radio" id="divide" name="type" value="divide">
    <label for="divide">divide</label><br>
    </form>`
    +(c!== undefined ? `<h1>your answer: ${a} ${type} ${b} is ${c}</h1>` : ``)
    

  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
