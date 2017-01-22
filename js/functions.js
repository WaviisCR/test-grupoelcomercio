     var myarr = [];
     var arrayTotal = [];
     var x = document.getElementById("arrayNumbers");

     function addTo() {
         myarr.push(document.getElementById("userinput").value);
         arrayTotal = myarr;
         x.innerHTML = myarr.join('<br/>'); //genera un salto de línea entre cada elemento mostrado

     };
     Array.prototype.unique = function(a) {
         return function() {
             return this.filter(a)
         }
     }(function(a, b, c) {
         return c.indexOf(a, b + 1) < 0
     }); //ArrayUnique es un recurso utilizado para comparar datos dentro de un arreglo.


     function arregloTotal() {
         var x = document.getElementById("total");
         console.log(arrayTotal)
         x.innerHTML = myarr.sort(function(a, b) {
             return a - b
         }); //Ordena los elementos de forma ascendente antes de mostrarlos
         myarr = (myarr.unique());
         x.innerHTML = myarr.join('<br/>'); //muestra los elementos ordenados y sin repeticiones
         document.getElementById("total").className = "transform";
     }