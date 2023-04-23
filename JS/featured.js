import { createProductsHTML } from "./createHTML.js";


const apiBase = "https://cmsca.bhlweb.no";
const woocommerceBase = "/wp-json/wc/store";
const featuredProducts = "/products?featured=true";

const fullProductURL = apiBase + woocommerceBase + featuredProducts;

async function getProducts(){
    const response = await fetch(fullProductURL);
    const products = await response.json();

    console.log(products);
    return products;
}

async function productPage(){
    const products = await getProducts();
    createProductsHTML(products);
}

productPage();