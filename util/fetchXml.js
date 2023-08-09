const axios = require('axios');
const { parseString } = require('xml2js');

async function fetchXml(url) {
  const response = await axios.get(url);
  const xmlData = response.data;
  return new Promise((resolve, reject) => {
    parseString(xmlData, (err, result) => {
      if (err) reject(err);
      resolve(result);
    });
  });
}

module.exports = fetchXml;
