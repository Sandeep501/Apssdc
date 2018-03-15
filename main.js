function loadJSON(url){
  return new Promise( (resolve,reject)=>{
    return fetch(url).then(response =>{
      if(response.ok){
        resolve(response.json());
      }else{
        reject(new Error('error-unable to load'))
      }
    })
  })
}

var myPromise =loadJSON("data.Json");
myPromise.then(data =>{
  console.log(data);
  career(data.career);
});
var content=document.querySelector(".content");
function career(car){
  var h2=document.createElement("h2");
  h2.textContent="career objective";
  content.appendChild(h2);
  var hr=document.createElement("hr");
  content.appendChild(hr);
  var p=document.createElement("p");
  p.textContent=car.data;
  content.appendChild(p);
}
