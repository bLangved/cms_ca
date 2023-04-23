


// Create HTML for single containers
function createProductHTML(product){
    const container = document.querySelector(".container");
    const productContainer = document.createElement("div");
    productContainer.classList.add("product");
    productContainer.id = product.id;
    
    
    for(let i = 0; i < product.images.length; i++){
        const imgData = product.images[i];
        const image = document.createElement("img");
        image.classList.add("productImg");
        image.src = imgData.src;
        image.alt = imgData.alt;
    
        productContainer.append(image)
    }
    
    const title = document.createElement("h3");
    title.classList.add("productTitle");
    title.innerText = product.name;
    productContainer.append(title);
    
    container.append(productContainer);
    
    
    const priceData = product.prices;
    
    const priceContainer = document.createElement("div");
    priceContainer.classList.add("priceContainer");
    
    const price = document.createElement("h4");
    price.classList.add("productPrice");
    price.innerText = (priceData.regular_price / 100).toFixed(2) + " $"; // divide by 100 and format to two decimal places
    const discountPrice = document.createElement("h4");
    discountPrice.classList.add("productDiscountPrice");
    discountPrice.innerText = "SALE! " + (priceData.sale_price / 100).toFixed(2) + " $"; // divide by 100 and format to two decimal places
    
    if (product.on_sale === true) {
      // Regular price and discount price are different, so append both to productContainer
      priceContainer.append(price);
      priceContainer.append(discountPrice);
      price.classList.add("discounted"); // Add CSS class to regular price element
    } else {
      // Regular price and discount price are the same, so no discounted price / sale
      priceContainer.append(price);
    }
    productContainer.append(priceContainer);  
    
    
    const addToCartBtn = document.createElement("button");
    addToCartBtn.classList.add("addToCartBtnProduct");
    addToCartBtn.innerText = "Add to cart"
    productContainer.append(addToCartBtn);
    
    const productLink = document.createElement("a");
      productLink.href = `product.html?id=${product.id}`;
      productLink.append(productContainer);
      container.append(productLink);
    
    }


// Loops through API, and sends each retrieved product in to createProductHTML(). 
export function createProductsHTML(products){
    for(let i = 0; i < products.length; i++){
    const product = products[i];
    createProductHTML(product);
    }
}
