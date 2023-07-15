import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector("#vimeo-player");
const player = new Player(iframe);

const onTime = function (data) { 
    localStorage.setItem('videoplayer-current-time', data.seconds);
};

const currentTime = localStorage.getItem('videoplayer-current-time');

player.setCurrentTime(currentTime)
    .then(function (seconds) {
        console.log(`Saved currentTime is ${seconds} seconds`);
    }).catch(function (error) {
    switch (error.name) {
        case 'RangeError':
        console.log(`currentTime error`);
            break;

        default:
        console.log(`This is default`);
            break;
    }
});
player.on("timeupdate", throttle(onTime, 1000));
