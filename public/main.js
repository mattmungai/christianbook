const searchButton = document.getElementById('searchButton');
const skuInput = document.getElementById('skuInput');
const resultDiv = document.getElementById('result');

searchButton.addEventListener('click', async () => {
  const sku = skuInput.value.trim();
  if (sku !== '') {
    try {
      const response = await fetch(`/search/${sku}`);
      const data = await response.json();
      // Display data in the resultDiv
      // You need to implement this part based on the response structure.
      // Example: resultDiv.innerHTML = `<p>Title: ${data.title}</p>...`;
    } catch (error) {
      console.error(error);
      resultDiv.innerHTML = '<p>Error fetching data.</p>';
    }
  }
});
