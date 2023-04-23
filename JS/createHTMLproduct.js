
const pageTitle = document.querySelector(".productTitle");


// Create HTML for product.html
export function createProductHTML(product){
    const productContainer = document.querySelector(".container_product");
    
    const title = document.createElement("h1");
    title.classList.add("productTitle_product");
    title.innerText = product.name;
    productContainer.append(title);

    const subTitle = document.createElement("h2");
    subTitle.classList.add("productSubTitle_product");
    subTitle.innerHTML = product.short_description.replace(/<\/?p>/g, "");
    productContainer.append(subTitle);


    for(let i = 0; i < product.images.length; i++){
        const imgData = product.images[i];
        const image = document.createElement("img");
        image.classList.add("productImg_product");
        image.src = imgData.src;
        image.alt = imgData.alt;
    
        productContainer.append(image)
    }

    
    const priceData = product.prices;
    
    const priceContainer = document.createElement("div");
    priceContainer.classList.add("priceContainer_product");
    
    const price = document.createElement("h4");
    price.classList.add("productPrice_product");
    price.innerText = (priceData.regular_price / 100).toFixed(2) + " $"; // divide by 100 and format to two decimal places
    const discountPrice = document.createElement("h4");
    discountPrice.classList.add("productDiscountPrice_product");
    discountPrice.innerText = "SALE! " + (priceData.sale_price / 100).toFixed(2) + " $"; // divide by 100 and format to two decimal places
    
    if (product.on_sale === true) {
      // Regular price and discount price are different, so append both to productContainer
      priceContainer.append(price);
      priceContainer.append(discountPrice);
      price.classList.add("discounted_product"); // Add CSS class to regular price element
    } else {
      // Regular price and discount price are the same, so no discounted price / sale
      priceContainer.append(price);
    }
    productContainer.append(priceContainer);  


    const addToCartBtn = document.createElement("button");

    addToCartBtn.addEventListener("click", addToCart);
    function addToCart(){
        // Store the product data in local storage
        localStorage.setItem("product", JSON.stringify(product));
        console.log("Product: " + product.name + " added to localstorage");
    }

    addToCartBtn.classList.add("addToCartBtnProduct_product");
    addToCartBtn.innerText = "Add to cart"
    productContainer.append(addToCartBtn);

    const productDescription = document.createElement("div");
    productDescription.classList.add("description_product");
    productDescription.innerHTML = product.description.replace(/<span class="a-list-item">|<\/span>/g, '');
    productContainer.append(productDescription);

pageTitle.innerText = product.name;
}


