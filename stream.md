<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Fitness Stream Page - adamgulde.github.io</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="">
    </head>
    <body>
        <!--[if lt IE 7]>
            <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="#">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->
        <h1>Streaming Page...</h1>
        <button onclick="location.href='https://adamgulde.github.io'" type="button">To Home Page</button>
        <button onclick="location.href='https://adamgulde.github.io/fitness'" type="button">To Fitness Main Page</button>
        <button id="start-camera">Start Camera</button>
        <p>Experimental fitness program '''optimized''' for low-end devices that cannot run the fitness program within the browser.</p>
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
                canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
                let converted_image = getBase64StringFromDataURL(canvas.toDataURL('image/jpeg'));
                // data url of the image
                data_paragraph.innerHTML = converted_image
            }, 30);
            });
        </script>
        <script src="" async defer></script>
    </body>
</html>
