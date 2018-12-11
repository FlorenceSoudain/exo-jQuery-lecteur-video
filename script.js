var video = document.querySelector('video');

$('#lecture').click(function () {

    if (video.paused) {
        $('#lecture').html('II');
        video.play();
    } else {
        video.pause();
        $('#lecture').html('►');
    }
});

function update(video) {
    var duree = video.duration;
    var temps = video.currentTime;
    var fraction = temps / duree;
    var pourcentage = Math.ceil(fraction * 100);

    var progression = document.querySelector('.progress__filled');

    progression.style.width = pourcentage + '%';
    progression.style.flexBasis = pourcentage + '%';

}

$('#vitesse').on('input', function () {
    video.playbackRate = this.value;
});

$('#vol').on('input', function () {
    video.volume = this.value;
});

$('#moins').click(function () {
    intervalRewind = setTimeout(function(){
        video.playbackRate = 1.0;
        if(video.currentTime === 0){
            clearTimeout(intervalRewind);
            video.pause();
        }
        else{
            video.currentTime += -10;
        }
    },30);
});


