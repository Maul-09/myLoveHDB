"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { SURPRISE_TIMESTAMP } from "../lib/surprise";

export default function StoryLink({ href, children, variant = "primary" }) {
  const router = useRouter();
  const [leaving, setLeaving] = useState(false);
  const [isUnlocked, setIsUnlocked] = useState(false);

  useEffect(() => {
    document.body.classList.remove("route-leaving");

    function updateLockState() {
      setIsUnlocked(Date.now() >= SURPRISE_TIMESTAMP);
    }

    updateLockState();
    const timer = window.setInterval(updateLockState, 1000);

    return () => window.clearInterval(timer);
  }, []);

  function handleClick(event) {
    event.preventDefault();

    if (!isUnlocked || leaving) return;

    setLeaving(true);
    document.body.classList.add("route-leaving");

    window.setTimeout(() => {
      router.push(href);
    }, 320);
  }

  if (!isUnlocked) {
    return (
      <button
        aria-label={`${children} - bisa dibuka pada 9 Juli 2026`}
        className={`story-link story-link-${variant} story-link-disabled`}
        disabled
        type="button"
      >
        {children}
      </button>
    );
  }

  return (
    <a
      className={`story-link story-link-${variant}`}
      href={href}
      onClick={handleClick}
    >
      {children}
    </a>
  );
}
