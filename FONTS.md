# Custom Fonts Setup Guide

This project includes two custom font families: **Array** and **Author**. Both fonts are properly configured and ready to use throughout your Next.js application.

## Available Fonts

### Array Font Family
- `Array Regular` (400)
- `Array Wide` (400)
- `Array Semibold` (600)
- `Array Semibold Wide` (600)
- `Array Bold` (700)
- `Array Bold Wide` (700)

### Author Font Family
- `Author Extralight` (200)
- `Author Light` (300)
- `Author Regular` (400)
- `Author Medium` (500)
- `Author Semibold` (600)
- `Author Bold` (700)
- `Author Variable` (200-700) - **Recommended for flexible weight control**

## How to Use the Fonts

### Method 1: Using Tailwind CSS Classes

```tsx
// Array fonts
<h1 className="font-array-regular">Array Regular Text</h1>
<h2 className="font-array-bold">Array Bold Text</h2>
<p className="font-array-wide">Array Wide Text</p>

// Author fonts
<h1 className="font-author-regular">Author Regular Text</h1>
<h2 className="font-author-bold">Author Bold Text</h2>
<p className="font-author-variable" style={{ fontWeight: 350 }}>
  Author Variable with custom weight
</p>
```

### Method 2: Using Font Utility Classes

```tsx
import { fontClasses, getArrayFont, getAuthorFont } from '@/utils/fonts';

// Using the fontClasses object
<h1 className={fontClasses.array.bold}>Array Bold</h1>
<p className={fontClasses.author.medium}>Author Medium</p>

// Using helper functions
<h2 className={getArrayFont('semibold')}>Array Semibold</h2>
<span className={getAuthorFont('light')}>Author Light</span>
```

### Method 3: Using CSS Variables Directly

```css
.custom-text {
  font-family: var(--font-array-bold);
}

.another-text {
  font-family: var(--font-author-variable);
  font-weight: 450; /* Custom weight for variable font */
}
```

## Variable Fonts

The **Author Variable** font is recommended when you need flexible font weights. You can use any weight between 200-700:

```tsx
<p
  className="font-author-variable"
  style={{ fontWeight: 350 }}
>
  Custom weight 350
</p>
```

## Font Files Location

- Array fonts: `/public/Array_Complete/Fonts/WEB/fonts/`
- Author fonts: `/public/Author_Complete/Fonts/WEB/fonts/`
- Author Variable: `/public/Author_Complete/Fonts/TTF/`

## Performance Tips

1. Use **Author Variable** instead of multiple Author weights when possible
2. Only import the font weights you actually use
3. The fonts are configured with `font-display: swap` for better loading performance

## Examples

Check out the `FontShowcase` component (`/src/components/FontShowcase.tsx`) to see all fonts in action.

## Troubleshooting

If fonts aren't loading:
1. Ensure the font files exist in the correct directories
2. Check that the file paths in `/src/fonts/fonts.ts` are correct
3. Verify that all font variables are included in your layout.tsx
4. Clear your browser cache and restart the development server
