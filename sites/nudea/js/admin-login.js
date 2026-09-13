const form = document.getElementById("adminLogin");

form.addEventListener("submit",function(e){

e.preventDefault();

const username =
document.getElementById("username").value;

const password =
document.getElementById("password").value;

if(

username==="admin"

&&

password==="123456"

){

window.location="admin.html";

}else{

alert("نام کاربری یا رمز عبور اشتباه است.");

}

});