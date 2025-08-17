// Function to take an image URL and return a cropped version of it
import noImage from '../assets/download (1).jpeg'
export const getCroppedImageUrl = (url: string) => {
    if(!url) return noImage;
    // Step 1: Define the substring in the URL where the image path starts.
    // In this case, 'media/' is the marker that tells us where the original image file path begins.
    const target = 'media/';

    // Step 2: Find the index position where 'media/' appears in the given URL.
    // indexOf(target) returns the starting position of 'media/' in the URL.
    // We then add target.length so the index points to the end of 'media/'.
    const index = url.indexOf(target) + target.length;

    // Step 3: Construct a new URL by inserting the crop dimensions right after 'media/'.
    // url.slice(0, index) → takes the URL from the start up to the end of 'media/'
    // 'crop/600/400/' → the crop dimensions (width = 600px, height = 400px)
    // url.slice(index) → the rest of the URL after 'media/'
    return url.slice(0, index) + 'crop/600/400/' + url.slice(index);
}
