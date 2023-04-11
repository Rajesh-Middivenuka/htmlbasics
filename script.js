const cities=[
    "bengaluru",
    "hyderabad",
    "vishakapatanam",
    "mumbai",
    "jarkat"
]
function generateListItems(argss){
    let items="";
    for(let i=0;i<argss.length;i++){
        items+=`<li>${argss[i]}</li>`
    }
    return items;
}
let result=generateListItems(cities)
console.log(result)

document.getElementById("ciites").innerHTML=`<ol>${generateListItems(cities)}</ol>`

