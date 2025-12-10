# Complete Website Migration & Rebranding Prompt

## Instructions
Use this prompt to completely rebrand and migrate the Mitolyn website to a new brand/domain. Simply replace `[NEW_DOMAIN]` and `[NEW_BRAND_NAME]` with your new domain and brand name, then follow all steps.

**New Domain:** `[NEW_DOMAIN]` (e.g., mtolyn.store)  
**New Brand Name:** `[NEW_BRAND_NAME]` (e.g., Mitolyn)

**IMPORTANT: Brand Name Capitalization Rules**
- **Capitalize** at the START of sentences: "Mitolyn delivers..."
- **Lowercase** in the MIDDLE of sentences: "...with Mitolyn's formula..."
- **Lowercase** in alt text, attributes, and technical references
- **Always capitalize** in titles and headings

---

## STEP 1: Domain Replacement (Find & Replace All URLs)

Replace all occurrences of the old domain with the new domain across all files:

**Old Domain:** `https://mtolyn-us.us` or `https://mtolyn-us.com`  
**New Domain:** `[NEW_DOMAIN]`

### Files to Update:
1. `src/app/layout.tsx` - Update OpenGraph URL and canonical URL
2. `src/app/sitemap.ts` - Update baseUrl
3. `src/app/robots.ts` - Update sitemap URL
4. `src/components/StructuredData.tsx` - Update baseUrl
5. All page files in `src/app/*/page.tsx` - Update canonical URLs:
   - `src/app/privacy-policy/page.tsx`
   - `src/app/disclaimer/page.tsx`
   - `src/app/terms/page.tsx`
   - `src/app/order-tracking/page.tsx`
   - `src/app/refund-policy/page.tsx`
   - `src/app/contact-us/page.tsx`

