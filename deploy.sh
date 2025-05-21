#!/bin/bash

SERVER="root@46.36.221.22"
REMOTE_PATH="/var/www/roataway_ro_usr/data/www/roataway.ro"
APP_NAME="roataway"
PORT=3005

ssh -o StrictHostKeyChecking=no $SERVER << EOF
  cd $REMOTE_PATH || { echo "Directory not found"; exit 1; }

  echo "Resetting local changes..."
  git reset --hard || { echo "Git reset failed"; exit 1; }

  echo "Removing untracked files..."
  git clean -fd || { echo "Git clean failed"; exit 1; }

  echo "Pulling latest changes..."
  git pull origin main || { echo "Git pull failed"; exit 1; }

  echo "Installing dependencies..."
  npm install || { echo "npm install failed"; exit 1; }

  echo "Building the application..."
  npm run build || { echo "Build failed"; exit 1; }

  echo "Stopping old PM2 process..."
  pm2 stop $APP_NAME || echo "No process to stop"
  pm2 delete $APP_NAME || echo "No process to delete"

  echo "Starting application with PM2..."
  pm2 start npm --name "$APP_NAME" -- start -- -p $PORT || { echo "Failed to start PM2 process"; exit 1; }

  echo "Saving PM2 process list..."
  pm2 save || { echo "PM2 save failed"; exit 1; }

  echo "Ensuring PM2 starts on reboot..."
  pm2 startup || { echo "PM2 startup failed"; exit 1; }
EOF
