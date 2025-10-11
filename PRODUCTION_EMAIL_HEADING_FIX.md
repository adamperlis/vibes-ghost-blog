# Production Email Heading Size Fix

## Server Details
- IP: 165.22.35.77
- Platform: DigitalOcean Ghost Droplet

## Instructions

### Step 1: SSH into your server
```bash
ssh root@165.22.35.77
```

### Step 2: Switch to ghost-mgr user
```bash
sudo -i -u ghost-mgr
```

### Step 3: Navigate to Ghost installation
```bash
cd /var/www/ghost
```

### Step 4: Check your Ghost version
```bash
ghost version
```

### Step 5: Find the email styles file
```bash
# List available Ghost versions
ls -la versions/

# The file you need to edit is:
# versions/YOUR_VERSION/core/server/services/email-service/email-templates/partials/styles.hbs
```

### Step 6: Create a backup first!
```bash
# Replace YOUR_VERSION with your actual Ghost version (e.g., 6.0.6)
cp versions/YOUR_VERSION/core/server/services/email-service/email-templates/partials/styles.hbs versions/YOUR_VERSION/core/server/services/email-service/email-templates/partials/styles.hbs.backup
```

### Step 7: Edit the file
```bash
# Replace YOUR_VERSION with your actual Ghost version
nano versions/YOUR_VERSION/core/server/services/email-service/email-templates/partials/styles.hbs
```

### Step 8: Find and replace (around line 266-297)

**FIND THESE LINES:**
```css
h1 {
    margin: 1.5em 0 0.5em 0;
    font-size: 42px;
}

h2 {
    margin: 1.5em 0 0.5em 0;
    font-size: 32px;
}

h3 {
    margin: 1.5em 0 0.5em 0;
    font-size: 26px;
}

h4 {
    margin: 1.8em 0 0.5em 0;
    font-size: 21px;
    line-height: 1.2em;
}

h5 {
    margin: 2em 0 0.5em 0;
    font-size: 19px;
    line-height: 1.3em;
}

h6 {
    margin: 2em 0 0.5em 0;
    font-size: 19px;
    line-height: 1.3em;
}
```

**REPLACE WITH:**
```css
h1 {
    margin: 1.5em 0 0.5em 0;
    font-size: 34px;
}

h2 {
    margin: 1.5em 0 0.5em 0;
    font-size: 26px;
}

h3 {
    margin: 1.5em 0 0.5em 0;
    font-size: 22px;
}

h4 {
    margin: 1.8em 0 0.5em 0;
    font-size: 18px;
    line-height: 1.2em;
}

h5 {
    margin: 2em 0 0.5em 0;
    font-size: 17px;
    line-height: 1.3em;
}

h6 {
    margin: 2em 0 0.5em 0;
    font-size: 17px;
    line-height: 1.3em;
}
```

### Step 9: Save the file
- Press `Ctrl + X`
- Press `Y` to confirm
- Press `Enter` to save

### Step 10: Restart Ghost
```bash
ghost restart
```

### Step 11: Verify Ghost is running
```bash
ghost status
```

### Step 12: Exit back to root
```bash
exit
```

## Important Notes

⚠️ **These changes will be lost when you upgrade Ghost to a new version!**

After any Ghost update, you'll need to:
1. Re-apply these changes to the new version's styles file
2. Restart Ghost

## Testing

Send yourself a test email newsletter from Ghost admin to verify the heading sizes look good!

## Rollback Instructions

If something goes wrong:
```bash
sudo -i -u ghost-mgr
cd /var/www/ghost
# Replace YOUR_VERSION with your actual Ghost version
cp versions/YOUR_VERSION/core/server/services/email-service/email-templates/partials/styles.hbs.backup versions/YOUR_VERSION/core/server/services/email-service/email-templates/partials/styles.hbs
ghost restart
exit
```

