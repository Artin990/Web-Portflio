const params = new URLSearchParams(window.location.search);

const id = Number(params.get("id"));

const product = products.find(item => item.id === id);

if(product){

document.querySelector(".main-image").src = product.image;

document.querySelector("h1").innerHTML = product.name;

document.querySelector(".product-brand").innerHTML = product.brand;

document.querySelector(".product-info h2").innerHTML =
product.price.toLocaleString()+" تومان";

document.querySelector(".product-info p").innerHTML =
product.description;

}
