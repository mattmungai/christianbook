const express = require('express');
const fetchXml = require('../util/fetchXml');

const app = express();
const port = process.env.PORT || 3000;
const sitemapUrl = 'https://www.christianbook.com/sitemap4.xml';

app.get('/search/:sku', async (req, res) => {
  const { sku } = req.params;
  try {
    const xmlData = await fetchXml(sitemapUrl);
    // Extract information for the given SKU from xmlData and return as JSON
    // You need to implement this part based on the XML structure and data extraction logic.
    // Example: const productInfo = extractProductInfo(xmlData, sku);
    res.json(productInfo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`API server is listening on port ${port}`);
});
