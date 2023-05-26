 const videoPlayer = document.getElementById('videoPlayer');

        function playVideo() {
            videoPlayer.play();
        }

        function pauseVideo() {
            videoPlayer.pause();
        }

        function stopVideo() {
            videoPlayer.pause();
            videoPlayer.currentTime = 0;
        }

        function setVolume(volume) {
            videoPlayer.volume = volume;
        }

        function toggleFullScreen() {
            if (videoPlayer.requestFullscreen) {
                videoPlayer.requestFullscreen();
            } else if (videoPlayer.mozRequestFullScreen) {
                videoPlayer.mozRequestFullScreen();
            } else if (videoPlayer.webkitRequestFullscreen) {
                videoPlayer.webkitRequestFullscreen();
            } else if (videoPlayer.msRequestFullscreen) {
                videoPlayer.msRequestFullscreen();
            }
        }