function validation() {
  var uname = document.login.uname.value;
  var pass = document.login.pass.value;

  if (uname == "" || pass == "") {
    alert("Both fields should not be blank.");
    return;
  }
   
  if (pass.length < 6 || pass.length > 12) {
    alert("Password must be 6 to 12 character");
    return;
  }
  var str = uname.slice(0, 1);
  if (uname.slice(0, 1) == "_" || uname.slice(0, 1) == "@" || str.match(/[0-9]/g) != null) {
    alert("Username should not start with _,@,and number");
    return;
    
  }
   
}
function demo() {
    var result=document.getElementById('result');
  var dateTime = new Date();
  var years = dateTime.getFullYear();
    var hours = dateTime.getHours();
    var minutes = dateTime.getMinutes();
    var seconds = dateTime.getSeconds();
    var Watch= years+':'+hours + ':' + minutes + ':' + seconds;
    result.innerHTML = Watch;
  }
setInterval(demo, 1000);