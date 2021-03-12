
function modifyText(){
    getapi('/api');

}


// Defining async function 
async function getapi(url) { 
    
    // Storing response 
    const response = await fetch(url); 
    
    // Storing data in form of JSON 
    var data = await response.json(); 
    console.log(typeof data.quote);
    console.log(data.quote);
    const drakeQuote = document.getElementById('drakeQuote');
    drakeQuote.innerHTML = '<b>' + data.quote + '</b>';
    //not sure why but i can't sent data.quote to a variable 
    //or it will say [obj promise]
} 

const el = document.getElementById('refresh')
el.addEventListener("click", modifyText, false);