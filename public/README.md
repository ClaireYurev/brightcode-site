# Public Assets

## Icons & Favicons

### Current Status
- ✅ `logo.svg` - BrightCode logo (96x96, blue background with white "B")
- ✅ `logo-32.png` - 32x32 PNG
- ✅ `logo-64.png` - 64x64 PNG
- ✅ `logo-128.png` - 128x128 PNG
- ✅ `logo-256.png` - 256x256 PNG
- ⚠️ `favicon.ico` - Browser favicon (placeholder - needs replacement)
- ✅ `site.webmanifest` - PWA manifest (updated theme color: #0EA5E9)

### TODO: Replace Placeholders
1. **favicon.ico**: Generate a proper ICO file from `logo.svg`
   - Use tools like https://favicon.io or ImageMagick
   - Should be the blue rounded-square with white "B"
   - Include multiple sizes: 16, 32, 48, 64, 128, 256
   
2. **PNG logos**: ✅ Already generated and in place
   - `logo-32.png` - 32x32 resolution
   - `logo-64.png` - 64x64 resolution  
   - `logo-128.png` - 128x128 resolution
   - `logo-256.png` - 256x256 resolution
   - All maintain the blue background (#0EA5E9) and white "B"

### Tools for Icon Generation
- **Online**: https://favicon.io, https://realfavicongenerator.net
- **Design Tools**: Figma, Sketch, Adobe Illustrator
- **CLI**: ImageMagick, Inkscape command line

### Testing
- **Favicon**: Check browser tab shows correct icon
- **iOS/Android**: Add to home screen shows proper app icons
- **PWA**: Lighthouse audit passes for manifest
- **Social**: OG/Twitter previews use icon-512.png fallback 