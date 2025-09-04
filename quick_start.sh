#!/bin/bash

echo "⚡ Quick Start - Dr. Anja Haile Website"
echo "======================================="

# Kill existing processes (fast cleanup)
pkill -f "next" 2>/dev/null || true

# Start via supervisor (fastest method)
sudo supervisorctl start all

sleep 5

echo "✅ Website should be ready at http://localhost:3000"
echo "📊 Status:"
sudo supervisorctl status | grep -E "(nextjs_app|mongodb)"