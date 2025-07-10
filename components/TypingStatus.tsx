import { useState, useEffect } from 'react';

const messages = [
  "Connecting to Flyawoof booking server...",
  "Almost there — prepping your ultra-premium flight ✨",
  "Securing your global itinerary 🌍",
  "Getting the best seat in the cloud ☁️",
  "Syncing with airline satellites... 📡",
  "We’re lining up your air corridor 🚀",
  "Activating Flyawoof Concierge Mode 💼",
  "Polishing your passport data 🛂",
  "Building your boarding pass pixel by pixel 📄",
  "Loading travel magic. Please stay buckled 🛫"
];

export default function TypingStatus() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % messages.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return <p className="text-[#005f5f] text-lg font-medium">{messages[index]}</p>;
}
