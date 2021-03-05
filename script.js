const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Prompt user to select media stream and pass to video element, then play
async function selectMediaStream(){
    try {
        alert('Are you ready to try the cool Picture-InPicture?   Click OK, select your screen the click START');
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = ()=>{
            videoElement.play();
        }

    } catch (error) {

    }
}

button.addEventListener('click', async()=>{
    // Disable 'button'
    button.disabled = true;
    // Start Picture IN Picture
    await videoElement.requestPictureInPicture();
    // Reset the 'button
    button.disabled = false;
});
//  On load
selectMediaStream();