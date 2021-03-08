import { useState, useRef } from 'react';
import '../VideoPlayer.css';

const VideoPlayer = ({ src }) => {
  const video = useRef();
  const playBtn = useRef();
  const inputProgress = useRef();
  const muteBtn = useRef();
  const duration = useRef();
  const elapsed = useRef();

  const [isPlaying, setIsPlaying] = useState(false);
  const [isFS, setFS] = useState(false);

  const handlePlay = () => {
    if (isPlaying) {
      video.current.pause();
      setIsPlaying(false);
    } else {
      video.current.play();
      setIsPlaying(true);
    }
  };

  const handleFullScreen = () => {
    if (!isFS) {
      video.current.parentNode.requestFullscreen();
      setFS(true);
    } else {
      document.exitFullscreen();
      setFS(false);
    }
  };

  const handleVolume = ({ target: { value } }) => {
    video.current.volume = value;
  };

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
  };

  const setProgress = () => {
    let minutes = Math.floor(video.current.currentTime / 60);
    let seconds = Math.floor(video.current.currentTime - minutes * 60);
    let minuteValue;
    let secondValue;

    if (minutes < 10) {
      minuteValue = `0${minutes}`;
    } else {
      minuteValue = minutes;
    }

    if (seconds < 10) {
      secondValue = `0${seconds}`;
    } else {
      secondValue = seconds;
    }

    let mediaTime = `${minuteValue}:${secondValue}`;
    elapsed.current.innerHTML = mediaTime;
    inputProgress.current.value = video.current.currentTime;
  };

  return (
    <div className='video-container'>
      <video
        src={src}
        ref={video}
        style={{ pointerEvents: 'none' }}
        onLoadedData={setDuration}
        onTimeUpdate={setProgress}
      ></video>
      <div className='video-controls hidden'>
        <div className='video-progress'>
          <input
            className='volume'
            type='range'
            defaultValue='0'
            min='0.0'
            ref={inputProgress}
          />
          <div className='seek-tooltip'>00:00</div>
        </div>

        <div className='bottom-controls'>
          <div className='left-controls'>
            <button ref={playBtn} onClick={handlePlay}>
              <i
                className={`text-light fas fa-${isPlaying ? 'pause' : 'play'}`}
              >
                {' '}
              </i>
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
                defaultValue='.5'
                min='0.0'
                max='1.0'
                step='.01'
                onChange={handleVolume}
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
            <button onClick={handleFullScreen}>
              <i
                className={`text-light fas fa-${isFS ? 'compress' : 'expand'}`}
              ></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
