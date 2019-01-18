document.addEventListener('DOMContentLoaded',function() {
    document.getElementById('getMessage').onclick = function() {
      req=new XMLHttpRequest();
      req.open("GET",'http://api.worldweatheronline.com/premium/v1/weather.ashx?key=a4c3fdb4e5a742fa9fa200835191401&lang=ru&tp=12&q=Samara&cc=no&mca=no&format=json',true);
      req.send();
      req.onload=function(){
        json=JSON.parse(req.responseText);
          
          
     //   var date = json.data.weather[i].date;
	  //  var maxTemp = json.data.weather[i].maxtempC + ' C'; 
	  //  var minTemp = json.data.weather[i].mintempC + ' C'; 
	  //  var weatherIcon = json.data.weather[i].hourly[1].weatherIconUrl[0].value;
	 //   var weatherDecr = json.data.weather[i].hourly[1].lang_ru[0].value;  
          
          
          
        //document.getElementsByClassName('message0')[0].innerHTML= json.data.weather[0].date; 
       // document.getElementsByClassName('message1')[0].innerHTML= json.data.weather[0].maxtempC + ' C';  
       // document.getElementsByClassName('message2')[0].innerHTML=json.data.weather[0].mintempC + ' C'; 
       // document.getElementsByClassName('message3')[0].innerHTML+= '<img src="'+json.data.weather[0].hourly[1].weatherIconUrl[0].value+'">'  
       // document.getElementsByClassName('message4')[0].innerHTML=json.data.weather[0].hourly[1].lang_ru[0].value;  
          
        
        var ul = document.createElement('ul');
          
        for(var n = 0; n <4; n++) {
            var li = document.createElement('li');
            var p = document.createElement('p');
                   
       p.innerHTML= json.data.weather[n].hourly[1].lang_ru[0].value;
       li.insertAdjacentHTML('beforeEnd', '<p>' +  json.data.weather[n].date + '</p>' );  
       li.insertAdjacentHTML('beforeEnd', '<p>' + json.data.weather[n].maxtempC + ' C' + '</p>' );         
       li.insertAdjacentHTML('beforeEnd', '<p>' + json.data.weather[n].mintempC + ' C' + '</p>' );
        li.insertAdjacentHTML('beforeEnd', '<p>' + '<img src="'+json.data.weather[n].hourly[1].weatherIconUrl[0].value+'">' + '</p>' );         
           
       //li.insertAdjacentHTML('beforeEnd', json.data.weather[n].maxtempC + ' C' );      
        
            
       //p.innerHTML= json.data.weather[n].maxtempC + ' C';  
       //p.innerHTML=json.data.weather[n].mintempC + ' C'; 
       //p.innerHTML+= '<img src="'+json.data.weather[n].hourly[1].weatherIconUrl[0].value+'">'  
      // p.innerHTML=json.data.weather[n].hourly[1].lang_ru[0].value;  
            
          li.appendChild(p);  
         
         ul.appendChild(li); 
        
                  
        } 
      
       document.body.appendChild(ul); 
       
   
      };
    };
  });

