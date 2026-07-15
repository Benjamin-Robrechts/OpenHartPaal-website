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

## Yearly pop-up message (Home & Contact page)

Each year OpenHart closes around Christmas and during the summer holiday, an automated, configurable popup was added for this reason on the home and contact page.
The configuration happens in resources/sluitingen_popup.json, which contains a list of closure periods. Each period has:
- `enabled`: set to `false` to turn that message off
- `startDate` / `endDate` (`MM-DD`): the window during which the popup is shown. This can start before the actual closure to announce it in advance, and may wrap over new year (e.g. `11-05` to `01-04`)
- `message`: the text shown in the popup

CSS is set in resources/css/popup.css
JS in resources/js/popup_sluiting.js

Once dismissed, the popup stays hidden for the rest of the browser session.

Now it is important each year to update the messages in resources/sluitingen_popup.json or they will re-appear with an outdated message.

