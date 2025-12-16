const dotenv = require('dotenv');
const result = dotenv.config();

console.log('Dotenv config result error:', result.error ? result.error.message : 'None');
console.log('Dotenv parsed keys:', result.parsed ? Object.keys(result.parsed) : 'None');

console.log('Checking specific keys:');
console.log('YOUR_KEY_ID:', process.env.YOUR_KEY_ID ? 'EXISTS (' + process.env.YOUR_KEY_ID.length + ' chars)' : 'MISSING');
console.log('YOUR_KEY_SECRET:', process.env.YOUR_KEY_SECRET ? 'EXISTS' : 'MISSING');
