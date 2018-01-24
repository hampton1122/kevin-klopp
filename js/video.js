$(window).load(function(){
    var videoArray = [
        "123rf Technical language.mp4", 
        "shutterstock_hacker w-sound.mp4", 
        "videoblocks-cyber-crime-money-thief-online.mp4", 
        "videoblocks-Ransomeware.mp4",
        "videoblocks-cyber-thief-hacking-into-a-mans-computer.mp4",
        "videoblocks-close-up-of-high-tech-cyber-eye.mp4"
    ];
    var videoCount = videoArray.length;
    var randomNumber = Math.floor(Math.random() * videoCount) + 0;

    $('#video').vide({
        mp4: 'video/'+videoArray[randomNumber],
        poster: 'img/shutterstock-cybersecurity-awards-2014.jpg'
      }, {
        volume: 1,
        playbackRate: 1,
        muted: true,
        loop: true,
        autoplay: true,
        position: '50% 50%', // Similar to the CSS `background-position` property.
        posterType: 'jpg', // Poster image type. "detect" — auto-detection; "none" — no poster; "jpg", "png", "gif",... - extensions.
        resizing: true, // Auto-resizing, read: https://github.com/VodkaBears/Vide#resizing
        bgColor: 'transparent', // Allow custom background-color for Vide div,
        className: '' // Add custom CSS class to Vide div
      });
});