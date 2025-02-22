# Open Hart Paal design
This is the website for the NPO Open Hart Paal.
This is a redesign of the original website. Moved to Github with the rationale to keep it open for contributors.

## Website design
To keep the design accessible for potentially future developers;
There was a deliberate choice to keep things as simple as possible, opting for a static HTML page.


## Technologies/libraries used
- Stellar by HTML5 UP
- Lightbox2
- Timeline html library

## Thumbnails
In general we use the 318x318 sizing rule for thumbnails. This helps with the layout.

Thumbnails are generated using imagemagick. To force Aspect ratio:
```
magick Open_Hart_13.jpg -resize 318x318^ -gravity center -crop 318x318+0+0 +repage Open_Hart_13_thumbnail.jpg
```

Or use a script to loop over the directory, assuming correct naming conventions
This script runs in the working directory and picks up any file called Open_hart*.jpg

```
#!/bin/bash

# Set the desired width and height
WIDTH=318
HEIGHT=318

# Loop through all the image files in the input directory
for IMAGE in Open_Hart*.jpg; do
  if [ -f "$IMAGE" ]; then
    
    # Get the file name without the directory and extension
    FILENAME=$(basename "$IMAGE" .jpg)

    # Set the new file name by appending _thumbnail
    OUTPUT_FILE="${FILENAME}_thumbnail.jpg"
    # Use ImageMagick's magick command to resize the image
    magick "$IMAGE" -resize ${WIDTH}x${HEIGHT}^ -gravity center -crop ${WIDTH}x${HEIGHT}+0+0 +repage "$OUTPUT_FILE"
    echo "Resized $IMAGE and saved to $FILENAME"
  fi
done
```