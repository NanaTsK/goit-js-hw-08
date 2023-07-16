import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector("#vimeo-player");
const player = new Player(iframe);

const CURRENT_TIME_KEY = "videoplayer-current-time";

const onTime = function (data) { 
    localStorage.setItem(CURRENT_TIME_KEY, JSON.stringify(data.seconds));
};

const currentTime = localStorage.getItem(CURRENT_TIME_KEY);

player.setCurrentTime(currentTime)
    .then(function (seconds) {
        console.log(`Saved currentTime is ${seconds} seconds`);
    }).catch(function (error) {
    switch (error.name) {
        case "RangeError":
        console.log(`currentTime error`);
            break;

        default:
        console.log(`This is default`);
            break;
    }
});
player.on("timeupdate", throttle(onTime, 1000));
