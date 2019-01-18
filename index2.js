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
 
     var tableBodyEl = document.createElement('tbody-table');
                
    for (var i = 0; i < 5; i++) {
       
     var date = json.data.weather[i].date;
	  var maxTemp = json.data.weather[i].maxtempC + ' C'; 
	  var minTemp = json.data.weather[i].mintempC + ' C'; 
	  var weatherIcon = json.data.weather[i].hourly[1].weatherIconUrl[0].value;
	 var weatherDecr = json.data.weather[i].hourly[1].lang_ru[0].value;   
      li.appendChild(tbody-table);   
	
	row.insertCell(-1).innerHTML = '<p class="date">' + date + '</p>';
	row.insertCell(-1).innerHTML = '<p class="maxTemp">' + maxTemp + ' C' +'</p>';
    row.insertCell(-1).innerHTML = '<p class="minTemp">' + minTemp + ' C' +'</p>';    
	row.insertCell(-1).innerHTML += '<img src="'+json.data.weather[0].hourly[1].weatherIconUrl[0].value+'">';
    
	};
	
            
            
            
            
            
            
            
            
            
            
            
            //for(var j = 0; j <5; j++) {
           // var p = document.createElement('p');
        //p.innerHTML= json.data.weather[n].date;
        //document.querySelectorAll('ul > li > p')[1].innerHTML= json.data.weather[0].maxtempC + ' C';  
        //document.querySelectorAll('ul > li > p')[2].innerHTML=json.data.weather[0].mintempC + ' C'; 
        //document.querySelectorAll('ul > li > p')[3].innerHTML+= '<img src="'+json.data.weather[0].hourly[1].weatherIconUrl[0].value+'">'  
        //document.querySelectorAll('ul > li > p')[4].innerHTML=json.data.weather[0].hourly[1].lang_ru[0].value;       
           
            
            
        
    
       // }
            
         ul.appendChild(li); 
        
                  
        } 
      
       document.body.appendChild(ul); 
          
         //document.querySelectorAll('ul > li > p')[n+1].innerHTML= json.data.weather[n].date; 
        //document.querySelectorAll('ul > li > p')[].innerHTML= json.data.weather[0].maxtempC + ' C';  
        //document.querySelectorAll('ul > li > p')[2].innerHTML=json.data.weather[0].mintempC + ' C'; 
        //document.querySelectorAll('ul > li > p')[3].innerHTML+= '<img src="'+json.data.weather[0].hourly[1].weatherIconUrl[0].value+'">'  
        //document.querySelectorAll('ul > li > p')[4].innerHTML=json.data.weather[0].hourly[1].lang_ru[0].value;   
                 
          
      // for (var i = 0; i< 4; i++){
            
            
      // document.querySelectorAll('ul > li > p')[i].innerHTML= json.data.weather[i].date; 
     //   document.querySelectorAll('ul > li > p')[i+1].innerHTML= json.data.weather[i].maxtempC + ' C';  
//document.querySelectorAll('ul > li > p')[i+2].innerHTML=json.data.weather[i].mintempC + ' C'; 
      // document.querySelectorAll('ul > li > p')[i+3].innerHTML+= '<img src="'+json.data.weather[i].hourly[1].weatherIconUrl[0].value+'">'  
    //  document.querySelectorAll('ul > li > p')[i+4].innerHTML=json.data.weather[i].hourly[1].lang_ru[0].value;    
                
             //}  
          
          
          
          
          
          
          
          // сначала вставить узлы
     
         // затем в документ  
          
       
              // for(var j = 0; j <5; j++) {
            //var p = document.createElement('p')
         
    //    li.appendChild(p); 
          
          
          
          
        //document.querySelectorAll('ul > li > p')[0].innerHTML= json.data.weather[0].date; 
        //document.querySelectorAll('ul > li > p')[1].innerHTML= json.data.weather[0].maxtempC + ' C';  
        //document.querySelectorAll('ul > li > p')[2].innerHTML=json.data.weather[0].mintempC + ' C'; 
        //document.querySelectorAll('ul > li > p')[3].innerHTML+= '<img src="'+json.data.weather[0].hourly[1].weatherIconUrl[0].value+'">'  
        //document.querySelectorAll('ul > li > p')[4].innerHTML=json.data.weather[0].hourly[1].lang_ru[0].value;  
          
          
          
          
          
          
         
        //  for (var i = 0; i <3 ; i++) {
        //var date = json.data.weather[i].date;
	    //var maxTemp = json.data.weather[i].maxtempC + ' C'; 
	    //var minTemp = json.data.weather[i].mintempC + ' C'; 
	    //var weatherIcon = json.data.weather[i].hourly[1].weatherIconUrl[0].value;
	    //var weatherDecr = json.data.weather[i].hourly[1].lang_ru[0].value; 
        //}
          
          
          
          
          
        //document.getElementsByClassName('message')[0].innerHTML=JSON.stringify(json);
        // Add your code below this line
        //console.log(json[0].altText);
        // Add your code above this line
      };
    };
  });


