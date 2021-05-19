# Debris Classification Data Format

## Debris Classification Images

The debris classification images data format defines the images that can be classified.

### Module Data Format Keys

* `id`: A unique integer ID representing the image for classification.
* `url`: URL of the image for classification (should be an AWS S3 url).
* `classification`: The true classification of the image.

## Debris Classification Options

The debris classification options data format defines the options for how an image with a particular true classification can be classified.

### Module Data Format

Debris classification options is an object where each key is a classification. The value of each key is an array of objects that define the possible options for how the image can be classified.

The keys for those objects are:

* `id`: The classification that the server will receive for this option.
* `display`: The classification that the user will see for this option.
* `textTitle`, `textPrimary`, `textSecondary`: Content user will read if they need help with this option.
* `imageUrl`, `imageAlt`: Optional image user will view if they need help with this option.
