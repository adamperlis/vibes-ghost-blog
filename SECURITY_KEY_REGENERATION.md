# URGENT: RSA Private Key Regeneration Required

## ⚠️ Security Issue Resolved

GitGuardian detected exposed RSA private keys in your GitHub repository. The following actions have been completed:

### What Was Done:
1. ✅ Removed exposed JSON export files containing RSA private keys
2. ✅ Updated `.gitignore` to prevent future exposure of Ghost export files
3. ✅ Removed files from entire Git history using `git filter-branch`
4. ✅ Force-pushed changes to GitHub to overwrite remote history
5. ✅ Cleaned up Git refs and garbage collected

### Exposed Keys:
The following keys were exposed in Ghost export files:
- `ghost_private_key` - Used for Ghost admin authentication
- `members_private_key` - Used for member authentication

## 🚨 CRITICAL: You Must Regenerate These Keys

Since these keys were publicly exposed on GitHub, they are now compromised. You **MUST** regenerate them immediately.

### How to Regenerate Ghost Keys:

#### Option 1: Delete and Regenerate via Database (Recommended)

1. **Backup your Ghost database first:**
   ```bash
   cp content/data/ghost-local.db content/data/ghost-local.db.backup-$(date +%Y%m%d)
   ```

2. **Stop Ghost if it's running:**
   ```bash
   ghost stop
   ```

3. **Access your Ghost database:**
   ```bash
   sqlite3 content/data/ghost-local.db
   ```

4. **Delete the compromised keys:**
   ```sql
   DELETE FROM settings WHERE key = 'ghost_public_key';
   DELETE FROM settings WHERE key = 'ghost_private_key';
   DELETE FROM settings WHERE key = 'members_public_key';
   DELETE FROM settings WHERE key = 'members_private_key';
   .exit
   ```

5. **Restart Ghost (it will regenerate the keys automatically):**
   ```bash
   ghost start
   ```

#### Option 2: Manual Key Generation

If you prefer to generate keys manually:

1. Generate new RSA key pairs using OpenSSL:
   ```bash
   # Generate Ghost keys
   openssl genrsa -out ghost_private.pem 1024
   openssl rsa -in ghost_private.pem -pubout -out ghost_public.pem
   
   # Generate Members keys
   openssl genrsa -out members_private.pem 1024
   openssl rsa -in members_private.pem -pubout -out members_public.pem
   ```

2. Update the keys in your Ghost database settings table

3. **Important:** Delete the PEM files after updating the database

### Verify Key Regeneration:

After regeneration, verify the new keys are in place:

```bash
sqlite3 content/data/ghost-local.db "SELECT key, substr(value, 1, 50) FROM settings WHERE key LIKE '%_key';"
```

The output should show different key values than before.

## Additional Security Measures:

1. **Review GitHub Access:** Check who has access to your repository
2. **Audit Recent Activity:** Review any suspicious authentication attempts in Ghost
3. **Rotate Passwords:** Consider rotating your Ghost admin password
4. **Enable 2FA:** If not already enabled, set up two-factor authentication for your Ghost admin account

## Prevention:

- Never commit Ghost export files (`.json` exports) to Git
- The `.gitignore` has been updated to prevent this in the future
- When creating backups, store them outside the Git repository
- Use Ghost's built-in backup features or store exports in a secure location

## Questions?

If you need help with any of these steps, please refer to:
- Ghost Documentation: https://ghost.org/docs/
- Ghost Forum: https://forum.ghost.org/

---

**Date of Incident:** October 11, 2025  
**Resolution Date:** October 11, 2025  
**Status:** Keys removed from repository, awaiting regeneration

