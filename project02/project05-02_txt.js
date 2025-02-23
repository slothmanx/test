"use strict";
/* JavaScript 7th Edition
   Chapter 5
   Hands-on Project 5-2
   Author: Zachariah holland graves
   Date: 2/23/2025
   Filename: project05-02.js
*/

// Declare variables to reference images, photo bucket, and photo list
const images = document.getElementsByTagName("img");  // HTMLCollection of all images
const photoBucket = document.getElementById("photo_bucket"); // The photo bucket container
const photoList = document.getElementById("photo_list"); // The ranked photo list

// Loop through each image and add an event listener
for (let i = 0; i < images.length; i++) {
    images[i].onclick = function() {
        // Check if the image is currently in the photo bucket
        if (this.parentNode.id === "photo_bucket") {
            // Create a new list item and move the image to the photo list
            const newItem = document.createElement("li");
            newItem.appendChild(this);
            photoList.appendChild(newItem);
        } else {
            // Otherwise, move the image back to the photo bucket
            const oldItem = this.parentNode; // The <li> element
            photoBucket.appendChild(this);
            oldItem.parentNode.removeChild(oldItem); // Remove the <li> from the ranked list
        }
    };
}
