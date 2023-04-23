import { createProductsHTML } from "./createHTML.js";


const apiBase = "https://cmsca.bhlweb.no";
const woocommerceBase = "/wp-json/wc/store";
const productBase = "/products"

const fullProductURL = apiBase + woocommerceBase + productBase;

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
