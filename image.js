let uploadFile, fileUploader, imageFile;

uploadFile = document.querySelector('#uploader-button');
fileUploader = document.querySelector('#uploader-button');
imageFile = document.querySelector('#uploader-button');

uploadFile.addEventListener('click', (event) => {
    console.log(`File Uploader is listening on ${event.target}`);
})