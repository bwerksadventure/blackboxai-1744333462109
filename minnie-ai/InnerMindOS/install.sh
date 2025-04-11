#!/bin/bash

echo "Installing InnerMind OS..."

# Install dependencies
npm install

# Initialize system
npm run init

# Create necessary directories if they don't exist
mkdir -p knowledge_base/{1a,1b,1c}
mkdir -p cache
mkdir -p ghost_files

echo "Installation complete!"
echo "To start the app, run: npm start"
