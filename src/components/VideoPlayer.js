import { useState, useRef } from 'react';
import '../VideoPlayer.css';

const VideoPlayer = ({ src }) => {
  const video = useRef();
  const playBtn = useRef();
  const muteBtn = useRef();
  const inputVolume = useRef();
  const inputProgress = useRef();
  const duration = useRef();
  const elapsed = useRef();

  const setDuration = () => {
    const minutesDuration = Math.floor(video.current.duration / 60);
    const secondsDuration = Math.floor(
      video.current.duration - minutesDuration * 60
    );
    let minuteDuration;
    let secondDuration;
    if (minutesDuration < 10) {
      minuteDuration = '0' + minutesDuration;
    } else {
      minuteDuration = minutesDuration;
    }

    if (secondsDuration < 10) {
      secondDuration = '0' + secondsDuration;
    } else {
      secondDuration = secondsDuration;
    }
    let vidDuration = `${minuteDuration}:${secondDuration}`;
    duration.current.innerHTML = vidDuration;
    inputProgress.current.max = video.current.duration;
    playBtn.current.firstChild.classList.remove('fa-pause');
    playBtn.current.firstChild.classList.add('fa-play');
  };

  const setProgress = () => {
    let minutes = Math.floor(video.current.currentTime / 60);
    let seconds = Math.floor(video.current.currentTime - minutes * 60);
    let minuteValue;
    let secondValue;

    if (minutes < 10) {
      minuteValue = '0' + minutes;
    } else {
      minuteValue = minutes;
    }

    if (seconds < 10) {
      secondValue = '0' + seconds;
    } else {
      secondValue = seconds;
    }

    let mediaTime = `${minuteValue}:${secondValue}`;
    elapsed.current.innerHTML = mediaTime;
    inputProgress.current.value = video.current.currentTime;
  };

  return (
    <div className='video-container'>
      <video src={src} ref={video} style={{ pointerEvents: 'none' }}></video>
      <div className='video-controls hidden'>
        <div className='video-progress'>
          <input
            className='volume'
            type='range'
            ref={inputProgress}
            defaultValue='0'
            min='0.0'
          />
          <div className='seek-tooltip'>00:00</div>
        </div>

        <div className='bottom-controls'>
          <div className='left-controls'>
            <button ref={playBtn}>
              <i className='text-light fas fa-play'> </i>
            </button>
            <button>
              <i className='fas fa-redo text-light'></i>
            </button>

            <div className='volume-controls'>
              <button ref={muteBtn}>
                <i className='fas fa-volume-up text-light'></i>
              </button>

              <input
                className='volume'
                type='range'
                ref={inputVolume}
                defaultValue='.5'
                min='0.0'
                max='1.0'
                step='.01'
              />
            </div>

            <div className='time'>
              <time ref={elapsed}>00:00</time>
              <span> / </span>
              <time ref={duration}></time>
            </div>
          </div>

          <div className='right-controls'>
            <button>
              <i className='fas fa-sign-out-alt text-light'></i>
            </button>
            <button>
              <i className='text-light fas fa-expand'> </i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
