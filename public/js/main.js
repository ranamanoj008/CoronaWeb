
const fun = async()=>{
    let  url = `https://api.covid19api.com/summary`;
    const response = await fetch(url);
    const data = await response.json();
    const arrData = [data];
    
    const tCon = arrData[0].Countries[76].TotalConfirmed;
    const nCon = arrData[0].Countries[76].NewConfirmed; 
    const ndea = arrData[0].Countries[76].NewDeaths;
    const nRec = arrData[0].Countries[76].NewRecovered;
    
    document.getElementById('a').innerHTML = tCon;
    document.getElementById('b').innerHTML = nCon;
    document.getElementById('c').innerHTML = ndea;
    document.getElementById('d').innerHTML = nRec;
}
fun();