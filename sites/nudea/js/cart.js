/*=================================
        SHOPPING CART
==================================*/

let cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartCount = document.getElementById("cart-count");
const floatingCartCount = document.getElementById("floating-cart-count");

updateCartCount();

const buttons = document.querySelectorAll(".add-cart");

buttons.forEach((button) => {

    button.addEventListener("click", (e) => {

        // پیدا کردن اطلاعات محصول از روی کارت
        const card = button.closest(".product-card");
        const link = card.querySelector("a[href]");
        const href = link ? link.getAttribute("href") : "";
        const idMatch = href.match(/id=(\d+)/);
        const productId = idMatch ? parseInt(idMatch[1]) : null;

        // پیدا کردن اطلاعات کامل محصول
        let productData = null;
        if (typeof PRODUCTS !== "undefined" && productId) {
            productData = PRODUCTS.find(p => p.id === productId);
        }

        if (productData) {
            // بررسی اینکه آیا محصول قبلاً در سبد هست
            const existingIndex = cart.findIndex(item => item.id === productId);
            if (existingIndex !== -1) {
                cart[existingIndex].quantity = (cart[existingIndex].quantity || 1) + 1;
            } else {
                cart.push({
                    id: productData.id,
                    name: productData.name,
                    brand: productData.brand,
                    price: productData.price,
                    oldPrice: productData.oldPrice,
                    image: productData.image,
                    quantity: 1
                });
            }
        } else {
            // اگر اطلاعات محصول پیدا نشد، فقط id ذخیره کن
            cart.push({
                id: Date.now(),
                name: "محصول",
                brand: "",
                price: 1000000,
                oldPrice: null,
                image: "images/product1.jpg",
                quantity: 1
            });
        }

        localStorage.setItem("cart", JSON.stringify(cart));

        updateCartCount();

        // انیمیشن دکمه
        const originalText = button.innerText;
        button.innerText = "✓ اضافه شد";
        button.style.background = "#4CAF50";
        setTimeout(() => {
            button.innerText = originalText;
            button.style.background = "";
        }, 1200);

    });

});

function updateCartCount() {
    const totalItems = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);

    if (cartCount) {
        cartCount.innerText = totalItems;
    }

    if (floatingCartCount) {
        floatingCartCount.innerText = totalItems;
    }
}
