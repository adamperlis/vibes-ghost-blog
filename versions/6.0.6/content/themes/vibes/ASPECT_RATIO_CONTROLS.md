# Aspect Ratio Controls for Post Images

This theme now includes configurable aspect ratio controls for different types of post images. You can customize these settings in the Ghost Admin under **Design** > **Customize**.

## Available Settings

### 1. Post Card Aspect Ratio
- **Location**: Post section in theme settings
- **Controls**: Standard post card images (used in feeds and lists)
- **Options**: 16:9, 1:1, 3:2
- **Default**: 16:9

### 2. Hero Image Aspect Ratio  
- **Location**: Post section in theme settings
- **Controls**: Hero section images and secondary images in the main content area
- **Options**: 16:9, 1:1, 3:2
- **Default**: 16:9

### 3. Featured Image Aspect Ratio
- **Location**: Post section in theme settings  
- **Controls**: Featured section images and large featured post images
- **Options**: 16:9, 1:1, 3:2
- **Default**: 16:9

### 4. Grid Image Aspect Ratio
- **Location**: Post section in theme settings
- **Controls**: Grid layout images in post listings
- **Options**: 16:9, 1:1, 3:2  
- **Default**: 1:1 (Square)

## How It Works

The theme uses CSS aspect-ratio utility classes that are dynamically applied based on your settings:

- `aspect-ratio-16-9` - Widescreen format (16:9)
- `aspect-ratio-1-1` - Square format (1:1)  
- `aspect-ratio-3-2` - Classic photo format (3:2)

## CSS Implementation

All image containers now use the `aspect-ratio` CSS property with fallback defaults. Images automatically use `object-fit: cover` to maintain proper cropping within the aspect ratio container.

## Benefits

- **Consistent Layout**: All images maintain the same proportions for a cleaner design
- **Flexible Customization**: Choose the aspect ratio that best fits your content
- **Responsive**: Aspect ratios work across all device sizes
- **Performance**: No JavaScript required - pure CSS solution

## Example Use Cases

- **16:9**: Great for landscape photography, tech content, wide format images
- **1:1**: Perfect for portraits, social media content, Instagram-style layouts
- **3:2**: Classic photography ratio, good balance between wide and square

To change these settings, go to your Ghost Admin panel, navigate to **Design** > **Customize**, and look for the aspect ratio options in the **Post** section. 