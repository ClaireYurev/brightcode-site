# Public Assets

## Icons & Favicons

### Current Status
- ✅ `logo.svg` - BrightCode icon (24x24)
- ✅ `logo-wordmark.svg` - BrightCode wordmark (140x24)
- ✅ `icon-192.png` - App icon 192x192 (placeholder - replace with actual)
- ✅ `icon-512.png` - App icon 512x512 (placeholder - replace with actual)
- ⚠️ `favicon.ico` - Browser favicon (placeholder - needs replacement)
- ✅ `site.webmanifest` - PWA manifest

### TODO: Replace Placeholders
1. **favicon.ico**: Generate a proper 32x32 ICO file from `logo.svg`
   - Use tools like https://favicon.io or Figma export
   - Should be the rounded-square "B" monogram
   
2. **icon-192.png** & **icon-512.png**: 
   - Export `logo.svg` at these resolutions
   - Use black color (`currentColor = #000000`)
   - Transparent background
   - Center the monogram

### Tools for Icon Generation
- **Online**: https://favicon.io, https://realfavicongenerator.net
- **Design Tools**: Figma, Sketch, Adobe Illustrator
- **CLI**: ImageMagick, Inkscape command line

### Testing
- **Favicon**: Check browser tab shows correct icon
- **iOS/Android**: Add to home screen shows proper app icons
- **PWA**: Lighthouse audit passes for manifest
- **Social**: OG/Twitter previews use icon-512.png fallback 