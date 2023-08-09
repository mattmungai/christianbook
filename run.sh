#!/bin/bash

# Run the API service
cd api
node server.js &
cd ..

# Start a simple web server for the web interface
cd public
python3 -m http.server 8080
