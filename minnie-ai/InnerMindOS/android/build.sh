#!/bin/bash

echo "Building InnerMind OS Android App..."

# Create necessary directories
mkdir -p app/src/main/assets/js
mkdir -p app/src/main/assets/knowledge_base

# Copy AI core files
cp ../../core.js app/src/main/assets/js/
cp ../../cognitive_map_algorithm.js app/src/main/assets/js/

# Copy knowledge base
cp -r ../knowledge_base/* app/src/main/assets/knowledge_base/

# Build the app
./gradlew assembleRelease

echo "Build complete. APK location: app/build/outputs/apk/release/app-release.apk"
