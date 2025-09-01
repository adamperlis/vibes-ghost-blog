# Vibes Ghost Blog - Deployment Workflow

## Repository Structure
- **Main Repository**: `adamperlis/vibes-ghost-blog` - Ghost installation and configuration
- **Theme Repository**: `adamperlis/vibes-theme` - Custom Vibes theme (submodule)

## Production Environment
- **Server**: 165.22.35.77 (Digital Ocean)
- **Domain**: https://vibes.b150.ai
- **Ghost Version**: 6.0.6
- **Location**: `/var/www/ghost/`
- **Service**: `ghost_vibes-b150-ai`

## Deployment Process

### 1. Theme Updates
When making theme changes:
```bash
# 1. Make changes in content/themes/vibes-theme/
# 2. Commit and push theme changes
cd content/themes/vibes-theme
git add .
git commit -m "Description of changes"
git push

# 3. Update main repository submodule
cd /Users/adamperlis/code/Vibes
git add content/themes/vibes-theme
git commit -m "Update vibes-theme submodule"
```

**Then upload via Ghost Admin:**
- Go to https://vibes.b150.ai/ghost/#/settings/design
- Click "Change theme" → "Upload theme"
- Upload `content/themes/vibes-theme/dist/vibes-theme.zip`
- Activate the theme

### 2. Ghost Core Updates
For Ghost version updates:
```bash
# Local update
nvm use 22.13.1  # Use supported Node version
ghost update

# Production update (SSH to server)
ssh root@165.22.35.77
cd /var/www/ghost
ghost update
systemctl restart ghost_vibes-b150-ai
```

### 3. Email Template Updates
For email styling changes:
```bash
# 1. Test locally in versions/[version]/core/server/services/email-service/email-templates/partials/styles.hbs
# 2. Apply to production
ssh root@165.22.35.77
# Backup original
cp /var/www/ghost/current/core/server/services/email-service/email-templates/partials/styles.hbs /var/www/ghost/current/core/server/services/email-service/email-templates/partials/styles.hbs.backup-$(date +%Y%m%d-%H%M%S)
# Apply changes (upload improved file)
systemctl restart ghost_vibes-b150-ai
```

### 4. Configuration Updates
For config changes:
```bash
# Production config location: /var/www/ghost/config.production.json
# Always backup before changes:
ssh root@165.22.35.77
cp /var/www/ghost/config.production.json /var/www/ghost/config.production.json.backup-$(date +%Y%m%d-%H%M%S)
# Edit config
systemctl restart ghost_vibes-b150-ai
```

## Quick Commands

### Check Production Status
```bash
ssh root@165.22.35.77 "systemctl status ghost_vibes-b150-ai"
```

### View Production Logs
```bash
ssh root@165.22.35.77 "journalctl -u ghost_vibes-b150-ai -f"
```

### Restart Ghost
```bash
ssh root@165.22.35.77 "systemctl restart ghost_vibes-b150-ai"
```

## Backup Strategy
- **Database**: Automatic Ghost backups in `/var/www/ghost/content/data/`
- **Theme**: Version controlled in GitHub
- **Config**: Manual backups before changes
- **Content**: Ghost admin export feature

## Recent Changes Applied
✅ **Email Template Spacing** - Reduced paragraph margins from 1.5em to 0.75em
✅ **Theme Spacing** - Improved content flow with reduced margins
✅ **Ghost Version** - Updated to 6.0.6 to match production
✅ **Git Setup** - Repositories configured and changes committed
