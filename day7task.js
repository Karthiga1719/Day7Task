//a)Get all the countries from Asia continent /region using Filter function

var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",'True');

request.send();
request.onload=function(){
    var countryData= JSON.parse(request.response);
    const asia=countryData.filter((element)=>{
        if(element.region==='Asia'){
            
        return element.name;
    }
})
console.log(asia);}

//b)Get all the countries with a population of less than 2 lakhs using Filter function

var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");

request.send();

request.onload=function(){
    var result = JSON.parse(request.response);
       console.log(result);
       var res = result.filter((ele)=>ele.population<200000);
       console.log(res);
}

//C) Print the following details name, capital, flag using forEach function
var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");

request.send();
request.onload=function(){
    var countryData=JSON.parse(request.response);
    countryData.forEach((element)=>{
        console.log(element.name, element.capital, element.flag);
    }
)};

//d)Print the total population of countries using reduce function

var request= new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");

request.send();
request.onload=function(){
    var data=JSON.parse(this.response);
    const population=data.reduce((acc,element)=>{
        return acc+element.population;
    },0)
    console.log(population);
}

//e)Print the country which uses US Dollars as currency.

var request= new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",'true');
request.send();
request.onload = function(){
    var data =  JSON.parse(this.response);
    var cur = [];
    for (i=0; i<data.length; i++){
        if (data[i].currencies[0].code ==="USD")
        {
            console.log("name:",data[i].name,"==>",data[i].currencies[0].code)
        }
    }
}
// var str = 'santha'
// var arr = str.split('');
// var result="";
// for(let k = 0; k < arr.length; k++)
// {
//     result +=arr[k]+",";
// }
// result +=arr[arr.length]
// console.log(result);