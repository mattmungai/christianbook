# christianbook
How could we scale the system to reach all sitemap files?

Retrieve Sitemap Index: Instead of directly fetching the product sitemap XML, fetch the sitemap index (sitemap-index.xml) which contains references to all individual product sitemaps.

Parse Sitemap Index: Parse the sitemap index to extract URLs of individual product sitemaps.

Parallel Processing: Use asynchronous processing and parallel execution to fetch and process multiple product sitemaps concurrently. You can use tools like Promise.all or asynchronous libraries like async in Node.js to achieve this.

Distributed Processing: For further scalability, you could distribute the parsing and processing of individual product sitemaps across multiple server instances or microservices.


How will your system perform with 100 users? 10,000 users? 1,000,000 users?

Fetching and parsing XML data synchronously can become a bottleneck.

To handle different user loads:

100 Users: The system might handle this load adequately with minimal delays.
10,000 Users: The system may start to experience delays and might struggle to keep up with simultaneous requests.
1,000,000 Users: The system is likely to become unresponsive or crash under this high load.

I used stackoverflow, javascript documentation, chat-gpt

3 hours. If I had unlimited time I would prioritize scalability becasue it accessability is the most important feature in a website. All other tasks would be secondary

If you were to critique the code, what would you say?
lacks error handling, robust data extraction, and proper error reporting. Additionally, the current implementation fetches and parses data synchronously, which can impact performance

Supporting Simple Keyword Searches:

To support simple keyword searches, you can modify the API to accept keywords as query parameters and search through the content of each product's web page
