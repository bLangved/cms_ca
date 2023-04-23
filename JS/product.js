import { createProductHTML } from "./createHTMLproduct.js";

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const apiBase = "http://cmsca.bhlweb.no";
const woocommerceBase = "/wp-json/wc/store";
const productBase = `/products/${id}?`;

// const consumerKey = "consumer_key=078b4beab90c63ed2fe912d887fd9e1e4688dde4";
// const consumerSecret = "consumer_secret=fec8830f057c0fedfd302782b90f4e923ad95c46";
// const fullProductURL = apiBase + woocommerceBase + productBase + consumerKey + "&" + consumerSecret;

const fullProductURL = apiBase + woocommerceBase + productBase;

async function getProducts() {
  try {

    const response = await fetch(fullProductURL);
    const product = await response.json();
    console.log("Product name: " + product.name);
    createProductHTML(product);
  } catch (error) {
    console.log(error);
  }
}

getProducts();