import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('play', onPlay);
player.on('timeupdate', throttle(onPlay, 1000));

let seconds = localStorage.getItem('videoplayer-current-time');

if (seconds) {
  player.setCurrentTime(seconds);
}

function onPlay(data) {
  localStorage.setItem('videoplayer-current-time', data.seconds);
}
