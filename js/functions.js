     
  var myarr = [];  
  var arrayTotal = [];  
  var x=document.getElementById("arrayNumbers"); 
  function addTo() {
    myarr.push(document.getElementById("userinput").value);
    arrayTotal = myarr;
    console.log(myarr); //para que veas en consola que se están añadiendo 
    x.innerHTML=myarr.join('<br/>');   
  };

  function arregloTotal(){
    var x=document.getElementById("total"); 
    console.log(arrayTotal)
    x.innerHTML=myarr.join('<br/>');

  }
   