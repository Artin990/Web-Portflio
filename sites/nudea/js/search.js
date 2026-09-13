/*=================================
        PRODUCT SEARCH
==================================*/

const searchInput = document.getElementById("searchInput");

if (searchInput) {

    searchInput.addEventListener("keyup", function () {

        const value = this.value.toLowerCase();

        const products = document.querySelectorAll(".product-card");

        products.forEach((product) => {

            const title = product.querySelector("h3").textContent.toLowerCase();

            if (title.includes(value)) {

                product.style.display = "block";

            } else {

                product.style.display = "none";

            }

        });

    });

}
