"use client";

import { useState } from 'react';

interface EmailRevealProps {
  className?: string;
}

export function EmailReveal({ className }: EmailRevealProps) {
  const [revealed, setRevealed] = useState(false);

  // Build email at runtime to avoid exposing it in static HTML
  const username = String.fromCharCode(119, 97, 114, 100, 100, 101, 109); // warddem
  const domain = String.fromCharCode(103, 109, 97, 105, 108, 46, 99, 111, 109); // gmail.com
  const email = `${username}@${domain}`;

  if (!revealed) {
    return (
      <button
        type="button"
        onClick={() => setRevealed(true)}
        className={className || "text-gray-600 hover:text-black transition-colors underline"}
        aria-label="Reveal email address"
      >
        Click to reveal email
      </button>
    );
  }

  return (
    <a
      href={`mailto:${email}`}
      className={className || "text-gray-600 hover:text-black transition-colors"}
      rel="nofollow noopener noreferrer"
    >
      {email}
    </a>
  );
}


