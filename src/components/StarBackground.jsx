import { useEffect, useState } from "react";

function createStars() {
  const count = Math.floor((window.innerWidth * window.innerHeight) / 10000);
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    size: Math.random() * 3 + 1,
    x: Math.random() * 100,
    y: Math.random() * 100,
    opacity: Math.random() * 0.5 + 0.5,
    duration: Math.random() * 4 + 2,
  }));
}

function createMeteors() {
  const count = 4;
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    size: Math.random() * 2 + 1,
    x: Math.random() * 100,
    y: Math.random() * 20,
    delay: Math.random() * 15,
    duration: Math.random() * 3 + 3,
  }));
}

export default function StarBackground() {
  const [stars, setStars] = useState(createStars);
  const [meteors] = useState(createMeteors); // meteors cukup sekali

  useEffect(() => {
    const handleResize = () => setStars(createStars());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Stars */}
      <div className="absolute inset-0">
        {stars.map((s) => (
          <div
            key={s.id}
            className="star animate-pulse-subtle"
            style={{
              width: `${s.size}px`,
              height: `${s.size}px`,
              left: `${s.x}%`,
              top: `${s.y}%`,
              opacity: s.opacity,
              animationDuration: `${s.duration}s`,
            }}
          />
        ))}
      </div>

      {/* Meteors */}
      <div className="absolute inset-0">
        {meteors.map((m) => (
          <div
            key={m.id}
            className="meteor animate-meteor"
            style={{
              width: `${m.size * 50}px`,
              height: `${m.size * 2}px`,
              left: `${m.x}%`,
              top: `${m.y}%`,
              animationDelay: `${m.delay}s`,
              animationDuration: `${m.duration}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
