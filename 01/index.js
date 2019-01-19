   $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
});






document.addEventListener('DOMContentLoaded',function() {
    document.getElementById('getMessage').onclick = function() {
      req=new XMLHttpRequest();
      req.open("GET",'http://api.worldweatheronline.com/premium/v1/weather.ashx?key=a4c3fdb4e5a742fa9fa200835191401&lang=ru&tp=12&q=Samara&cc=no&mca=no&format=json',true);
      req.send();      
        
      req.onload=function(){
       json=JSON.parse(req.responseText);
      
  //cityName.innerHTML = jsonObject.name;
              
       var ul = document.createElement('ul');
          ul.className = 'b-weather';
         
    for (var i = 0; i < 4; i++) {
      var div = document.createElement('div');
        div.className = 'b-weather__day owl-carousel';
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
        p.innerHTML= 'день ' + json.data.weather[i].maxtempC + ' <sup>o</sup>C'; 
        div.appendChild(p);
        p = document.createElement('p');
        p.className = 'b-weather__minTemp';
        p.innerHTML='ночь ' + json.data.weather[i].mintempC + ' <sup>o</sup>C';
        div.appendChild(p);
      
        
        
        p = document.createElement('p');
        p.className = 'b-weather__descr';
        p.innerHTML=json.data.weather[i].hourly[1].lang_ru[0].value; 
        div.appendChild(p);
        
    
        
        
       
      
    };   
        document.body.appendChild(ul);   
   
          
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
    
    
 
    
    
  });










