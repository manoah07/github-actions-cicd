const app = require('./app');

console.log('Running tests...');

// Simple test
if (typeof app === 'object') {
  console.log('✓ App module loaded successfully');
  process.exit(0);
} else {
  console.log('✗ App module failed to load');
  process.exit(1);
}