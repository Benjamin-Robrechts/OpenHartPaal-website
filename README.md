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
Thumbnails were generated using imagemagick. To force Aspect ratio:
```
magick Open_Hart_13.jpg -resize 318x318^ -gravity center -crop 318x318+0+0 +repage Open_Hart_13_thumbnail.jpg
```
Otherwise just resize it down.
```
magick a.jpg -resize 318x318 a_thumbnail.jpg
```