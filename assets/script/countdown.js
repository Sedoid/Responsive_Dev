// Returns the time from midnight Jan 1 1970 to a specified deadline in milliseconds
var deadline = new Date("nov 10, 2019 10:00:00").getTime();  
var start = document.createElement('div');

window.onload = function(){

   setInterval(
       function(){
      if(t < 0){
        cleatInterval(x);
        this.document.getElementById('#root').innerHTML = 'EXPIRED';
    }else{
       
        // Returns the time from midnight jan 1 ao70 to the current time in  milliseconds
var now = new Date().getTime();   

// Compute the lenght of time from now the deadline in milliseconds 
var t = deadline-now;

// Compute the number of 24hours within that specified length of time
var days = Math.floor(t/(24*60*60*1000)); 

// Compute the number of hours which gone with the deadline day
// note that the dividend is used in order to remover
var hours = Math.floor(t%(1000*60*60*24)/(1000*60*60));
// Compute the number of minutes before the deadline
var minutes = Math.floor((t%(1000*60*60))/(1000*60));


var seconds = Math.floor((t%(1000*60)) / 1000);

 let root = document.getElementById('root');
 var top = document.getElementsByTagName('h1')[0];
 
    start.innerHTML =  
    '<div class="counter" style="font-size:0.4em" >  '+ days     +  'Days </div>  ' 
   + '<div class="counter" style="font-size:0.4em" >  '+ hours    + 'Hours </div>  ' 
   + '<div class="counter" style="font-size:0.4em" >  '+ minutes  + ' Mins </div>  '
   + '<div class="counter" style="font-size:0.4em" >  '+ seconds  + ' secs </div>  ';
    }

    top.appendChild(start);
}, 1000);

}