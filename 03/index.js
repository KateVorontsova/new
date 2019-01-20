$( function() {
     
        
var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

function success(pos) {
  var crd = pos.coords;

  console.log('Your current position is:');
  console.log(`Latitude : ${crd.latitude}`);
  console.log(`Longitude: ${crd.longitude}`);
  console.log(`More or less ${crd.accuracy} meters.`);
     
    var Latitude = pos.coords.latitude;
    var Longitude = pos.coords.longitude;



    
   
       var searchLink  = 'http://api.worldweatheronline.com/premium/v1/weather.ashx?key=a4c3fdb4e5a742fa9fa200835191401&lang=ru&tp=12&q='+ Latitude+ ','+ Longitude + '&cc=no&mca=no&format=json';

    
    
    
        
      req=new XMLHttpRequest();
      req.open("GET", searchLink ,true);
      req.send(); 
   
      req.onload=function theWeather(){
      json=JSON.parse(req.responseText); 
      
      
  //cityName.innerHTML = jsonObject.name;
    
       var ul = document.createElement('ul');
          ul.className = 'b-weather owl-carousel';
         
    for (var i = 0; i < 4; i++) {
      var div = document.createElement('div');
        div.className = 'b-weather__day';
      ul.appendChild(div);
        
           //Преобразование даты в удобный формат
        var timeStr = json.data.weather[i].date;
        var date = new Date(timeStr);
        var day = date.getDate();
        var year = date.getFullYear();
        var month = date.getMonth()+1;
        var dateStr = day+"." +month+"."+year; 
        //  
     
        var p = document.createElement('p');
        p.className = 'b-weather__date';
        p.innerHTML= dateStr;
        div.appendChild(p);
       
        p = document.createElement('p');
        p.className = 'b-weather__logo';
        p.innerHTML+= '<img src="'+json.data.weather[i].hourly[1].weatherIconUrl[0].value+'">' ;
        div.appendChild(p);
        
        
        
         p = document.createElement('p');
        p.className = 'b-weather__maxTemp';
        p.innerHTML= '<i class="fas fa-sun"></i>   ' + json.data.weather[0].hourly[1].tempC + ' <sup>o</sup>C'; 
        div.appendChild(p);
        p = document.createElement('p');
        p.className = 'b-weather__minTemp';
        p.innerHTML='<i class="fas fa-moon"></i>   ' + json.data.weather[i].hourly[0].tempC + ' <sup>o</sup>C';
        div.appendChild(p);
      
        
        
        p = document.createElement('p');
        p.className = 'b-weather__descr';
        p.innerHTML=json.data.weather[i].hourly[1].lang_ru[0].value; 
        div.appendChild(p);  
      
    };   
      
        document.body.children[0].appendChild(ul);  
          
          
    $('.owl-carousel').owlCarousel({
    loop:false,
    margin:5,
    nav:true,
    navText:["",""],
    items: 3,
        slideBy:1
});
  
          
          
        //var div = document.createElement('div');
        //div.className = 'b-weather__today';
        //ul.insertBefore(div, ul.firstChild);
         // div.appendChild(ul.children[1]);
        //div = document.createElement('div');
        //div.className = 'b-weather__nextday';
        //ul.insertBefore(div, ul.children[1]);
         // for(m=1; m<4; m++){
            //div.appendChild(ul.children[2]);     
          //};
      };
};
    function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
};
        navigator.geolocation.getCurrentPosition(success, error, options);
    }
  


);







