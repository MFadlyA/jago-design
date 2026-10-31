import React from 'react';

// 4. Placeholder Picture Icon
export const GoldPlaceholderPictureIcon = ({ hasPlus = false }) => (
  <svg viewBox="0 0 90 75" className="w-16 h-14 drop-shadow-[0_4px_8px_rgba(0,0,0,0.85)]">
    <defs>
      <linearGradient id="iconGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#fffdfa" />
        <stop offset="50%" stopColor="#d4af37" />
        <stop offset="100%" stopColor="#8c6827" />
      </linearGradient>
    </defs>
    <rect
      x="10"
      y="14"
      width="64"
      height="48"
      rx="6"
      fill="none"
      stroke="url(#iconGoldGrad)"
      strokeWidth="4"
    />
    <circle cx="30" cy="29" r="5.5" fill="url(#iconGoldGrad)" />
    <polygon points="16,56 33,38 47,56" fill="url(#iconGoldGrad)" />
    <polygon points="36,56 52,33 68,56" fill="url(#iconGoldGrad)" />

    {hasPlus && (
      <g>
        <circle cx="72" cy="14" r="11" fill="#0f172a" />
        <path
          d="M72 5 V23 M63 14 H81"
          stroke="url(#iconGoldGrad)"
          strokeWidth="4.5"
          strokeLinecap="round"
        />
      </g>
    )}
  </svg>
);

// 5. Template 1 Capsule Icons
export const T1CapsuleGoldIcon = ({ type }) => {
  return (
    <svg viewBox="0 0 44 44" className="w-9 h-9 shrink-0 drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
      <defs>
        <linearGradient id="t1IconGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fffdfa" />
          <stop offset="45%" stopColor="#dbc295" />
          <stop offset="100%" stopColor="#825c21" />
        </linearGradient>
      </defs>
      {type === 'shield-check' && (
        <>
          <path
            d="M22 4 L37 10 V21 C37 31 30 37 22 41 C14 37 7 31 7 21 V10 Z"
            fill="url(#t1IconGold)"
            stroke="#fef08a"
            strokeWidth="1.2"
          />
          <path
            d="M15 22 L20 27 L30 16"
            fill="none"
            stroke="#0f172a"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </>
      )}
      {type === 'headset-247' && (
        <>
          <path
            d="M9 24 V20 C9 12.8 14.8 7 22 7 C29.2 7 35 12.8 35 20 V24"
            fill="none"
            stroke="url(#t1IconGold)"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          <rect x="6" y="21" width="6" height="11" rx="3" fill="url(#t1IconGold)" />
          <rect x="32" y="21" width="6" height="11" rx="3" fill="url(#t1IconGold)" />
          <path
            d="M35 30 C35 35 30 37 22 37"
            fill="none"
            stroke="url(#t1IconGold)"
            strokeWidth="2.8"
            strokeLinecap="round"
          />
          <text
            x="22"
            y="26"
            textAnchor="middle"
            fill="url(#t1IconGold)"
            fontSize="9.5"
            fontWeight="900"
            fontFamily="sans-serif"
          >
            24/7
          </text>
        </>
      )}
      {type === 'download-tray' && (
        <>
          <path
            d="M22 7 V27 M14 20 L22 28 L30 20"
            fill="none"
            stroke="url(#t1IconGold)"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8 29 V36 H36 V29"
            fill="none"
            stroke="url(#t1IconGold)"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </>
      )}
      {type === 'shield-split' && (
        <>
          <path
            d="M22 4 L37 10 V21 C37 31 30 37 22 41 C14 37 7 31 7 21 V10 Z"
            fill="url(#t1IconGold)"
            stroke="#fef08a"
            strokeWidth="1.5"
          />
          <path
            d="M22 6 V39 C15 35 9 30 9 21 V11.5 Z"
            fill="#5b3b0d"
            opacity="0.45"
          />
        </>
      )}
    </svg>
  );
};

