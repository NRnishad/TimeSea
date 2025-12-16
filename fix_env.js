
const fs = require('fs');
const path = require('path');

const envPath = path.join(__dirname, '.env');

try {
    let envContent = fs.readFileSync(envPath, 'utf8');

    // Regex to remove quotes around values for specific keys or generally
    // This regex looks for YOUR_KEY_ID="value" or YOUR_KEY_ID='value' and keeps just value
    // It handles the specific keys we know are problematic

    const keysToFix = ['YOUR_KEY_ID', 'YOUR_KEY_SECRET'];

    let updated = false;

    keysToFix.forEach(key => {
        // Replace "value" with value
        const regexDouble = new RegExp(`${key}="([^"]+)"`, 'g');
        if (regexDouble.test(envContent)) {
            envContent = envContent.replace(regexDouble, `${key}=$1`);
            console.log(`Fixed double quotes for ${key}`);
            updated = true;
        }

        // Replace 'value' with value
        const regexSingle = new RegExp(`${key}='([^']+)'`, 'g');
        if (regexSingle.test(envContent)) {
            envContent = envContent.replace(regexSingle, `${key}=$1`);
            console.log(`Fixed single quotes for ${key}`);
            updated = true;
        }
    });

    if (updated) {
        fs.writeFileSync(envPath, envContent);
        console.log(".env file updated successfully.");
    } else {
        console.log("No quotes found to fix in .env for Razorpay keys.");
        // Fallback: maybe they are not formatted as KEY="val", but KEY = "val"?
        // Let's try a more loose regex just in case
        console.log("File content check complete.");
    }

} catch (err) {
    console.error("Error processing .env file:", err);
}
