// Function to change the image displayed in the color-display area
function changeImage(buttonIndex) {
    const colorDisplay = document.getElementById('color-display');
    const imagePath = `images/p${buttonIndex}.png`;  // Change image based on button index

    // Set the background image of the color display area
    colorDisplay.style.backgroundImage = `url(${imagePath})`;
    colorDisplay.style.backgroundSize = 'cover';
    colorDisplay.style.backgroundPosition = 'center';

    // Display the color code (or image description)
    const colorCode = document.getElementById('color-code');
    colorCode.innerText = `Image Code: p${buttonIndex}.png`;  // You can replace this with actual color code if needed
}
