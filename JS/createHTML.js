


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
    
    const stockQuantity = document.createElement("div");
    stockQuantity.classList.add("productQuantity");
    

    // This does not work good. I could not retrieve the stock_quantity property, so I ended up using add_to_cart.maximum which is made for soemthing else
    stockQuantity.innerText = product.is_in_stock;
    if((product.is_in_stock === true) && (product.add_to_cart.maximum > 100)){
      stockQuantity.innerText = "100+ in stock";
      stockQuantity.style = "color: green";
    }
    else if((product.is_in_stock === true) && (product.add_to_cart.maximum >= 50)){
      stockQuantity.innerText = "50+ in stock";
      stockQuantity.style = "color: green";
    }
    else if((product.is_in_stock === true) && (product.add_to_cart.maximum >= 15)){
      stockQuantity.innerText = `${product.add_to_cart.maximum}` + " in stock";
      stockQuantity.style = "color: green";
    }
    else if((product.is_in_stock === true) && (product.add_to_cart.maximum >= 1)){
      stockQuantity.innerText = `${product.add_to_cart.maximum}` + " in stock";
      stockQuantity.style = "color: orange";
    }
    // This does not actually work. It only returns "false". 
  else{
      product.innerText = "Out of stock";
      stockQuantity.style = "color: red";
    }
    productContainer.append(stockQuantity);


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
