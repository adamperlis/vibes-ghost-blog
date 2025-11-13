# Vibes Theme - Enhanced Schema Implementation

This document explains the custom Schema.org structured data implementation for the Vibes theme.

## Overview

The Vibes theme includes comprehensive schema markup that goes beyond Ghost's default implementation to provide better SEO and richer search results. All schema is implemented using JSON-LD format.

## What's Included

### 1. BlogPosting Schema (`schema/enhanced-schema.hbs`)

**Used on:** Individual blog posts

**Benefits:**
- More specific than Ghost's default `Article` type
- Better describes blog content to search engines
- Includes detailed author information
- Comprehensive organization/publisher data
- Copyright and licensing information
- Full keyword/tag integration

**Key Properties:**
- `@type: BlogPosting` (instead of generic Article)
- Complete author details with social profiles
- Publication and modification dates
- Featured images with dimensions
- Word count and reading time
- Article section/category
- Copyright holder information

### 2. Website & Organization Schema (`schema/website-schema.hbs`)

**Used on:** Homepage only

**Benefits:**
- Establishes Vibes as an organization
- Enables Google sitelinks search box
- Provides founding information
- Links social profiles
- Defines knowledge areas

**Key Features:**
- `SearchAction` for site search in Google results
- Organization founding date and founder
- Knowledge areas (Builder Economy, AI, etc.)
- Social media profile links
- Logo and branding information

### 3. Breadcrumb Schema (`schema/breadcrumb-schema.hbs`)

**Used on:** Posts, tag pages, author pages

**Benefits:**
- Shows breadcrumbs in search results
- Helps Google understand site hierarchy
- Improves navigation clarity
- Better internal linking signals

**Structure:**
- Posts: Home → Tag → Post
- Tags: Home → Tag
- Authors: Home → Authors → Author

### 4. ItemList Schema (`schema/itemlist-schema.hbs`)

**Used on:** Homepage, tag archives, author archives, index pages

**Benefits:**
- Helps search engines understand post collections
- Improves archive page understanding
- Better crawling and indexing
- Potential for enhanced search results

## Schema File Structure

```
partials/
└── schema/
    ├── enhanced-schema.hbs      # BlogPosting & WebPage schemas
    ├── website-schema.hbs       # Website & Organization schemas
    ├── breadcrumb-schema.hbs    # Breadcrumb navigation
    └── itemlist-schema.hbs      # Post list collections
```

## Testing Your Schema

### 1. Google Rich Results Test

Test individual URLs with Google's tool:
https://search.google.com/test/rich-results

**What to test:**
- Homepage (for Website/Organization schema)
- Individual blog posts (for BlogPosting/Breadcrumb)
- Tag archive pages (for ItemList/Breadcrumb)
- Author pages (for ItemList/Breadcrumb)

### 2. Schema.org Validator

Validate JSON-LD structure:
https://validator.schema.org/

**Steps:**
1. View page source
2. Copy JSON-LD script content
3. Paste into validator
4. Fix any warnings or errors

### 3. Chrome DevTools

Inspect schema directly in browser:

1. Open DevTools (F12)
2. Go to Elements tab
3. Search for `application/ld+json`
4. Review JSON structure

### 4. Manual Verification Checklist

For each page type, verify:

**Blog Posts:**
- [ ] BlogPosting @type is present
- [ ] Author information is complete
- [ ] Dates are ISO 8601 format
- [ ] Images include dimensions
- [ ] Tags/keywords are included
- [ ] Breadcrumbs show correct hierarchy

**Homepage:**
- [ ] Website schema is present
- [ ] Organization details are complete
- [ ] SearchAction is configured
- [ ] Logo is referenced
- [ ] Social profiles are linked

**Archive Pages:**
- [ ] ItemList shows all visible posts
- [ ] Position numbers are sequential
- [ ] URLs are absolute and correct

## Common Issues & Fixes

### Issue: Duplicate Schema

**Problem:** Ghost's default schema conflicts with custom schema

**Solution:** Our custom schema uses different @type values (`BlogPosting` vs `Article`) and includes additional properties. Both can coexist without issues. Google will merge the data.

### Issue: Missing Images

**Problem:** No featured image set on post

**Solution:** Always set featured images. The schema will gracefully handle missing images, but results are better with images included.

### Issue: Author Social Links Not Showing

**Problem:** Author profiles missing social data

**Solution:** Update author profiles in Ghost admin to include:
- Twitter handle
- Facebook profile
- Website URL
- Bio/description

### Issue: SearchAction Not Working

**Problem:** Site search doesn't appear in Google results

**Solution:** 
1. Verify SearchAction is in homepage schema
2. Ensure your site has functioning search
3. Wait for Google to recrawl and index
4. Verify using Rich Results Test

## Customization

### Updating Organization Details

Edit `schema/website-schema.hbs` to update:
- Organization name and description
- Social media profiles
- Founding date
- Knowledge areas
- Publishing principles URL

### Adding More Social Profiles

Edit `schema/enhanced-schema.hbs` and `schema/website-schema.hbs` to add more platforms to the `sameAs` array:

```handlebars
"sameAs": [
  "https://github.com/your-username",
  "https://twitter.com/your-handle",
  "https://linkedin.com/company/your-company",
  "https://instagram.com/your-profile"
]
```

### Adjusting Breadcrumb Hierarchy

Edit `schema/breadcrumb-schema.hbs` to change navigation structure or add additional levels.

## Monitoring & Maintenance

### Google Search Console

Monitor in Search Console → Enhancements:
- Breadcrumb issues
- Article errors
- Logo warnings

### Regular Checks

- Monthly: Run Rich Results Test on new posts
- Quarterly: Validate all schema types
- After theme updates: Re-test all page types

## Performance Impact

**Impact:** Minimal (< 5KB additional HTML per page)

- Schema is static JSON-LD in `<head>`
- No JavaScript execution required
- Does not affect page load speed
- Improves crawl efficiency

## Schema Comparison: Before vs After

| Feature | Ghost Default | Vibes Enhanced |
|---------|--------------|----------------|
| Post Type | Article | BlogPosting |
| Breadcrumbs | ❌ No | ✅ Yes |
| Organization | Basic | Detailed |
| SearchAction | ❌ No | ✅ Yes |
| ItemList | ❌ No | ✅ Yes |
| Author Social | Limited | Complete |
| Copyright | ❌ No | ✅ Yes |
| Knowledge Areas | ❌ No | ✅ Yes |

## Resources

- [Schema.org BlogPosting](https://schema.org/BlogPosting)
- [Google Search Structured Data](https://developers.google.com/search/docs/appearance/structured-data)
- [JSON-LD Format](https://json-ld.org/)
- [Ghost Theme API](https://ghost.org/docs/themes/)

## Support

For issues or questions:
- Check Ghost Theme documentation
- Validate with Schema.org validator
- Test with Google Rich Results Test
- Review Ghost Handlebars helpers documentation

