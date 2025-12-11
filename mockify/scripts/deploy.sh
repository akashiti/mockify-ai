#!/bin/bash

# Navigate to the frontend directory and build the frontend application
cd frontend
npm install
npm run build

# Navigate to the backend directory and install dependencies
cd ../backend
npm install

# Navigate to the AI module directory and install Python dependencies
cd ../ai
pip install -r src/requirements.txt

# Navigate back to the root directory
cd ..

# Build and run the Docker containers using docker-compose
docker-compose up --build -d

echo "Deployment completed successfully!"