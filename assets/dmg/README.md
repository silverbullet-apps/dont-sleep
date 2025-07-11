# DMG Assets

This directory contains assets for creating professional DMG installers.

## Files

### `dmg-background.png` (800x400px)
Custom background image for the DMG installer window. This image should include:

- **Your app icon** positioned on the left side (~200px from left)
- **Applications folder icon** on the right side (~600px from left)
- **Arrow or visual cue** pointing from left to right
- **Installation instructions** like "Drag DontSleep to Applications"
- **Professional design** that matches your app's branding

### `create-background.sh`
Script to generate a basic background image if you don't have a custom one.

## Creating Custom Background

### Using Design Tools
1. Create a new image: **800x400 pixels**
2. Use a clean, light background color (e.g., #f0f0f0)
3. Add your app icon on the left side
4. Add Applications folder icon on the right side
5. Include an arrow pointing from left to right
6. Add text instructions for installation
7. Save as `dmg-background.png`

### Using AI Tools
You can also use AI image generation tools like:
- DALL-E, Midjourney, or Stable Diffusion
- Prompt: "Create a clean, professional DMG installer background image, 800x400 pixels, with an app icon on the left side, Applications folder icon on the right side, arrow pointing from left to right, and text 'Drag App to Applications', minimal modern design"

### Using Figma/Sketch Templates
Many designers share DMG background templates on:
- Figma Community
- Dribbble
- GitHub

## Background Image Guidelines

- **Size**: Exactly 800x400 pixels
- **Format**: PNG or JPEG
- **Colors**: Use light/neutral colors that work well with macOS
- **Text**: Keep installation instructions clear and readable
- **Icons**: Use standard macOS Application folder icon
- **Positioning**: App icon ~200px from left, Applications ~600px from left

## Example Layout

```
[App Icon]  ←————————————————————→  [Applications Folder]
    ^                                        ^
  200px                                   600px
  
           "Drag DontSleep to Applications"
           
Width: 800px
Height: 400px
```

## Notes

- If no custom background is provided, the script will attempt to create a basic one using ImageMagick
- The background significantly improves user experience by making installation obvious
- Professional DMG installers are expected by macOS users for commercial software 