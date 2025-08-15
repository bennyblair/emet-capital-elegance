#!/usr/bin/env node

const { spawn } = require('child_process');
const path = require('path');

// Start Vite development server
const vite = spawn('npx', ['vite', '--port', '8080'], {
  stdio: 'inherit',
  cwd: process.cwd()
});

vite.on('close', (code) => {
  process.exit(code);
});

vite.on('error', (err) => {
  console.error('Failed to start development server:', err);
  process.exit(1);
});