#!/bin/bash

echo "🚀 Dr. Anja Haile Website - Optimized Startup"
echo "=============================================="

# Kill any existing processes on port 3000
echo "🔧 Cleaning up existing processes..."
lsof -ti:3000 | xargs kill -9 2>/dev/null || true

# Navigate to app directory
cd /app

# Check if dependencies are installed
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    yarn install --silent
else
    echo "✅ Dependencies already installed"
fi

# Start MongoDB if not running
if ! pgrep mongod > /dev/null; then
    echo "🗄️ Starting MongoDB..."
    sudo systemctl start mongod &
fi

# Start Next.js application
echo "🌟 Starting Dr. Anja Haile Website..."
NODE_OPTIONS='--max-old-space-size=512' yarn dev --hostname 0.0.0.0 --port 3000

echo "✅ Website running at http://localhost:3000"