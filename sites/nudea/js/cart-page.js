/*=================================
        CART PAGE
==================================*/

const cartProductsList = document.getElementById("cartProductsList");
const subtotalPrice = document.getElementById("subtotalPrice");
const totalPrice = document.getElementById("totalPrice");
const cartItemCount = document.getElementById("cartItemCount");
const emptyCart = document.getElementById("emptyCart");
const cartProductsSection = document.querySelector(".cart-products-section");
const cartSummarySection = document.querySelector(".cart-summary-section");
const cartPageHeader = document.querySelector(".cart-page-header");

let cart = JSON.parse(localStorage.getItem("cart")) || [];
let discountApplied = false;
let discountPercent = 0;

function formatPrice(num) {
    return num.toLocaleString("fa-IR") + " تومان";
}

function renderCart() {
    cartProductsList.innerHTML = "";

    if (cart.length === 0) {
        emptyCart.style.display = "flex";
        cartProductsSection.style.display = "none";
        cartSummarySection.style.display = "none";
        cartPageHeader.style.display = "none";
        return;
    }

    emptyCart.style.display = "none";
    cartProductsSection.style.display = "block";
    cartSummarySection.style.display = "block";
    cartPageHeader.style.display = "flex";

    let subtotal = 0;
    let totalItems = 0;

    cart.forEach((item, index) => {
        const qty = item.quantity || 1;
        const itemTotal = item.price * qty;
        subtotal += itemTotal;
        totalItems += qty;

        const hasDiscount = item.oldPrice && item.oldPrice > item.price;
        const discountPercentItem = hasDiscount
            ? Math.round(((item.oldPrice - item.price) / item.oldPrice) * 100)
            : 0;

        const card = document.createElement("div");
        card.className = "cart-product-card";
        card.innerHTML = `
            <div class="cart-product-image">
                <img src="${item.image}" alt="${item.name}" onerror="this.src='images/product1.jpg'">
                ${hasDiscount ? `<span class="cart-item-discount">${discountPercentItem}%</span>` : ""}
            </div>
            <div class="cart-product-info">
                <div class="cart-product-details">
                    <span class="cart-product-brand">${item.brand || ""}</span>
                    <h3 class="cart-product-name">${item.name}</h3>
                    <div class="cart-product-price-row">
                        <span class="cart-product-current-price">${formatPrice(item.price)}</span>
                        ${hasDiscount ? `<span class="cart-product-old-price">${item.oldPrice.toLocaleString("fa-IR")} تومان</span>` : ""}
                    </div>
                </div>
                <div class="cart-product-actions">
                    <div class="quantity-control">
                        <button class="qty-btn qty-minus" onclick="changeQuantity(${index}, -1)">
                            <i class="fa-solid fa-minus"></i>
                        </button>
                        <span class="qty-value">${qty}</span>
                        <button class="qty-btn qty-plus" onclick="changeQuantity(${index}, 1)">
                            <i class="fa-solid fa-plus"></i>
                        </button>
                    </div>
                    <div class="cart-product-item-total">
                        <span class="item-total-label">جمع:</span>
                        <span class="item-total-price">${formatPrice(itemTotal)}</span>
                    </div>
                    <button class="remove-item-btn" onclick="removeItem(${index})">
                        <i class="fa-solid fa-trash-can"></i>
                        حذف
                    </button>
                </div>
            </div>
        `;
        cartProductsList.appendChild(card);
    });

    // محاسبه تخفیف
    let discountAmount = 0;
    if (discountApplied && discountPercent > 0) {
        discountAmount = Math.round(subtotal * discountPercent / 100);
    }

    const finalTotal = subtotal - discountAmount;

    // آپدیت خلاصه سفارش
    subtotalPrice.textContent = formatPrice(subtotal);
    totalPrice.textContent = formatPrice(finalTotal);
    cartItemCount.textContent = totalItems + " کالا";

    const discountRow = document.getElementById("discountRow");
    const discountAmountEl = document.getElementById("discountAmount");
    if (discountApplied && discountAmount > 0) {
        discountRow.style.display = "flex";
        discountAmountEl.textContent = "- " + formatPrice(discountAmount);
    } else {
        discountRow.style.display = "none";
    }
}

function changeQuantity(index, delta) {
    if (!cart[index]) return;
    const newQty = (cart[index].quantity || 1) + delta;
    if (newQty < 1) {
        removeItem(index);
        return;
    }
    cart[index].quantity = newQty;
    saveCart();
    renderCart();
}

function removeItem(index) {
    cart.splice(index, 1);
    saveCart();
    renderCart();
}

function applyDiscount() {
    const input = document.getElementById("discountInput");
    const code = input.value.trim();
    if (code === "" || code === null) return;

    // کدهای تخفیف نمونه
    const codes = {
        "beauty10": 10,
        "nudea20": 20,
        "special30": 30,
        "vip": 15
    };

    if (codes[code.toLowerCase()]) {
        discountApplied = true;
        discountPercent = codes[code.toLowerCase()];
        input.style.borderColor = "#4CAF50";
        input.value = "✅ " + code + " (۱۰٪ تخفیف)";
        input.disabled = true;
        renderCart();
    } else {
        input.style.borderColor = "#ff4d7e";
        input.value = "";
        input.placeholder = "کد نامعتبر است";
        setTimeout(() => {
            input.style.borderColor = "";
            input.placeholder = "کد تخفیف";
        }, 2000);
    }
}

function checkout() {
    if (cart.length === 0) {
        alert("سبد خرید شما خالی است!");
        return;
    }
    alert("🎉 سفارش شما با موفقیت ثبت شد!\nممنون از خرید شما");
    cart = [];
    saveCart();
    renderCart();
}

function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
}

// رندر اولیه
renderCart();
