const fs = require("fs");
const path = require("path");

const productsFilePath = path.join(__dirname, "../data/productsDataBase.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
  index: (req, res) => {
    let visitedProducts = products.filter(
      (product) => product.category == "visited")
	  res.render('index', {sales: insaleProducts, visitd: visitedProducts})
	
    let insaleProducts = products.filter(
      (product) => product.category == "in-sale"
    );
  },
  search: (req, res) => {
    // Do the magic
  },
};

module.exports = controller;
