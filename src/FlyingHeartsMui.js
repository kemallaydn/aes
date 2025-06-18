import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { keyframes } from '@emotion/react';

const floatUp = keyframes`
  0%   { transform: translateY(0) rotate(0deg); opacity: 0; }
 10%  { opacity: 1; }
 100% { transform: translateY(-120vh) rotate(360deg); opacity: 0; }
`;

export default function FlyingHeartsMui({
  src,
  count = 80,
  size = 100,
  minDur = 0.8,
  maxDur = 1.2,
  zoom = 1,
}) {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const arr = Array.from({ length: count }).map((_, i) => {
      const duration = minDur + Math.random() * (maxDur - minDur);
      const delay = Math.random() * maxDur;
      return { id: i, left: Math.random() * 90 + '%', duration: `${duration}s`, delay: `${delay}s` };
    });
    setHearts(arr);
  }, [count, minDur, maxDur]);

  const base = 100;
  const offset = (base * (1 - zoom)) / 2;

  return (
    <>
      {hearts.map((h) => (
        <Box
          key={h.id}
          sx={{
            position: 'absolute',
            bottom: -size,
            left: h.left,
            width: size,
            height: size,
            animation: `${floatUp} ${h.duration} linear infinite`,
            animationDelay: h.delay,
          }}
        >
          <svg width={size} height={size} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <clipPath id={`clipHeart${h.id}`} clipPathUnits="userSpaceOnUse">
                <path d="M50 15 C35 0 0 25 50 75 C100 25 65 0 50 15 Z" />
              </clipPath>
            </defs>
            <g clipPath={`url(#clipHeart${h.id})`} transform={`translate(${offset},${offset}) scale(${zoom})`}>
              <image href={src} x="0" y="0" width={base} height={base} preserveAspectRatio="xMidYMid meet" />
            </g>
          </svg>
        </Box>
      ))}
    </>
  );
}
