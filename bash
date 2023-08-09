npm init -y
npm install express axios xml2js

/sitemap-examiner
  /api
    server.js
  /util
    fetchXml.js
/public
build.sh
run.sh

#!/bin/bash

# Install API dependencies
cd api
npm install
cd ..

# Install web interface dependencies
cd public
npm install
cd ..
