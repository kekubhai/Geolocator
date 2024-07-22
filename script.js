const button =document.getElementById('get-location-button');
  
async function getData(lat,long){ 
    const promise= await fetch(
          `http://api.weatherapi.com/v1/current.json?key=4f62c9b06896447f84d80748242207&q=${lat},${long}&aqi=yes`
    );
    return await promise.json();

}



 async function gotLocation(position){ 
  const result= await getData(
  position.coords.latitude,
  position.coords.longitude);
  
  console.log(result);

}
function failed(){ 
    alert("There was a error in your server");
}
button.addEventListener('click',  async ()=>{ 
navigator.geolocation.getCurrentPosition(gotLocation,failed);
});