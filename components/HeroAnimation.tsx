import { useEffect, useState } from 'react';
import Lottie from 'lottie-react';

export default function HeroAnimation() {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch('/hero.json')
      .then((res) => res.json())
      .then(setAnimationData)
      .catch(console.error);
  }, []);

  return (
    animationData && (
      <Lottie
        animationData={animationData}
        loop
        autoplay
        className="w-full h-auto max-w-[90%] sm:max-w-md md:max-w-full"
      />
    )
  );
}
