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
        <iframe id="sheetiFrame" src="https://docs.google.com/spreadsheets/d/1OMRW4Qa9p84-V7J7h2k0c-85WicAcfkKWQ5Ncop4J30/edit?usp=sharing" title="ScuffedBackend"></iframe>
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
            let iFrame = document.querySelector("sheetiFrame");
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
                data_paragraph.innerHTML = converted_image
            })
            // USING FORM METHOD- Doesn't work because github pages does not allow POST methods
            // const form = document.querySelector("#form");
            // const submitButton = document.querySelector("#send");
            // const scriptURL = 'https://script.google.com/macros/s/AKfycbxEekWYUnlL65BgvaqsAb_o812icLo9wZnbelcEE7uN0q-DQEUCI1IhCDemecCYvu99/exec';
            // form.addEventListener('submit', e => {
            //     fetch(scriptURL, { method: 'POST', body: data_paragraph.innerHTML})
            //     .then(response => {
            //         alert('Success!', response)
            //         submitButton.disabled = false
            //         })
            //     .catch(error => {
            //     alert('Error!', error.message)
            //         submitButton.disabled = false
            //     }
            //     )
            // });
            // USING GOOGLEDOC IFRAME METHOD
            var iframe = document.getElementById("iFrame");
            var elmnt = iframe.contentWindow.document.getElementsByTagName("H1")[0];
            elmnt.style.display = "none";
        </script>
        <script src="" async defer></script>
    </body>
</html>


