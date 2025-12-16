
require("dotenv").config();

const keyId = process.env.YOUR_KEY_ID;
const keySecret = process.env.YOUR_KEY_SECRET;

console.log("--- Razorpay Key Diagnostics ---");

if (!keyId) {
    console.log("YOUR_KEY_ID: MISSING");
} else {
    console.log(`YOUR_KEY_ID: Found (Length: ${keyId.length})`);
    console.log(`YOUR_KEY_ID Start/End: '${keyId.substring(0, 4)}...${keyId.substring(keyId.length - 4)}'`);
    if (keyId.trim() !== keyId) console.log("WARNING: YOUR_KEY_ID has leading/trailing spaces!");
    if (keyId.includes('"') || keyId.includes("'")) console.log("WARNING: YOUR_KEY_ID contains quotes!");
}

if (!keySecret) {
    console.log("YOUR_KEY_SECRET: MISSING");
} else {
    console.log(`YOUR_KEY_SECRET: Found (Length: ${keySecret.length})`);
    console.log(`YOUR_KEY_SECRET Start/End: '${keySecret.substring(0, 4)}...${keySecret.substring(keySecret.length - 4)}'`);
    if (keySecret.trim() !== keySecret) console.log("WARNING: YOUR_KEY_SECRET has leading/trailing spaces!");
    if (keySecret.includes('"') || keySecret.includes("'")) console.log("WARNING: YOUR_KEY_SECRET contains quotes!");
}

console.log("--------------------------------");
