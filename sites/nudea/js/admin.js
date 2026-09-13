const form = document.getElementById("addProductForm");

form.addEventListener("submit",(e)=>{

e.preventDefault();

alert("محصول با موفقیت اضافه شد.");

form.reset();

});