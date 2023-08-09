// api/controllers/productController.js
const axios = require('axios');
const { parseString } = require('xml2js');

const fetchProductData = async (sku) => {
  try {
    const url = `https://www.christianbook.com/sku/${sku}`;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new Error('Product not found');
  }
};

const getProductData = async (req, res) => {
  const { sku } = req.params;

  try {
    const xmlData = await fetchProductData(sku);
    parseString(xmlData, (err, result) => {
      if (err) {
        return res.status(500).json({ error: 'Error parsing XML data' });
      }

      const productData = {
        title: result.title,
        author: result.author,
        price: result.price,
      };

      res.json(productData);
    });
  } catch (error) {
    res.status(404).json({ error: 'Product not found' });
  }
};

module.exports = {
  getProductData,
};
