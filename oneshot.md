<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Project 4d - adamgulde.github.io</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="">
    </head>
    <body>
        <h1>One-Shot AI Implementation (Experimental)</h1>
        <button onclick="location.href='https://adamgulde.github.io'" type="button">To Home</button>
        <button id="start-camera">Start Camera</button> 
        <video id="video" width="640" height="480" autoplay></video>
        <canvas id="canvas" width="640" height="480"></canvas>       
        <p id="data_text">Empty</p>
        <script>
            const getBase64StringFromDataURL = (dataURL) =>
                dataURL.replace('data:', '').replace(/^.+,/, '');
            let camera_button = document.querySelector("#start-camera");
            let video = document.querySelector("#video");
            let canvas = document.querySelector("#canvas");
            let data_paragraph = document.querySelector("#data_text");
            data_paragraph.innerHTML = 'Empty'
            camera_button.addEventListener('click', async function() {
                let stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
                video.srcObject = stream;
                setInterval(function() {
                canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height); // input actual converted image...
                let converted_image = getBase64StringFromDataURL(video.toDataURL('image/jpeg'));
                // data url of the image
                data_paragraph.innerHTML = converted_image
            }, 30);
            });
        </script>
        <script src="" async defer></script>
    </body>
</html>


