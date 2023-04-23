// // Create HTML for cart.html
export function createHTMLCart(){

// Retrieve the stored product data from local storage
const storedProductData = localStorage.getItem("product");

// Parse the stored product data back to a JavaScript object
const product = JSON.parse(storedProductData);

console.log("Product in localStorage: " + product.name);


const productContainer = document.querySelector(".productContainer_cart")

    const productCart = document.createElement("div");
    productCart.classList.add("product_cart");

    
    for(let i = 0; i < product.images.length; i++){
        const imgData = product.images[i];
        const image = document.createElement("img");
        image.classList.add("productImg_cart");
        image.src = imgData.src;
        image.alt = imgData.alt;
        productCart.append(image)
    }


    const title = document.createElement("h1");
    title.classList.add("productTitle_cart");
    title.innerText = product.name;
    productCart.append(title);

    
    const priceData = product.prices;
    const priceContainer = document.createElement("div");
    priceContainer.classList.add("priceContainer_cart");
    
    const price = document.createElement("h4");
    price.classList.add("productPrice_cart");
    price.innerText = (priceData.regular_price / 100).toFixed(2) + " $"; // divide by 100 and format to two decimal places
    const discountPrice = document.createElement("h4");
    discountPrice.classList.add("productDiscountPrice_cart");
    discountPrice.innerText = "SALE! " + (priceData.sale_price / 100).toFixed(2) + " $"; // divide by 100 and format to two decimal places
    
    if (product.on_sale === true) {
      // Regular price and discount price are different, so append both to productContainer
      priceContainer.append(price);
      priceContainer.append(discountPrice);
      price.classList.add("discounted_cart"); // Add CSS class to regular price element
    } else {
      // Regular price and discount price are the same, so no discounted price / sale
      priceContainer.append(price);
    }
    productCart.append(priceContainer);  


    const removeFromCartBtn = document.createElement("button");
    removeFromCartBtn.addEventListener("click", removeFromCart);
    function removeFromCart(){
        // Store the product data in local storage
        localStorage.removeItem("product", JSON.stringify(product));
          // Reload the page to update the cart
        location.reload();
    }

    removeFromCartBtn.classList.add("removeFromCartBtn_cart");
    removeFromCartBtn.innerText = "Remove"
    productCart.append(removeFromCartBtn);


    productContainer.append(productCart);
};
