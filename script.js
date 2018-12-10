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

