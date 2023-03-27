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
        <!-- Need to format based on broswer size ahhhh-->
        <video id="video" width="320" height="240" autoplay></video>
        <canvas id="canvas" width="320" height="240"></canvas>       
        <br>
        <button id="convert">CONVERT Image</button> 
        <button id="send">SEND Image</button>
        <!-- <form id="form">
            <button type="submit">SEND Data</button>
        </form> -->
        <iframe id="iFrame" src="https://indevadam.wixsite.com/home/4d-backend" title="ScuffedBackend" width="500" height="1000"></iframe>
        <br>
        <p id="data_text">Empty</p>
        <!-- need to send DataURL to some serverside to interpret, run through cv2, and resend here -->
        <script>
            const getBase64StringFromDataURL = (dataURL) =>
                dataURL.replace('data:', '').replace(/^.+,/, '');
            let camera_button = document.querySelector("#start-camera");
            let convert_button = document.querySelector("#convert");
            let video = document.querySelector("#video");
            let canvas = document.querySelector("#canvas");
            let data_paragraph = document.querySelector("#data_text");
            let iFrame = document.querySelector("#iFrame");
            data_paragraph.innerHTML = 'Empty'
            camera_button.addEventListener('click', async function() {
                let stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
                video.srcObject = stream;
                setInterval(function() {
                canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height); // input actual converted image...
            }, 30);
            });
            convert_button.addEventListener('click', async function() {
                let converted_image = getBase64StringFromDataURL(canvas.toDataURL('image/jpeg'));
                // data url of the image
                data_paragraph.innerHTML = converted_image;
                iFrame.contentWindow.postMessage(converted_image, "https://indevadam.wixsite.com/home/4d-backend");
            });
        </script>
        <script src="" async defer></script>
    </body>
</html>
<!--AHHHHHHHHHHHHHHHHHHHHHHH-->

