import { useEffect } from 'react';

const LottiePlayerSVG = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js';
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <lottie-player
        src="https://lottie.host/5c3d62a7-9e89-43e3-8cda-c1df2ef91daf/Gq92B8B7Ar.json"
        background="##FFFFFF"
        speed="1"
        style={{ width: '300px', height: '300px' }}
        loop
        controls
        autoplay
        direction="1"
        mode="normal"
      />
    </div>
  );
};

export default LottiePlayerSVG;
