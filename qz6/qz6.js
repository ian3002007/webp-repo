setInterval(tdtime,1000);
function tdtime(){
  var time=new Date();
  var hour=time.getHours();
  var min=time.getMinutes();
  var sec=time.getSeconds();
  document.getElementById('demo').innerHTML = hour + ":" + min + ":" + sec;
}