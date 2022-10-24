<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>FHEND - adamgulde.github.io</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="">
        <script src="https://cdn.jsdelivr.net/npm/@mediapipe/camera_utils/camera_utils.js" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/@mediapipe/control_utils/control_utils.js" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/@mediapipe/control_utils_3d/control_utils_3d.js" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/@mediapipe/drawing_utils/drawing_utils.js" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/@mediapipe/pose/pose.js" crossorigin="anonymous"></script>
    </head>
    <body>
        <!--[if lt IE 7]>
            <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="#">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->
        <h1>On-site Fitness Program</h1>
        <button onclick="location.href='https://adamgulde.github.io'" type="button">To Home</button>
        <button onclick="location.href='https://adamgulde.github.io/fitness'" type="button">To Fitness Main Page</button>
        <p>FHEND: Fitness High END</p>
        <p>Experimental fitness program built for high-end devices to run in the browser.</p>
        <video id="video" width="640" height="480" autoplay></video>
        <canvas class="output_canvas" width="640" height="480"></canvas>
        <img src="pose_tracking_full_body_landmarks.png" alt="Pose reference image">
        <div class="landmark-grid-container"></div>
        <script src="" async defer></script>
        <script type="module">
            let video = document.querySelector("#video");
            const videoElement = document.querySelector("#video");
            const canvasElement = document.getElementsByClassName('output_canvas')[0];
            const canvasCtx = canvasElement.getContext('2d');
            const landmarkContainer = document.getElementsByClassName('landmark-grid-container')[0];
            const grid = new LandmarkGrid(landmarkContainer);
            function onResults(results) {
              if (!results.poseLandmarks) {
                grid.updateLandmarks([]);
                return;
              }
              canvasCtx.save();
              canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);
              // canvasCtx.drawImage(results.segmentationMask, 0, 0,
              //                    canvasElement.width, canvasElement.height);
              // Only overwrite existing pixels.
                canvasCtx.globalCompositeOperation = 'source-in';
                canvasCtx.fillStyle = '#00FF00';
                canvasCtx.fillRect(0, 0, canvasElement.width, canvasElement.height);
              // Only overwrite missing pixels.
              canvasCtx.globalCompositeOperation = 'destination-atop';
              canvasCtx.drawImage(
                  results.image, 0, 0, canvasElement.width, canvasElement.height);
              canvasCtx.globalCompositeOperation = 'source-over';
              drawConnectors(canvasCtx, results.poseLandmarks, POSE_CONNECTIONS,
                             {color: '#00FF00', lineWidth: 4});
              drawLandmarks(canvasCtx, results.poseLandmarks,
                            {color: '#FF0000', lineWidth: 2});
              canvasCtx.restore();
              grid.updateLandmarks(results.poseWorldLandmarks);
            }
                const pose = new Pose({locateFile: (file) => {
                return `https://cdn.jsdelivr.net/npm/@mediapipe/pose/${file}`;
                }});
                pose.setOptions({
                modelComplexity: 1,
                smoothLandmarks: true,
                enableSegmentation: true,
                smoothSegmentation: true,
                minDetectionConfidence: 0.5,
                minTrackingConfidence: 0.5
                });
                pose.onResults(onResults);
                const camera = new Camera(videoElement, {
                onFrame: async () => {
                    await pose.send({image: videoElement});
                },
                width: 320,
                height: 240
                });
                camera.start();
            </script>
    </body>
</html>
