# Schema Partials - Quick Reference

## Files Overview

| File | Purpose | Used On |
|------|---------|---------|
| `enhanced-schema.hbs` | BlogPosting & WebPage schemas | Posts & Pages |
| `website-schema.hbs` | Website & Organization | Homepage only |
| `breadcrumb-schema.hbs` | Navigation breadcrumbs | Posts, Tags, Authors |
| `itemlist-schema.hbs` | Post collections | Archives, Index |

## How It Works

All schema partials are included in `default.hbs` after the `{{ghost_head}}` helper:

```handlebars
{{ghost_head}}

{{> "schema/website-schema"}}
{{> "schema/enhanced-schema"}}
{{> "schema/breadcrumb-schema"}}
{{> "schema/itemlist-schema"}}
```

Each partial uses Handlebars conditionals (`{{#is}}`, `{{#post}}`, etc.) to only render on appropriate pages.

## Quick Test

After deploying, test with:

```bash
# Test homepage
curl -s YOUR_SITE_URL | grep -o '"@type":"[^"]*"' | sort | uniq

# Should show: "WebSite", "Organization"
```

```bash
# Test blog post
curl -s YOUR_SITE_URL/your-post-slug | grep -o '"@type":"[^"]*"' | sort | uniq

# Should show: "BlogPosting", "BreadcrumbList"
```

## Maintenance Notes

- Keep organization details in `website-schema.hbs` updated
- Add new social profiles to the `sameAs` arrays
- Ensure author profiles in Ghost admin are complete
- Test after Ghost updates

## Schema Types Reference

### BlogPosting Properties
- headline, description, author
- datePublished, dateModified
- image, keywords, articleSection
- publisher, mainEntityOfPage
- wordCount, inLanguage, copyrightHolder

### Organization Properties
- name, alternateName, description
- url, logo, sameAs
- foundingDate, founder, knowsAbout

### BreadcrumbList Properties
- itemListElement (array of ListItems)
- Each item: position, name, item (URL)

### ItemList Properties
- itemListElement (array of blog post URLs)
- Each item: position, url

