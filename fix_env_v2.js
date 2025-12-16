
const fs = require('fs');
const path = require('path');

const envPath = path.join(__dirname, '.env');

try {
    const envContent = fs.readFileSync(envPath, 'utf8');
    const lines = envContent.split(/\r?\n/);
    let updated = false;

    const newLines = lines.map(line => {
        const parts = line.split('=');
        if (parts.length >= 2) {
            const key = parts[0].trim();
            if (key === 'YOUR_KEY_ID' || key === 'YOUR_KEY_SECRET') {
                let value = parts.slice(1).join('=').trim(); // Handle values with = in them if any (rare for these keys)

                // Check if it has quotes
                if (value.includes('"') || value.includes("'")) {
                    console.log(`Fixing quotes in ${key}`);
                    // Remove all quotes from start/end or generally
                    // Usually safer to just strip surrounding quotes, but diagnostic said "contains".
                    // Let's strip ALL quotes to be sure, assuming keys don't have them (Razorpay keys are usually alnum).
                    const original = value;
                    value = value.replace(/['"]/g, '');
                    if (original !== value) updated = true;
                }
                return `${key}=${value}`;
            }
        }
        return line;
    });

    if (updated) {
        fs.writeFileSync(envPath, newLines.join('\n'));
        console.log("Successfully cleaned .env file.");
    } else {
        console.log("No changes made. Are the quotes hidden?");
    }

} catch (err) {
    console.error("Error:", err);
}