**Search Pattern:** Find `mtolyn-us.us` or `mtolyn-us.com` and replace with `[NEW_DOMAIN]` (without https://)

---

## STEP 2: Brand Name Replacement

Replace all occurrences of "Mitolyn" with `[NEW_BRAND_NAME]` throughout the codebase:

### Files to Update:
- All component files in `src/components/*.tsx`
- All page files in `src/app/*/page.tsx`
- `src/app/layout.tsx`
- `src/components/StructuredData.tsx`

### Capitalization Rules:
- **Capitalize** at sentence starts: "Mitolyn is a..."
- **Lowercase** in middle: "...with Mitolyn's formula..."
- **Lowercase** in alt text: `alt="mitolyn supplement"`
- **Capitalize** in titles: "Mitolyn Official"

### Fix Capitalization Commands:
```bash
# Fix capitalization after periods
find src/app -name "*.tsx" -type f -exec sed -i '' 's/\. mitolyn/. Mitolyn/g' {} \;

# Fix capitalization after exclamation marks
find src/app -name "*.tsx" -type f -exec sed -i '' 's/! mitolyn/! Mitolyn/g' {} \;

# Fix capitalization after question marks
find src/app -name "*.tsx" -type f -exec sed -i '' 's/? mitolyn/? Mitolyn/g' {} \;

# Fix paragraph starts (manual review needed)
```

**Note:** Keep the brand name consistent - use `[NEW_BRAND_NAME]` everywhere, including:
- Page titles
- Meta descriptions
- Content text
- Component names (optional, but recommended for uniqueness)
- Structured data

---

## STEP 3: SEO Optimization (Make Unique)

Update all SEO metadata to be unique but similar in structure:

### In `src/app/layout.tsx`:

**Current Title:** "Mitolyn™ Official | Metabolism Booster & Fat Burner"  
**New Title:** "[NEW_BRAND_NAME]™ Official | [Unique Value Proposition]"
- **Keep under 60 characters**

**Current Description:** "Mitolyn official site - premium metabolism booster and fat burner. Discover benefits, read reviews, and purchase Mitolyn for weight loss support and enhanced energy."  
**New Description:** "[NEW_BRAND_NAME] official site - [unique description with different wording but same intent]. Explore benefits, reviews, and order [NEW_BRAND_NAME] for weight management and vitality."
- **Keep under 160 characters**
- **Use 30-40% different wording**

**Keywords:** Update keywords to include `[NEW_BRAND_NAME]` and variations, remove old brand references

### Update All Page Metadata:
- Privacy Policy page
- Disclaimer page
- Terms page
- Order Tracking page
- Refund Policy page
- Contact Us page

**Strategy:** Rewrite descriptions to have similar meaning but different wording to avoid duplicate content penalties.

---

## STEP 4: Content Uniqueness (Rewrite Content)

Update all content to start with `[NEW_BRAND_NAME]` (capitalized) and use different wording:

### Key Components to Update:

1. **Hero Section** (`src/components/Hero.tsx`):
   - Rewrite the main description with different wording
   - Keep the same structure but change sentence construction
   - Update heading to use `[NEW_BRAND_NAME]`
   - Change background gradient colors

2. **WhatIsMitolyn Component** (`src/components/WhatIsMitolyn.tsx`):
   - Rename component to `WhatIs[NEW_BRAND_NAME]` (optional)
   - Rewrite all paragraphs starting with `[NEW_BRAND_NAME]` (capitalized)
   - Use synonyms and different sentence structures
   - Change section background color

3. **HowItWorks Component** (`src/components/HowItWorks.tsx`):
   - Rewrite all bullet points with different wording
   - Keep the same information but change phrasing
   - Ensure `[NEW_BRAND_NAME]` is capitalized at sentence starts

4. **Benefits Component** (`src/components/Benefits.tsx`):
   - Rewrite all benefit descriptions
   - Use different adjectives and phrasing
   - Ensure `[NEW_BRAND_NAME]` is capitalized at sentence starts

5. **Ingredients Component** (`src/components/Ingredients.tsx`):
   - Keep ingredients the same (if applicable)
   - Rewrite descriptions with different wording
   - Update all references to `[NEW_BRAND_NAME]` (capitalized at starts)

6. **Reviews Component** (`src/components/Reviews.tsx`):
   - Update customer names and locations (make them unique)
   - Rewrite review text with different wording
   - Change weight loss numbers slightly (e.g., 35 lbs → 32 lbs, 29 lbs → 27 lbs)
   - Change section background color

7. **FAQ Component** (`src/components/FAQ.tsx`):
   - Rewrite all questions and answers
   - Keep same topics but different wording
   - Ensure all answers start with `[NEW_BRAND_NAME]` (capitalized)

8. **All Policy Pages:**
   - Rewrite content to be unique
   - Update all references to `[NEW_BRAND_NAME]` (capitalized at sentence starts)
   - Change wording while maintaining legal accuracy

---

## STEP 5: Design Differentiation

Make subtle design changes to differentiate from original:

### Color Scheme Updates (Actual Changes Made):

1. **Hero Section Background:**
   - **Old:** `linear-gradient(135deg, #1e40af 0%, #3b82f6 50%, #60a5fa 100%)` (blue)
   - **New:** `linear-gradient(135deg, #7c3aed 0%, #a855f7 50%, #c084fc 100%)` (purple)

2. **Header/Navbar:**
   - **Old:** `linear-gradient(135deg, #667eea 0%, #764ba2 100%)` (purple)
   - **New:** `linear-gradient(135deg, #0ea5e9 0%, #06b6d4 50%, #14b8a6 100%)` (cyan/teal)

3. **Section Backgrounds:**
   - **Reviews section:** `#1098b7` → `#ec4899` (pink)
   - **ScientificDiscovery:** `#1098b7` → `#a855f7` (purple)
   - **Guarantee:** `#1098b7` → `#ec4899` (pink)
   - **ActNow:** `#1098b7` → `#ec4899` (pink)
   - **Bonuses:** `#1098b7` → `#8b5cf6` (purple)
   - **WhatIsMitolyn:** `#1098b7` → `#8b5cf6` (purple)
   - **WhyChoose:** `linear-gradient(135deg, #667eea 0%, #764ba2 100%)` → `linear-gradient(135deg, #0ea5e9 0%, #06b6d4 50%, #14b8a6 100%)`

### Typography:
- Keep Arial, maintain font sizes/weights
- Ensure consistent `fontFamily: 'Arial, sans-serif'` throughout

### Spacing:
- Keep existing padding/margins (no changes needed)

---

## STEP 6: Image URLs & Assets

### Update Image References:
1. Check all image URLs in components
2. If using ImageKit or CDN, update paths to new brand folder (if applicable)
3. Update alt text to use `[NEW_BRAND_NAME]` (lowercase in alt text)
4. Update logo references in Header component

### Favicon:
- Update favicon URL in `src/app/layout.tsx` (if needed)
- Ensure new favicon is uploaded and accessible

---

## STEP 7: Structured Data Updates

### In `src/components/StructuredData.tsx`:
1. Update `baseUrl` to `[NEW_DOMAIN]`
2. Update organization name to `[NEW_BRAND_NAME] Official`
3. Update logo URL
4. Update product name in schema
5. Update all brand references
6. Rewrite FAQ schema content with different wording

---

## STEP 8: Remove Old Brand Traces

### Search and Remove:
1. Any hardcoded old brand text (except in this migration guide)
2. Old domain references
3. Old brand-specific image paths
4. Old analytics IDs (if any)
5. Old verification codes (Bing, Google, etc.) - Add new ones

---

## STEP 9: Update Verification Codes

### In `src/app/layout.tsx`:
1. **Bing Verification:**
   - Keep or update: `<meta name="msvalidate.01" content="DF238DB2B8BB655EFD6CF96236274D79" />`
   - Or add new Bing verification code for new domain

2. **Google Analytics:**
   - Update Google Analytics ID if present
   - Update Google Tag Manager ID

3. **Other Verification:**
   - Update any other platform verification codes

---

## STEP 10: Sitemap & Robots.txt

### `src/app/sitemap.ts`:
- Base URL already updated in Step 1
- Verify all URLs use new domain
- Check all page paths are correct

### `src/app/robots.ts`:
- Sitemap URL already updated in Step 1
- Verify robots.txt rules are appropriate

---

## STEP 11: Component File Names (Optional but Recommended)

For maximum uniqueness, consider renaming components:
- `WhatIsMitolyn.tsx` → `WhatIs[NEW_BRAND_NAME].tsx`
- `WhyChoose.tsx` → `WhyChoose[NEW_BRAND_NAME].tsx`
- Update imports in `src/app/page.tsx`

---

## STEP 12: Final Checklist

Before deploying, verify:

- [ ] All domain URLs updated
- [ ] All old brand references replaced with `[NEW_BRAND_NAME]`
- [ ] Brand name capitalized at sentence starts
- [ ] Brand name lowercase in middle of sentences
- [ ] SEO metadata updated and unique
- [ ] Title under 60 characters
- [ ] Description under 160 characters
- [ ] All content rewritten (not just find-replace)
- [ ] Design colors changed
- [ ] Images updated
- [ ] Structured data updated
- [ ] Verification codes updated
- [ ] Sitemap uses new domain
- [ ] Robots.txt uses new domain
- [ ] No old brand traces remain
- [ ] All canonical URLs updated
- [ ] Favicon updated
- [ ] Test all pages load correctly
- [ ] Test all links work
- [ ] Verify sitemap.xml is accessible at `[NEW_DOMAIN]/sitemap.xml`

---

## Quick Command Reference

```bash
# Find all old domain references
grep -r "mtolyn-us" src/

# Find all old brand references
grep -r "Mitolyn" src/

# Find all old brand references (case insensitive)
grep -ri "mitolyn" src/

# Fix capitalization after periods
find src/app -name "*.tsx" -type f -exec sed -i '' 's/\. mitolyn/. Mitolyn/g' {} \;

# Fix capitalization after exclamation marks
find src/app -name "*.tsx" -type f -exec sed -i '' 's/! mitolyn/! Mitolyn/g' {} \;

# Fix capitalization after question marks
find src/app -name "*.tsx" -type f -exec sed -i '' 's/? mitolyn/? Mitolyn/g' {} \;
```

---

## Example Usage

**Input:**
- New Domain: `mtolyn.store`
- New Brand: `Mitolyn`

**Actions:**
1. Replace `mtolyn-us.us` → `mtolyn.store`
2. Replace `Mitolyn` → `Mitolyn` (keep same, but fix capitalization)
3. Update SEO: "Mitolyn™ Official | Metabolic Support & Weight Management" (55 chars)
4. Rewrite all content with Mitolyn (capitalized at starts)
5. Change hero gradient to purple tones (#7c3aed, #a855f7, #c084fc)
6. Change header to cyan/teal gradient (#0ea5e9, #06b6d4, #14b8a6)
7. Update section backgrounds to pink/purple
8. Fix capitalization throughout
9. Update all verification codes
10. Deploy and verify

---

## Important Notes

1. **Content Uniqueness:** Don't just find-replace. Actually rewrite sentences to avoid duplicate content issues.

2. **SEO Variation:** Change meta descriptions by 30-40% while keeping the same intent.

3. **Title/Description Length:** Keep title under 60 characters, description under 160 characters.

4. **Capitalization:** Brand name should be capitalized at sentence starts, lowercase in middle of sentences.

5. **Legal Pages:** Privacy Policy, Terms, etc. can be similar but should have unique wording.

6. **Images:** Use different images if possible, or at least update alt text.

7. **Testing:** Always test the site after migration to ensure everything works.

8. **Search Engines:** Submit new sitemap to Google Search Console and Bing Webmaster Tools.

---

## Post-Migration Tasks

1. Submit new sitemap to search engines
2. Set up Google Analytics for new domain
3. Set up Bing Webmaster Tools verification
4. Update any external links pointing to old domain
5. Set up 301 redirects from old domain (if applicable)
6. Monitor for any broken links or missing assets

---

**END OF MIGRATION PROMPT**
