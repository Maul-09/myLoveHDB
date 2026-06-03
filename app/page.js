"use client";

import { useEffect, useMemo, useState } from "react";

const TARGET_DATE = new Date("2026-07-09T00:00:00+07:00").getTime();
const BANNER_FLAGS = Array.from({ length: 9 }, (_, index) => index);
const DECORATIONS = [
  "heart heart-one",
  "heart heart-two",
  "heart heart-three",
  "spark spark-one",
  "spark spark-two",
  "spark spark-three",
  "gift gift-one",
  "gift gift-two",
];

function getTimeLeft() {
  const distance = Math.max(0, TARGET_DATE - Date.now());

  return {
    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
    hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((distance / (1000 * 60)) % 60),
    seconds: Math.floor((distance / 1000) % 60),
    isDone: distance === 0,
  };
}

function formatUnit(value) {
  return String(value).padStart(2, "0");
}

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(getTimeLeft);

  useEffect(() => {
    setMounted(true);
    setTimeLeft(getTimeLeft());

    const timer = window.setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => window.clearInterval(timer);
  }, []);

  const units = useMemo(
    () => [
      { label: "Hari", value: timeLeft.days, tone: "pink" },
      { label: "Jam", value: timeLeft.hours, tone: "blue" },
      { label: "Menit", value: timeLeft.minutes, tone: "lavender" },
      { label: "Detik", value: timeLeft.seconds, tone: "sunny" },
    ],
    [timeLeft],
  );

  return (
    <main className="countdown-page">
      <div className="party-banner" aria-hidden="true">
        {BANNER_FLAGS.map((flag) => (
          <span className="banner-flag" key={flag} />
        ))}
      </div>

      <div className="decor-layer" aria-hidden="true">
        {DECORATIONS.map((className) => (
          <span className={className} key={className} />
        ))}
      </div>

      <section className="countdown-content" aria-live="polite">
        <p className="eyebrow">
          <span className="mini-heart" aria-hidden="true" />
          Untuk kamu, cayaang
          <span className="mini-spark" aria-hidden="true" />
        </p>
        <h1>Sebentar Lagi Hari Kamu</h1>
        <p className="subtitle">
          {timeLeft.isDone
            ? "Akhirnya sampai juga. Hari ini tentang kamu, dan aku sudah nunggu momen ini dari lama."
            : "Aku lagi nyiapin sesuatu yang kecil-kecil kepikiran terus. Sampai 9 Juli nanti, biar waktu yang jagain rahasianya dulu."}
        </p>

        <div className="countdown-grid">
          {units.map((unit) => (
            <div className={`countdown-unit ${unit.tone}`} key={unit.label}>
              <span className="unit-bow" aria-hidden="true" />
              <span className="countdown-number">
                {mounted ? formatUnit(unit.value) : "--"}
              </span>
              <span className="countdown-label">{unit.label}</span>
            </div>
          ))}
        </div>

        <div className="target-row">
          <span>9 Juli 2026</span>
          <span>Hari yang aku tunggu</span>
        </div>
        <p className="sweet-note">
          Nanti kalau waktunya tiba, semoga kamu senyum lama banget... karena semuanya memang aku siapin buat kamu.
        </p>
      </section>
    </main>
  );
}
