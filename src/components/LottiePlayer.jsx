"use client"


import { Player } from '@lottiefiles/react-lottie-player';

const LottiePlayer = () => {
  return (
    <Player
      src="https://lottie.host/5ae7b791-110a-4e42-ad34-c77f12fb17d1/pXeUVe0YB6.json"
      background="transparent"
      speed="1"
      style={{ width: '600px', height: '600px' }}
      loop
      controls
      autoplay
      direction="1"
      mode="normal"
    />
  );
};

export default LottiePlayer;
