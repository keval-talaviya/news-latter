// document.getElementById('share-btn').addEventListener('click', function () {
//     if (navigator.share) {
//         navigator.share({
//             title: "6 Reasons Why You Shouldn't Skip Having Breakfast",
//             text: "Check out this article: 6 Reasons Why You Shouldn't Skip Having Breakfast",
//             url: window.location.href
//         }).then(() => {
//             console.log('Successful share');
//         }).catch((error) => {
//             console.error('Error sharing:', error);
//         });
//     } else {
//         alert('Sharing is not supported on this browser.');
//     }
// });
document.getElementById('share-btn').addEventListener('click', async function () {
    const imageUrl = 'assets/news1.jpg'; // The path to your image
    const title = document.getElementById('news-title').textContent;
    const description = document.getElementById('news-description').textContent;

    try {
        // Fetch the image as a Blob
        const response = await fetch(imageUrl);
        const blob = await response.blob();

        // Prepare the file to be shared
        const file = new File([blob], 'news1.jpg', { type: blob.type });

        // Check if the browser supports the Web Share API with files
        if (navigator.share && navigator.canShare({ files: [file] })) {
            navigator.share({
                title: title,
                text: description,
                files: [file] // Sharing the image file
            })
                .then(() => console.log('Successful share'))
                .catch((error) => console.error('Error sharing:', error));
        } else {
            alert('Sharing is not supported in your browser.');
        }
    } catch (error) {
        console.error('Failed to fetch the image:', error);
    }
});
