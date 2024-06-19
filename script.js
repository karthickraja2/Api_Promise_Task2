document.querySelector("button").addEventListener("click",result);
var container = document.createElement("div");
container.className="container";

var row=document.createElement("div");
row.className="row";
async function result(){
    row.innerHTML="";
    try{
        var test = document.getElementById("text").value;
        var data = await fetch(`https://restcountries.com/v3.1/name/${test}`);
        var res = await data.json();
        console.log(res[0]);
        var col= document.createElement("div");
        col.className='col-lg-4';
        col.innerHTML= col.innerHTML=`<div class="card"  style="width: 25rem;">
        <img class="card-img-top" src="${res[0].flags.png}" alt="Card image cap">
        <div class="card-body">
          <h3 class="card-title">${res[0].name.common}</h3>
          <p class="card-text"><b>Region</b> : ${res[0].region}</p>
          <p class="card-text"><b>Subregion</b> : ${res[0].subregion}</p>
          <p class="card-text"><b>Population</b> : ${res[0].population}</p>
          <p class="card-text"><b>Capital</b> : ${res[0].capital}</p>
          <p class="card-text"><b>Area</b> : ${res[0].area}</p>
        </div>
        </div>`;
    
        row.append(col);
        container.append(row);
        document.body.append(container);
    }catch(error){
        console.log(error);
    }

}