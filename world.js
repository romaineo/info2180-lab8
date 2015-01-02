function showResults(){
  var  xmlhttp;
  if (window.XMLHttpRequest) {
    // code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp=new XMLHttpRequest();
  } else {  // code for IE6, IE5
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
  
  
  
  var country;
  xmlhttp.onreadystatechange=function() {
    if (xmlhttp.readyState==4 && xmlhttp.status==200) {
      document.getElementById("result").innerHTML = xmlhttp.responseText;
    }
  }
  
  var x = document.getElementById("myCheck"); 
  if(x.checked === true){
    xmlhttp.open("GET","world.php?all=true",true);
    xmlhttp.send();
  }
  else
  {  
    country = document.getElementById("term").value;
    xmlhttp.open("GET","world.php?lookup="+country ,true);
    xmlhttp.send();
  }
}

